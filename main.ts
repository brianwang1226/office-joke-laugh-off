// One-Line Office Joke Laugh-Off — make.fun bounty
// Entry: a one-line office joke about the office printer, the only
// coworker who never misses a deadline (it just prints the wrong thing).
// The joke lands because the printer is "reliable" in the worst possible
// way: always on time, always wrong — the office equivalent of a yes-man.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The office printer is the only coworker who never misses a deadline. It just jams, beeps, and prints 400 copies of the wrong document on time.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
