import React from 'react';
import { computeWeakAreas } from '../lib/weakAreas.js';
import { priorityStyles, masteryColor, pct } from './ui.js';

export default function TopicList({ topics, quizzes, flashcards, progress, onOpen }) {
  const stats = computeWeakAreas(topics, quizzes, flashcards, progress);
  const byId = Object.fromEntries(stats.map((s) => [s.id, s]));
  // Show in exam order, but surface the single weakest started topic as a hint.
  const weakest = stats.find((s) => s.started);

  return (
    <div>
      {weakest && (
        <div className="mb-5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          <span className="font-semibold">Revise next:</span> {weakest.title} — quiz accuracy {pct(weakest.accuracy)}, cards {pct(weakest.mastery)}.
        </div>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        {topics.map((t) => {
          const s = byId[t.id];
          return (
            <button
              key={t.id}
              onClick={() => onOpen(t.id)}
              className="group rounded-xl border border-slate-800 bg-slate-900 p-4 text-left transition hover:border-slate-600 hover:bg-slate-800/60"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold leading-snug text-white">{t.title}</h3>
                <span className={`shrink-0 rounded-md border px-2 py-0.5 text-xs font-medium ${priorityStyles[t.priority] || ''}`}>{t.priority}</span>
              </div>
              <div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
                <span>{t.marks} marks</span>
                <span>·</span>
                <span>{t.week}</span>
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs">
                <span className={masteryColor(s.accuracy)}>Quiz {pct(s.accuracy)}</span>
                <span className={masteryColor(s.mastery)}>Cards {pct(s.mastery)}</span>
                {!s.started && <span className="text-slate-500">Not started</span>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
