// Computes per-topic mastery from saved progress and ranks the weakest,
// highest-value topics first so revision time goes where it matters.

const PRIORITY_RANK = { HIGH: 3, MED: 2, STD: 1 };

// Returns an array of per-topic stats sorted weakest-first. Topics with no
// activity are flagged `started: false` so they read as "not started" rather
// than a misleading 0%.
export function computeWeakAreas(topics, quizzes, flashcards, progress) {
  const rows = topics.map((t) => {
    const q = progress.quiz[t.id];
    const cardStatuses = progress.flashcards[t.id] || {};
    const totalCards = (flashcards[t.id] || []).length;

    const attempts = q?.attempts || 0;
    const accuracy = attempts > 0 ? q.correct / attempts : null;

    const knownCount = Object.values(cardStatuses).filter((s) => s === 'known').length;
    const mastery = totalCards > 0 ? knownCount / totalCards : null;

    const started = attempts > 0 || Object.keys(cardStatuses).length > 0;

    // Weakness: 1 = total gap, 0 = mastered. Blend quiz accuracy and flashcard
    // mastery when present; if only one signal exists, use it alone.
    let gap;
    if (accuracy != null && mastery != null) gap = 1 - (0.6 * accuracy + 0.4 * mastery);
    else if (accuracy != null) gap = 1 - accuracy;
    else if (mastery != null) gap = 1 - mastery;
    else gap = 1; // untouched topics are maximally "needs work"

    // Weight by exam value (marks) and priority so high-stakes gaps surface.
    const priorityRank = PRIORITY_RANK[t.priority] || 1;
    const weaknessScore = gap * (t.marks / 12) * (0.7 + 0.1 * priorityRank);

    return {
      id: t.id,
      title: t.title,
      marks: t.marks,
      priority: t.priority,
      week: t.week,
      attempts,
      accuracy,
      knownCount,
      totalCards,
      mastery,
      started,
      gap,
      weaknessScore,
    };
  });

  return rows.sort((a, b) => {
    // Started-and-weak first; untouched topics ranked by value next.
    if (a.started !== b.started) return a.started ? -1 : 1;
    return b.weaknessScore - a.weaknessScore;
  });
}
