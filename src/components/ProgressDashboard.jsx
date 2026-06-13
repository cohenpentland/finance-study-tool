import React from 'react';
import { computeWeakAreas } from '../lib/weakAreas.js';
import { resetAll } from '../lib/storage.js';
import { priorityStyles, masteryColor, pct } from './ui.js';

export default function ProgressDashboard({ topics, quizzes, flashcards, progress, onOpenTopic, onChange }) {
  const stats = computeWeakAreas(topics, quizzes, flashcards, progress);
  const started = stats.filter((s) => s.started);
  const exams = progress.exams || [];

  const reset = () => {
    if (confirm('Clear all saved progress on this device?')) {
      resetAll();
      onChange?.();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Your Progress</h2>
        <button onClick={reset} className="text-xs text-slate-500 hover:text-rose-300">Reset progress</button>
      </div>

      {/* Revise-next: weakest started topics, highest exam value first */}
      <h3 className="mt-5 mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">Revise next</h3>
      {started.length === 0 ? (
        <p className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-400">
          No activity yet. Do a few quizzes or flashcards and your weakest, highest-value topics will surface here.
        </p>
      ) : (
        <div className="space-y-2">
          {started.slice(0, 4).map((s) => (
            <button key={s.id} onClick={() => onOpenTopic(s.id)} className="block w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-left hover:border-slate-600">
              <div className="flex items-center justify-between">
                <span className="font-medium text-white">{s.title}</span>
                <span className={`rounded-md border px-2 py-0.5 text-xs ${priorityStyles[s.priority]}`}>{s.marks} marks</span>
              </div>
              <div className="mt-1 flex gap-4 text-xs">
                <span className={masteryColor(s.accuracy)}>Quiz {pct(s.accuracy)}</span>
                <span className={masteryColor(s.mastery)}>Cards {pct(s.mastery)}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* All topics overview */}
      <h3 className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">All topics</h3>
      <div className="overflow-hidden rounded-xl border border-slate-800">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-left text-xs uppercase text-slate-500">
            <tr><th className="px-3 py-2">Topic</th><th className="px-3 py-2">Marks</th><th className="px-3 py-2">Quiz</th><th className="px-3 py-2">Cards</th></tr>
          </thead>
          <tbody>
            {topics.map((t) => {
              const s = stats.find((x) => x.id === t.id);
              return (
                <tr key={t.id} className="cursor-pointer border-t border-slate-800 hover:bg-slate-900/60" onClick={() => onOpenTopic(t.id)}>
                  <td className="px-3 py-2 text-slate-200">{t.title}</td>
                  <td className="px-3 py-2 text-slate-400">{t.marks}</td>
                  <td className={`px-3 py-2 ${masteryColor(s.accuracy)}`}>{pct(s.accuracy)}</td>
                  <td className={`px-3 py-2 ${masteryColor(s.mastery)}`}>{s.knownCount}/{s.totalCards}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mock exam history */}
      <h3 className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">Mock exam history</h3>
      {exams.length === 0 ? (
        <p className="text-sm text-slate-500">No mock exams completed yet.</p>
      ) : (
        <div className="space-y-1.5">
          {exams.map((e, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm">
              <span className="text-slate-400">{new Date(e.ts).toLocaleDateString()} {new Date(e.ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              <span className={`font-semibold ${masteryColor(e.score / e.total)}`}>{e.score}/{e.total}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
