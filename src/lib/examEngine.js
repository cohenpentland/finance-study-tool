// Mock-exam engine: builds a weighted, mixed-topic question set and scores it.
// Topic marks sum to 100, so each topic's `marks` is directly its weight.

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Allocate `total` questions across topics proportional to marks, then reconcile
// rounding so the counts sum exactly to `total`.
function allocate(topics, total) {
  const totalMarks = topics.reduce((s, t) => s + t.marks, 0);
  const raw = topics.map((t) => ({ id: t.id, exact: (total * t.marks) / totalMarks }));
  const counts = raw.map((r) => ({ id: r.id, n: Math.floor(r.exact), frac: r.exact - Math.floor(r.exact) }));
  let assigned = counts.reduce((s, c) => s + c.n, 0);
  // Hand out the remaining slots to the largest fractional remainders.
  const order = counts.slice().sort((a, b) => b.frac - a.frac);
  let i = 0;
  while (assigned < total) {
    order[i % order.length].n += 1;
    assigned += 1;
    i += 1;
  }
  return Object.fromEntries(counts.map((c) => [c.id, c.n]));
}

// Build a mock exam. Returns an array of questions tagged with their topic +
// the marks each question is worth (a topic's marks split across its questions).
export function buildExam(topics, quizzes, { totalQuestions = 40 } = {}) {
  const alloc = allocate(topics, totalQuestions);
  const questions = [];
  for (const topic of topics) {
    // Only objectively auto-gradable questions belong in a scored exam;
    // self-graded short-answer questions stay in per-topic Quiz mode.
    const bank = (quizzes[topic.id] || []).filter((q) => (q.type || 'mcq') !== 'short');
    const n = Math.min(alloc[topic.id] || 0, bank.length);
    if (n === 0) continue;
    const picked = shuffle(bank).slice(0, n);
    const marksPer = topic.marks / n;
    picked.forEach((q, idx) => {
      questions.push({
        ...q,
        topicId: topic.id,
        topicTitle: topic.title,
        marksWorth: marksPer,
        srcIndex: bank.indexOf(q),
        examIndex: `${topic.id}:${idx}`,
      });
    });
  }
  return shuffle(questions);
}

// Grade a finished exam. `answers` maps examIndex -> chosen value.
export function gradeExam(questions, answers) {
  const perTopic = {};
  let earned = 0;
  let available = 0;
  for (const q of questions) {
    const pt = (perTopic[q.topicId] ||= { title: q.topicTitle, earned: 0, available: 0, correct: 0, total: 0 });
    pt.available += q.marksWorth;
    pt.total += 1;
    available += q.marksWorth;
    const given = answers[q.examIndex];
    const isCorrect = isAnswerCorrect(q, given);
    if (isCorrect) {
      pt.earned += q.marksWorth;
      pt.correct += 1;
      earned += q.marksWorth;
    }
  }
  return {
    score: Math.round(earned),
    total: Math.round(available),
    perTopic,
  };
}

// Shared correctness check across MCQ / calc / short types.
export function isAnswerCorrect(q, given) {
  if (given == null || given === '') return false;
  const type = q.type || 'mcq';
  if (type === 'calc') {
    const tol = q.tolerance ?? 0.01;
    const target = typeof q.answer === 'number' ? q.answer : parseFloat(q.answer);
    return Math.abs(parseFloat(given) - target) <= tol;
  }
  if (type === 'short') {
    // Self-graded: the UI passes a boolean for short-answer questions.
    return given === true;
  }
  return Number(given) === Number(q.answer);
}
