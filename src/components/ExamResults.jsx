import React from 'react';
import { isAnswerCorrect } from '../lib/examEngine.js';
import { pct, masteryColor } from './ui.js';

export default function ExamResults({ result, onExit }) {
  const { score, total, perTopic, questions, answers } = result;
  const ratio = total > 0 ? score / total : 0;
  const grade = ratio >= 0.8 ? 'Excellent' : ratio >= 0.65 ? 'Solid' : ratio >= 0.5 ? 'Passing' : 'Needs work';

  const rows = Object.entries(perTopic)
    .map(([id, t]) => ({ id, ...t, ratio: t.available > 0 ? t.earned / t.available : 0 }))
    .sort((a, b) => a.ratio - b.ratio); // weakest first

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="text-xl font-bold text-white">Exam Results</h2>

      <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
        <p className="text-5xl font-bold text-white">{score}<span className="text-2xl text-slate-500">/{total}</span></p>
        <p className={`mt-1 text-lg font-semibold ${masteryColor(ratio)}`}>{pct(ratio)} · {grade}</p>
      </div>

      <h3 className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">By topic (weakest first)</h3>
      <div className="space-y-2">
        {rows.map((t) => (
          <div key={t.id} className="rounded-xl border border-slate-800 bg-slate-900 p-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-200">{t.title}</span>
              <span className={`font-semibold ${masteryColor(t.ratio)}`}>{t.correct}/{t.total} · {pct(t.ratio)}</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded bg-slate-800">
              <div className={`h-full ${t.ratio >= 0.8 ? 'bg-emerald-500' : t.ratio >= 0.5 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${t.ratio * 100}%` }} />
            </div>
          </div>
        ))}
      </div>

      <details className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-4">
        <summary className="cursor-pointer text-sm font-medium text-slate-300">Review answers</summary>
        <div className="mt-3 space-y-3">
          {questions.map((q) => {
            const given = answers[q.examIndex];
            const ok = isAnswerCorrect(q, given);
            return (
              <div key={q.examIndex} className={`rounded-lg border p-3 text-sm ${ok ? 'border-emerald-700/40' : 'border-rose-700/40'}`}>
                <p className="font-medium text-white">{q.q}</p>
                <p className="mt-1 text-slate-400">Your answer: <span className={ok ? 'text-emerald-300' : 'text-rose-300'}>{formatGiven(q, given)}</span></p>
                {!ok && <p className="text-emerald-300">Correct: {formatCorrect(q)}</p>}
                {q.explanation && <p className="mt-1 text-slate-400">{q.explanation}</p>}
              </div>
            );
          })}
        </div>
      </details>

      <button onClick={onExit} className="mt-6 rounded-lg bg-slate-700 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-600">Done</button>
    </div>
  );
}

function formatGiven(q, given) {
  if (given == null || given === '') return '(blank)';
  if ((q.type || 'mcq') === 'mcq') return q.options[given];
  return String(given);
}

function formatCorrect(q) {
  if ((q.type || 'mcq') === 'mcq') return q.options[q.answer];
  return String(q.answer);
}
