// hello from the reviewer: this batch of orders claims the lone slot.
// thinking_revised final: the Moon's one star lands with no trailing newline.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const review = 'One star. Beautiful from afar, but no Wi-Fi, bad reading light, and it vanishes half the month.';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), review, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(review, 'utf8')} bytes`);
