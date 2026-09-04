/**
 * Core engine: reads Codacy config, builds oxlint invocation, parses output,
 * and emits Codacy issues to stdout.
 */

import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import * as path from "node:path";
import { join, extname } from "node:path";
import type {
  CodacyIssue,
  CodacyRc,
  OxlintDiagnostic,
  OxlintOutput,
} from "./types.ts";
import { SOURCE_DIR, getToolConfig } from "./codacyrc.ts";

// ─── Constants ────────────────────────────────────────────────────────────────

const OXLINT_BIN = process.env.OXLINT_BIN ?? "oxlint";

/** Config file names that oxlint looks for by default in the project root */


function existsOxlintConfigInRepoRoot(srcDirPath: string): string | undefined {
  const NATIVE_CONFIG_FILES = [
    ".oxlintrc.json",
    ".oxlintrc.jsonc",
    "oxlint.config.json",
    "oxlint.config.jsonc",
  ];
  return NATIVE_CONFIG_FILES.find(filename => existsSync(join(srcDirPath, filename)));
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Parse pattern ID in format "plugin_rule" (or bare "rule")
 * Returns { plugin, rule } where plugin may be undefined.
 */
function parsePatternId(patternId: string): { plugin?: string; rule: string } {
  const match = patternId.match(/^([a-z][a-z0-9-]*)_(.+)$/);
  if (match) {
    return { plugin: match[1], rule: match[2] };
  }
  return { rule: patternId };
}

/**
 * Convert oxlint "code" field (e.g. "eslint(no-unused-vars)", "typescript(no-explicit-any)")
 * back to a Codacy patternId (e.g. "eslint/no-unused-vars").
 */
export function codeToPatternId(code: string): string {
  // Format: "plugin(rule)" or just "rule"
  const match = code.match(/^([a-z_-]+)\((.+)\)$/);
  if (match) {
    const plugin = match[1];
    const rule = match[2];
    // eslint rules use no prefix in the rules.rs file, but we namespace them
    return `${plugin}_${rule}`;
  }
  return code;
}

/** oxlint severity → Codacy level */
function toLevel(severity: string): CodacyIssue["level"] {
  switch (severity) {
    case "error":
      return "Error";
    case "warning":
      return "Warning";
    default:
      return "Info";
  }
}

/** Get the primary line number from a diagnostic (first label's span) */
function getLine(d: OxlintDiagnostic): number {
  return d.labels?.[0]?.span?.line ?? 1;
}

// ─── File discovery ───────────────────────────────────────────────────────────

const SUPPORTED_EXTENSIONS = new Set([
  ".js", ".mjs", ".cjs",
  ".jsx",
  ".ts", ".mts", ".cts",
  ".tsx",
  ".vue",
]);

const SKIP_DIRS = new Set([
  "node_modules", ".git", ".hg", ".svn",
  "dist", "build", "out", "coverage", ".cache",
]);

/** Recursively find all supported source files under a directory. */
function findFiles(dir: string): string[] {
  const result: string[] = [];
  function walk(d: string) {
    let entries;
    try {
      entries = readdirSync(d, { withFileTypes: true });
    } catch {
      return; // skip inaccessible directories
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) {
          walk(join(d, entry.name));
        }
      } else if (SUPPORTED_EXTENSIONS.has(extname(entry.name))) {
        result.push(join(d, entry.name));
      }
    }
  }
  walk(dir);
  return result;
}

// ─── Config file builder ──────────────────────────────────────────────────────
// ─── Run oxlint ───────────────────────────────────────────────────────────────

interface RunResult {
  diagnostics: OxlintDiagnostic[];
  error?: string;
}

function runOxlint(
  files: string[],
  configPath?: string,
  extraArgs: string[] = []
): RunResult {
  const args: string[] = ["--format", "json"];

  if (configPath) {
    args.push("--config", configPath);
  }

  args.push(...extraArgs, "--", ...files);

  const result = spawnSync(OXLINT_BIN, args, {
    maxBuffer: 100 * 1024 * 1024,
    encoding: "utf-8",
  });

  if (result.error) {
    return { diagnostics: [], error: result.error.message };
  }

  // Oxlint exits with code 1 when violations are found, which is normal
  // Only treat as error if we can't parse the output
  try {
    const parsed = JSON.parse((result.stdout ?? "").trim()) as OxlintOutput;
    return { diagnostics: parsed.diagnostics ?? [] };
  } catch (parseErr) {
    // Failed to parse JSON output
    const stderr = result.stderr?.slice(0, 200) || "";
    const reason = stderr || `oxlint exited with code ${result.status}`;
    return { diagnostics: [], error: `Failed to parse oxlint output: ${reason}` };
  }
}

// ─── Main engine ─────────────────────────────────────────────────────────────

export async function engineImpl(rc: CodacyRc | undefined): Promise<void> {
  const toolConfig = getToolConfig(rc);

  // Files to lint — when Codacy provides a list use it directly;
  // otherwise discover all supported files recursively.
  const files: string[] =
    rc?.files?.map((f) => join(SOURCE_DIR, f)) ?? findFiles(SOURCE_DIR);

  let configPath: string | undefined;
  const extraArgs: string[] = [];

  if (toolConfig?.patterns && toolConfig.patterns.length > 0) {
    // ── Mode 1: Codacy provided explicit patterns ──────────────────────────
    // Disable all rules first
    extraArgs.push("--allow", "all");
    // Enable only selected patterns
    for (const pattern of toolConfig.patterns) {
      const { plugin, rule } = parsePatternId(pattern.patternId);
      if (!plugin) {
        process.stderr.write(`[codacy-oxlint] Warning: pattern ${pattern.patternId} has no plugin prefix, skipping\n`);
        continue;
      }
      const oxlintRule = `${plugin}/${rule}`;
      extraArgs.push("--deny", oxlintRule);
    }
  } else {
    // ── Mode 2: Look for native config file in project root ───────────────
    const nativeConfig = existsOxlintConfigInRepoRoot(SOURCE_DIR);
    if (nativeConfig) {
      configPath = join(SOURCE_DIR, nativeConfig);
    }
  }

  try {
    const { diagnostics, error } = runOxlint(files, configPath, extraArgs);

    if (error) {
      process.stderr.write(`[codacy-oxlint] Error running oxlint: ${error}\n`);
      process.exit(1);
    }

    for (const diag of diagnostics) {
      if (!diag.code) {
        process.stderr.write(`[codacy-oxlint] Warning: Skipping issue in ${diag.filename}:${getLine(diag)} - missing rule code\n`);
        continue;
      }

      const issue: CodacyIssue = {
        filename: diag.filename.startsWith(SOURCE_DIR)
          ? diag.filename.slice(SOURCE_DIR.length + 1)
          : diag.filename,
        line: getLine(diag),
        message: diag.message,
        patternId: codeToPatternId(diag.code),
        level: toLevel(diag.severity),
      };
      process.stdout.write(JSON.stringify(issue) + "\n");
    }
  } catch (err) {
    process.stderr.write(`[codacy-oxlint] Fatal error: ${String(err)}\n`);
    process.exit(1);
  }
}