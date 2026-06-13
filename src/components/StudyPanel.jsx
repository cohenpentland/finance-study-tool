import React from 'react';

// Study mode presents the topic's key concepts as a readable notes sheet,
// derived from the same content as the flashcards (front = concept, back =
// explanation). This keeps every fact from the original notes available in a
// scannable, exam-revision layout.
export default function StudyPanel({ cards }) {
  if (!cards.length) {
    return <p className="text-slate-400">No notes for this topic yet.</p>;
  }
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">Key concepts</h3>
      <div className="space-y-3">
        {cards.map((c, i) => (
          <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="font-semibold text-emerald-300">{c.front}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{c.back}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
