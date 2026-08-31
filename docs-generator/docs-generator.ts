/**
 * Codacy oxlint documentation generator.
 *
 * Automatically:
 * 1. Runs `oxlint --rules` to fetch all rules
 * 2. Parses the markdown output
 * 3. Dynamically categorizes and levels patterns
 * 4. Generates documentation files
 */

import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";
import type { DescriptionEntry, PatternsFile, PatternSpec } from "../src/types.ts";

const DOCS_DIR = join(import.meta.dirname, "../docs");
const DESC_DIR = join(DOCS_DIR, "description");
const MULTIPLE_TESTS_DIR = join(DOCS_DIR, "multiple-tests");
const ALL_PATTERNS_DIR = join(MULTIPLE_TESTS_DIR, "all-patterns");

const TOOL_NAME = "oxlint";

// ════════════════════════════════════════════════════════════════════════════
// PARSING
// ════════════════════════════════════════════════════════════════════════════

interface RuleEntry {
  plugin: string;
  rule: string;
  level: "Error" | "Warning";
  category: PatternSpec["category"];
  enabled: boolean;
}

// Category mapping from oxlint categories to pattern categories
const CATEGORY_MAPPING: Record<string, { category: PatternSpec["category"]; level: "Error" | "Warning" }> = {
  correctness: { category: "ErrorProne", level: "Error" },
  perf: { category: "Performance", level: "Warning" },
  restriction: { category: "CodeStyle", level: "Warning" },
  suspicious: { category: "ErrorProne", level: "Warning" },
  pedantic: { category: "CodeStyle", level: "Warning" },
  style: { category: "CodeStyle", level: "Warning" },
  nursery: { category: "ErrorProne", level: "Warning" },
};

// Plugin name normalization
const PLUGIN_ALIASES: Record<string, string> = {
  node: "node",
  promise: "promise",
  react_perf: "react-perf",
  vitest: "vitest",
  vue: "vue",
  jsx_a11y: "jsx-a11y",
};

/**
 * Parse oxlint rules from markdown table format
 */
function parseRulesFromMarkdown(markdown: string): RuleEntry[] {
  const rules: RuleEntry[] = [];
  let currentCategory = "";

  const lines = markdown.split("\n");

  for (const line of lines) {
    // Detect category headers (e.g., "## Correctness (272)")
    const categoryMatch = line.match(/^##\s+(\w+)\s*\(/i);
    if (categoryMatch) {
      currentCategory = categoryMatch[1].toLowerCase();
      continue;
    }

    // Skip header separators and empty lines
    if (!line.includes("|") || line.includes("---") || line.includes("Rule name")) {
      continue;
    }

    // Parse table rows: | rule-name | plugin | default | enabled | fixable |
    const cells = line
      .split("|")
      .map((cell) => cell.trim())
      .filter((cell) => cell);

    if (cells.length < 2) continue;

    const ruleName = cells[0];
    const plugin = cells[1];

    // Skip invalid entries
    if (!ruleName || !plugin || ruleName === "Rule name") continue;

    // Get category and level mapping
    const mapping = CATEGORY_MAPPING[currentCategory] || {
      category: "CodeStyle" as const,
      level: "Warning" as const,
    };

    // Determine if enabled by checking "Default" column for ✅
    const defaultColumn = cells[2] || "";
    const enabled = defaultColumn.includes("✅");

    // Normalize plugin name
    const normalizedPlugin = PLUGIN_ALIASES[plugin.toLowerCase()] || plugin.toLowerCase();

    rules.push({
      plugin: normalizedPlugin,
      rule: ruleName.toLowerCase(),
      level: mapping.level,
      category: mapping.category,
      enabled,
    });
  }

  return rules;
}

/**
 * Get oxlint version from .tool_version
 */
function getOxlintVersion(): string {
  try {
    const toolVersionPath = join(import.meta.dirname, "../.tool_version");
    return readFileSync(toolVersionPath, "utf-8").trim();
  } catch {
    return "1.0.0";
  }
}

// ════════════════════════════════════════════════════════════════════════════
// DATA FETCHING
// ════════════════════════════════════════════════════════════════════════════

/**
 * Fetch rules from oxlint --rules command
 */
function fetchOxlintRules(): string {
  console.log("Running: oxlint --rules");
  try {
    return execSync("oxlint --rules", { encoding: "utf-8" });
  } catch (error) {
    console.error("Failed to run oxlint --rules");
    throw error;
  }
}

// ════════════════════════════════════════════════════════════════════════════
// TRANSFORMATION
// ════════════════════════════════════════════════════════════════════════════

/**
 * Convert parsed rules to PatternSpec array
 */
function rulesToPatterns(rules: RuleEntry[]): PatternSpec[] {
  return rules.map((r) => ({
    patternId: `${r.plugin}_${r.rule}`,
    level: r.level,
    category: r.category,
    enabled: false, // All patterns disabled by default; users must explicitly enable them
  }));
}

/**
 * Convert rules to documentation format
 */
function rulesToDocs(rules: RuleEntry[]): Array<{ patternId: string; plugin: string; rule: string; title: string; docUrl: string }> {
  return rules.map((r) => {
    const title = r.rule
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      patternId: `${r.plugin}_${r.rule}`,
      plugin: r.plugin,
      rule: r.rule,
      title: `${title} (${r.plugin})`,
      docUrl: `https://oxc.rs/docs/guide/usage/linter/rules/${r.plugin}/${r.rule}.html`,
    };
  });
}

// ════════════════════════════════════════════════════════════════════════════
// FILE GENERATION
// ════════════════════════════════════════════════════════════════════════════

function ensureDirs(): void {
  mkdirSync(DOCS_DIR, { recursive: true });
  mkdirSync(DESC_DIR, { recursive: true });
  mkdirSync(MULTIPLE_TESTS_DIR, { recursive: true });
  mkdirSync(ALL_PATTERNS_DIR, { recursive: true });
}

/**
 * Generate patterns.json
 */
function generatePatternsFile(patterns: PatternSpec[]): void {
  const patternsFile: PatternsFile = {
    name: TOOL_NAME,
    version: getOxlintVersion(),
    patterns,
  };
  const dest = join(DOCS_DIR, "patterns.json");
  writeFileSync(dest, JSON.stringify(patternsFile, null, 2));
  console.log(`✓ patterns.json (${patterns.length} patterns)`);
}

/**
 * Fetch documentation content from oxc.rs for a specific rule
 */
async function fetchRuleDocumentation(docUrl: string): Promise<string> {
  try {
    const response = await fetch(docUrl, { signal: AbortSignal.timeout(5000) });
    if (!response.ok) {
      return "";
    }

    const html = await response.text();

    // Extract main documentation content from the HTML
    const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/);
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
    const contentMatch = articleMatch || mainMatch;

    if (!contentMatch) {
      return "";
    }

    let content = contentMatch[1];

    // Remove script tags, style tags, and meta comments
    content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
    content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
    content = content.replace(/<!--[\s\S]*?-->/g, ""); // Remove HTML comments

    // Remove nav and footer elements
    content = content.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "");
    content = content.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "");
    content = content.replace(/<aside[^>]*>[\s\S]*?<\/aside>/gi, "");

    // Remove Vue.js data attributes and unwanted text patterns
    content = content.replace(/data-v-[a-f0-9]+/gi, "");
    content = content.replace(/←\s*Back to rules/gi, "");
    content = content.replace(/Are you an LLM\?[\s\S]*?(?=<|$)/gi, "");

    // Remove only standalone emoji-prefixed status comments (at line start)
    content = content.replace(/^[🚧✅💡⚠️🛠️]\s+.*\n?/gm, "");
    // Remove "Back to rules" navigation only
    content = content.replace(/.*← Back to rules.*\n?/gi, "");
    // Remove LLM message
    content = content.replace(/Are you an LLM\?[\s\S]*?(?=\n##|$)/gi, "");

    // Convert HTML tags to readable text
    content = content
      .replace(/<a\s+href=["']([^"']*?)["'][^>]*>([^<]*)<\/a>/gi, "[$2]($1)") // Convert links to markdown
      .replace(/<h[1-6][^>]*>/gi, "\n## ")
      .replace(/<\/h[1-6]>/gi, "\n")
      .replace(/<p[^>]*>/gi, "\n")
      .replace(/<\/p>/gi, "\n")
      .replace(/<li[^>]*>/gi, "- ")
      .replace(/<\/li>/gi, "\n")
      .replace(/<ul[^>]*>|<ol[^>]*>|<\/ul>|<\/ol>/gi, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, "\n```\n$1\n```\n")
      .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, "`$1`")
      .replace(/<[^>]+>/g, ""); // Remove all remaining HTML tags

    // Decode HTML entities
    const entities: Record<string, string> = {
      "&quot;": '"',
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&nbsp;": " ",
      "&#39;": "'",
      "&apos;": "'",
      "&#8203;": "", // Zero-width space
      "&#8204;": "", // Zero-width non-joiner
      "&#8205;": "", // Zero-width joiner
      "&#65279;": "", // Zero-width no-break space
    };
    for (const [entity, char] of Object.entries(entities)) {
      content = content.replace(new RegExp(entity, "g"), char);
    }

    // Also remove actual zero-width characters that might already be decoded
    content = content.replace(/[​‌‍﻿]/g, "");

    // Clean up whitespace and remove unwanted characters
    content = content
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => {
        // Remove empty lines and lines with only navigation chars
        if (!line) return false;
        // Only remove lines that are ONLY navigation arrows/quotes (not code fences)
        if (line.match(/^[←→«»"'\s]+$/)) return false;
        return true;
      })
      .join("\n");

    return content.substring(0, 5000); // Limit to 5000 chars to include examples
  } catch (error) {
    return "";
  }
}

/**
 * Generate description.json and per-rule markdown files
 * Uses parallel fetching with concurrency limit for speed
 */
async function generateDescriptions(
  docs: Array<{ patternId: string; plugin: string; rule: string; title: string; docUrl: string }>
): Promise<void> {
  const descriptions: DescriptionEntry[] = [];
  const CONCURRENCY = 5; // Parallel requests
  let processedCount = 0;

  console.log(`Fetching rule documentation from oxc.rs (${CONCURRENCY} parallel)...`);

  // Fetch all documentation in parallel with concurrency limit
  const docContents: string[] = new Array(docs.length).fill("");

  // Create worker pool with concurrency limit
  const workers = Array.from({ length: CONCURRENCY }, async (_, workerId) => {
    for (let i = workerId; i < docs.length; i += CONCURRENCY) {
      const doc = docs[i];
      docContents[i] = await fetchRuleDocumentation(doc.docUrl);
      processedCount++;
      if (processedCount % 100 === 0) {
        console.log(`  Fetched ${processedCount}/${docs.length} rules...`);
      }
    }
  });

  await Promise.all(workers);

  // Process and write files
  console.log("Writing markdown files...");
  for (let i = 0; i < docs.length; i++) {
    const doc = docs[i];
    const docContent = docContents[i];

    // Extract "What it does" section for description (max 500 chars)
    let description = "See the documentation for more details.";
    if (docContent) {
      const whatItDoesMatch = docContent.match(/##\s+What it does[\s\S]*?(?=##|$)/i);
      if (whatItDoesMatch) {
        const escapedTitle = "What it does".replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const content = whatItDoesMatch[0]
          .replace(new RegExp(`^##\\s+${escapedTitle}\\s*`, "i"), "")
          .trim();
        if (content && content.length > 0) {
          description = content.substring(0, 500);
        }
      }
    }

    const desc: DescriptionEntry = {
      patternId: doc.patternId,
      title: doc.title,
      description,
      timeToFix: 5,
    };
    descriptions.push(desc);

    // Extract main sections from documentation
    const sections: { title: string; content: string }[] = [];

    if (docContent) {
      // Define section patterns in order
      const sectionPatterns = [
        { title: "What it does", pattern: /##\s+What it does[\s\S]*?(?=##|$)/i },
        { title: "Why is this bad?", pattern: /##\s+Why is this bad\?[\s\S]*?(?=##|$)/i },
        { title: "Examples", pattern: /##\s+Examples?[\s\S]*?(?=##|$)/i },
        { title: "Configuration", pattern: /##\s+Configuration[\s\S]*?(?=##|$)/i },
        { title: "How to use", pattern: /##\s+How to use[\s\S]*?(?=##|$)/i },
        { title: "Version", pattern: /##\s+Version[\s\S]*?(?=##|$)/i },
      ];

      for (const { title, pattern } of sectionPatterns) {
        const match = docContent.match(pattern);
        if (match) {
          // Escape special regex characters in title
          const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const content = match[0]
            .replace(new RegExp(`^##\\s+${escapedTitle}\\s*`, "i"), "")
            .trim();
          // Only include non-empty sections with meaningful content
          if (content && content.length > 20) {
            sections.push({ title, content });
          }
        }
      }
    }

    // Extract references separately
    const referencesMatch = docContent?.match(/## References[\s\S]*$/i);

    // Build markdown with only existing sections
    let mdContent = `# ${doc.title}

**Pattern ID:** \`${doc.patternId}\`
**Plugin:** \`${doc.plugin}\`

`;

    if (sections.length > 0) {
      mdContent += sections.map((s) => `## ${s.title}\n\n${s.content}`).join("\n\n");
    } else {
      mdContent += `See the [oxlint rule reference](${doc.docUrl}) for full documentation.`;
    }

    mdContent += `\n\n## References\n\n`;
    if (referencesMatch) {
      mdContent += referencesMatch[0].replace(/^## References\s*\n/, "").trim() + "\n";
    }
    mdContent += `- [oxlint rule reference](${doc.docUrl})\n- [oxc project](https://github.com/oxc-project/oxc)`;

    writeFileSync(join(DESC_DIR, `${doc.patternId}.md`), mdContent);
  }

  writeFileSync(join(DESC_DIR, "description.json"), JSON.stringify(descriptions, null, 2));
  console.log(`✓ description.json + ${docs.length} rule files`);
}

/**
 * Generate patterns.xml for integration tests
 */
function generateAllPatternsXml(patterns: PatternSpec[]): void {
  const lines: string[] = ['<module name="root">'];
  for (const p of patterns) {
    lines.push(`    <module name="${p.patternId}" />`);
  }
  lines.push("</module>");
  const dest = join(ALL_PATTERNS_DIR, "patterns.xml");
  writeFileSync(dest, lines.join("\n") + "\n");
  console.log(`✓ multiple-tests/all-patterns/patterns.xml (${patterns.length} patterns)`);
}

// ════════════════════════════════════════════════════════════════════════════
// MAIN
// ════════════════════════════════════════════════════════════════════════════

async function main(): Promise<void> {
  console.log("Generating codacy-oxlint documentation...\n");

  // Step 1: Fetch oxlint rules
  console.log("Step 1: Fetching oxlint rules...");
  const rulesMarkdown = fetchOxlintRules();
  console.log("✓ Rules fetched\n");

  // Step 2: Parse rules
  console.log("Step 2: Parsing rules...");
  const rules = parseRulesFromMarkdown(rulesMarkdown);
  console.log(`✓ Parsed ${rules.length} rules\n`);

  // Step 3: Transform to patterns and docs
  console.log("Step 3: Transforming data...");
  const patterns = rulesToPatterns(rules);
  const docs = rulesToDocs(rules);
  console.log(`✓ Transformed ${patterns.length} patterns\n`);

  // Step 4: Prepare output
  console.log("Step 4: Creating output directories...");
  ensureDirs();
  console.log("✓ Directories created\n");

  // Step 5: Generate files
  console.log("Step 5: Generating documentation files...");
  generatePatternsFile(patterns);
  await generateDescriptions(docs);
  generateAllPatternsXml(patterns);
  console.log("\n✅ Documentation generated successfully!");
}

main().catch(console.error);
