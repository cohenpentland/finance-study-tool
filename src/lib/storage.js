// Offline localStorage persistence layer. Single versioned key so future schema
// changes can migrate safely. Every read/write is wrapped so corrupt or absent
// data degrades gracefully to a fresh default (never throws into the UI).

const KEY = 'fst:v1';

function defaultState() {
  return { version: 1, quiz: {}, flashcards: {}, exams: [] };
}

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== 1) return defaultState();
    return { ...defaultState(), ...parsed };
  } catch {
    return defaultState();
  }
}

export function save(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage full or unavailable — non-fatal for studying */
  }
}

function mutate(fn) {
  const state = load();
  fn(state);
  save(state);
  return state;
}

// Record a single quiz answer (per-topic aggregate + per-question tracking).
export function recordQuizAnswer(topicId, qIndex, correct) {
  return mutate((s) => {
    const t = (s.quiz[topicId] ||= { attempts: 0, correct: 0, perQuestion: {} });
    t.attempts += 1;
    if (correct) t.correct += 1;
    const pq = (t.perQuestion[qIndex] ||= { seen: 0, correct: 0 });
    pq.seen += 1;
    if (correct) pq.correct += 1;
  });
}

// Set a flashcard's status: "known" or "review".
export function setCardStatus(topicId, cardIndex, status) {
  return mutate((s) => {
    (s.flashcards[topicId] ||= {})[cardIndex] = status;
  });
}

// Persist a completed mock-exam attempt.
export function recordExam(result) {
  return mutate((s) => {
    s.exams.unshift(result);
    s.exams = s.exams.slice(0, 25); // keep recent history bounded
  });
}

export function resetAll() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  return defaultState();
}

// In-progress mock exam (so an accidental reload mid-exam can resume).
const EXAM_KEY = 'fst:exam-progress:v1';

export function saveExamProgress(progress) {
  try {
    localStorage.setItem(EXAM_KEY, JSON.stringify(progress));
  } catch {
    /* ignore */
  }
}

export function loadExamProgress() {
  try {
    const raw = localStorage.getItem(EXAM_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearExamProgress() {
  try {
    localStorage.removeItem(EXAM_KEY);
  } catch {
    /* ignore */
  }
}
