// Combined question bank: the original extracted 20 MCQs/topic plus the added
// harder calc/short/hard questions. Kept separate so the auto-extracted file
// stays pristine and re-extractable.
import base from './quizzes.js';
import extra from './extraQuestions.js';

const merged = {};
for (const id of Object.keys(base)) {
  merged[id] = [...base[id], ...(extra[id] || [])];
}
export default merged;
