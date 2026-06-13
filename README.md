# Finance Final — Study Tool

Interactive study tool for the **Swinburne Week-12 Finance final exam**
(10 topics · 100 marks). Rebuilt from a single minified file into clean,
editable React source.

## Features
- **Study / Flashcards / Quiz** per topic (10 topics, 219 questions, 106 flashcards).
- **Mock Exam** — timed, mixed-topic paper. Questions are drawn from every topic
  weighted by its real exam marks and scored out of 100, with a per-topic breakdown.
- **Progress saving + weak-area tracking** — quiz scores and flashcard status are
  saved on your device (localStorage) and the dashboard surfaces your weakest,
  highest-value topics to revise next.
- **Harder questions** — calculation (numeric, tolerance-graded) and short-answer
  (self-graded) questions on top of the original multiple-choice.
- **Interactive tools** — CVP calculator and accounting-equation step-through.
- **Fully offline** — the build inlines everything into one `index.html`.

## Use it
Open `dist/index.html` in any browser — no server, no network needed.

## Develop
```bash
npm install      # one-time
npm run dev      # live dev server
npm run build    # produces the single-file dist/index.html
```

## Project layout
- `src/data/` — content. `topics.js`, `quizzes.js`, `flashcards.js`,
  `accountingEquation.js` were auto-extracted from the original bundle;
  `extraQuestions.js` holds the added harder questions (merged in `questionBank.js`).
- `src/lib/` — `storage.js` (persistence), `examEngine.js` (weighted sampling +
  scoring), `weakAreas.js` (weakest-topic ranking).
- `src/components/` — the React views.
- `tools/extract.mjs` — one-off script that recovered the content from the old
  minified `index.html` (kept for reference).

### Add or edit questions
Edit `src/data/quizzes.js` (base) or `src/data/extraQuestions.js` (harder set),
then `npm run build`. Question shape:
```js
{ q, options, answer, explanation,
  difficulty: "hard",            // optional
  type: "mcq" | "calc" | "short", // optional, default mcq
  tolerance: 0.5 }                // calc only
```
