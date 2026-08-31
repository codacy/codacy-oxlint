// ─── Codacy protocol types ────────────────────────────────────────────────────

export interface CodacyPattern {
  patternId: string;
  parameters?: Array<{ name: string; value: unknown }>;
}

export interface CodacyTool {
  name: string;
  patterns?: CodacyPattern[];
}

export interface CodacyRc {
  tools?: CodacyTool[];
  files?: string[];
}

export interface CodacyIssue {
  filename: string;
  line: number;
  message: string;
  patternId: string;
  level: "Error" | "Warning" | "Info";
}

// ─── oxlint JSON output types ─────────────────────────────────────────────────

export interface OxlintSpan {
  offset: number;
  length: number;
  line: number;
  column: number;
}

export interface OxlintLabel {
  label?: string;
  span: OxlintSpan;
}

export interface OxlintDiagnostic {
  message: string;
  /** e.g. "eslint(no-unused-vars)" or "typescript(no-explicit-any)" */
  code: string;
  severity: "error" | "warning" | "help" | "note";
  url?: string;
  help?: string;
  filename: string;
  labels: OxlintLabel[];
}

export interface OxlintOutput {
  diagnostics: OxlintDiagnostic[];
  number_of_files: number;
  number_of_rules: number;
  threads_count: number;
  start_time: number;
}

// ─── Patterns / docs metadata ─────────────────────────────────────────────────

export type PatternLevel = "Error" | "Warning" | "Info";
export type PatternCategory =
  | "ErrorProne"
  | "CodeStyle"
  | "Compatibility"
  | "Performance"
  | "Security"
  | "UnusedCode";

export interface PatternSpec {
  patternId: string;
  level: PatternLevel;
  category: PatternCategory;
  subcategory?: string;
  enabled: boolean;
  parameters?: Array<{
    name: string;
    description: string;
    default: unknown;
  }>;
}

export interface PatternsFile {
  name: string;
  version: string;
  patterns: PatternSpec[];
}

export interface DescriptionEntry {
  patternId: string;
  title: string;
  description?: string;
  timeToFix: number;
  parameters?: Array<{
    name: string;
    description: string;
  }>;
}
