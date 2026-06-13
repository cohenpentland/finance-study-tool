// One-off extractor: pulls the readable data structures out of the original
// minified index.html and writes clean, hand-editable ES module data files.
// The embedded data is valid JS (e-notation, unquoted keys) — NOT JSON — so we
// evaluate matched slices as JS rather than JSON.parse them.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const src = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

// Scan from the opening bracket (`[` or `{`) at `openIdx`, tracking string
// state and escapes, and return the slice through the matching close bracket.
function matchBracket(str, openIdx) {
  const open = str[openIdx];
  const close = open === '[' ? ']' : '}';
  let depth = 0, inStr = false, quote = '', i = openIdx;
  for (; i < str.length; i++) {
    const ch = str[i];
    if (inStr) {
      if (ch === '\\') { i++; continue; }
      if (ch === quote) inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { inStr = true; quote = ch; continue; }
    if (ch === open || ch === '[' || ch === '{') depth++;
    else if (ch === close || ch === ']' || ch === '}') {
      depth--;
      if (depth === 0) return str.slice(openIdx, i + 1);
    }
  }
  throw new Error(`Unbalanced bracket starting at ${openIdx}`);
}

// Locate `anchor`, then treat the bracket at (anchor start + bracketOffset) as
// the opening bracket of the literal to capture.
function grab(anchor, bracketOffset) {
  const at = src.indexOf(anchor);
  if (at === -1) throw new Error(`Anchor not found: ${anchor}`);
  const openIdx = at + bracketOffset;
  const slice = matchBracket(src, openIdx);
  // eslint-disable-next-line no-new-func
  return Function(`"use strict";return (${slice});`)();
}

// Topics: anchor "[{id:1,title:" — the leading '[' (offset 0) opens the array.
const topics = grab('[{id:1,title:"Financial vs', 0);
// Quiz bank: anchor "={1:[{q:" — the '{' after '=' (offset 1) opens the object.
const quizzes = grab('={1:[{q:"', 1);
// Flashcard bank: anchor "={1:[{front:" — '{' at offset 1.
const flashcards = grab('={1:[{front:"', 1);
// Accounting-equation transactions: anchor "[{label:\"Owner invests" — '[' at 0.
const accountingEquation = grab('[{label:"Owner invests', 0);

// ---- Verification gate ----
const errors = [];
if (!Array.isArray(topics) || topics.length !== 10) errors.push(`topics=${topics.length} (want 10)`);
const qKeys = Object.keys(quizzes).map(Number).sort((a, b) => a - b);
if (qKeys.join(',') !== '1,2,3,4,5,6,7,8,9,10') errors.push(`quiz keys=${qKeys}`);
const allQ = Object.values(quizzes).flat();
if (allQ.length !== 200) errors.push(`questions=${allQ.length} (want 200)`);
for (const [i, q] of allQ.entries()) {
  if (!q.q || !Array.isArray(q.options) || q.options.length !== 4 ||
      !Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3 || !q.explanation)
    errors.push(`bad question #${i}: ${JSON.stringify(q).slice(0, 80)}`);
}
const fKeys = Object.keys(flashcards).map(Number).sort((a, b) => a - b);
if (fKeys.join(',') !== '1,2,3,4,5,6,7,8,9,10') errors.push(`card keys=${fKeys}`);
const allC = Object.values(flashcards).flat();
if (allC.length !== 106) errors.push(`cards=${allC.length} (want 106)`);
for (const [i, c] of allC.entries())
  if (!c.front || !c.back) errors.push(`bad card #${i}`);
if (!Array.isArray(accountingEquation) || accountingEquation.length < 5)
  errors.push(`accountingEquation=${accountingEquation.length}`);

// Spot-checks (round-trip of known content)
const hasPrimary = allQ.some(q => /PRIMARY users/i.test(q.q));
if (!hasPrimary) errors.push('missing "PRIMARY users" question spot-check');

if (errors.length) {
  console.error('EXTRACTION FAILED:\n' + errors.join('\n'));
  process.exit(1);
}

// ---- Write clean data modules ----
mkdirSync(new URL('../src/data/', import.meta.url), { recursive: true });
const banner = '// AUTO-EXTRACTED from the original minified bundle, then hand-editable.\n';
const write = (name, value) =>
  writeFileSync(new URL(`../src/data/${name}`, import.meta.url),
    banner + 'export default ' + JSON.stringify(value, null, 2) + ';\n');

write('topics.js', topics);
write('quizzes.js', quizzes);
write('flashcards.js', flashcards);
write('accountingEquation.js', accountingEquation);

console.log(`OK: ${topics.length} topics, ${allQ.length} questions, ${allC.length} flashcards, ${accountingEquation.length} transactions extracted.`);
