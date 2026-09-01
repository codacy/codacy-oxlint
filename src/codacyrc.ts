import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import type { CodacyRc } from "./types.ts";

export const TOOL_NAME = "oxlint";
export const SOURCE_DIR = process.env.SOURCE_DIR ?? "/src";
export const CODACYRC_PATH = process.env.CODACYRC_PATH ?? "/.codacyrc";

export async function readCodacyRc(): Promise<CodacyRc | undefined> {
  if (!existsSync(CODACYRC_PATH)) {
    return undefined;
  }
  try {
    const raw = await readFile(CODACYRC_PATH, "utf-8");
    return JSON.parse(raw) as CodacyRc;
  } catch {
    return undefined;
  }
}

export function getToolConfig(rc: CodacyRc | undefined) {
  if (!rc?.tools) return undefined;
  return rc.tools.find((t) => t.name === TOOL_NAME);
}
