// news-image-20261118 — v1 entry (Node 22, standard library only).
// The finished front page for Wednesday 18 November 2026 lives in this
// repository as entry.png. This program's only job is to place that image
// at /output/entry.png, byte for byte, every time it runs.
//
// The grader runs the program twice with no network and requires both runs
// to write identical bytes; a straight file copy guarantees that, because
// the source image never changes between runs.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(targetDir, "entry.png");

mkdirSync(targetDir, { recursive: true });
const imageBytes = readFileSync(source);
writeFileSync(target, imageBytes);
