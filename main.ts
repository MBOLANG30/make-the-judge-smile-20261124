// Make the Judge Smile — writes one warm line about a small good thing today.
// The line is a single original sentence: a stranger's unexpected kindness
// at a bakery, with one concrete detail (the last warm croissant) — warm,
// surprising, and told in fresh words rather than greeting-card phrasing.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "This morning a stranger at the bakery slipped the last warm croissant into my bag and whispered, 'today chose you.'";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  console.error(
    `Invalid entry line: must be 1-200 characters and not only whitespace, got ${line.length} characters.`,
  );
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
