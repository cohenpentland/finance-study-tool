import React, { useState } from 'react';
import { recordQuizAnswer } from '../lib/storage.js';
import { isAnswerCorrect } from '../lib/examEngine.js';

// Single-topic quiz with immediate feedback. Supports the optional question
// types: mcq (default), calc (numeric ± tolerance), short (self-graded).
export default function Quiz({ topicId, questions, onProgress }) {
  const [idx, setIdx] = useState(0);
  const [choice, setChoice] = useState(null); // mcq index | calc string | null
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, answered: 0 });

  if (!questions.length) return <p className="text-slate-400">No questions for this topic.</p>;

  const q = questions[idx];
  const type = q.type || 'mcq';

  const submit = (selfCorrect) => {
    if (revealed) return;
    const given = type === 'short' ? selfCorrect : choice;
    const correct = isAnswerCorrect(q, given);
    recordQuizAnswer(topicId, idx, correct);
    setScore((s) => ({ correct: s.correct + (correct ? 1 : 0), answered: s.answered + 1 }));
    setRevealed(true);
    onProgress?.();
  };

  const next = () => {
    setRevealed(false);
    setChoice(null);
    setIdx((i) => (i + 1) % questions.length);
  };

  const correct = revealed && isAnswerCorrect(q, type === 'short' ? choice : choice);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm text-slate-400">
        <span>Question {idx + 1} / {questions.length}</span>
        <span>Score {score.correct}/{score.answered}</span>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {q.difficulty === 'hard' && <Tag className="bg-rose-500/15 text-rose-300">Hard</Tag>}
          {type !== 'mcq' && <Tag className="bg-indigo-500/15 text-indigo-300">{type === 'calc' ? 'Calculation' : 'Short answer'}</Tag>}
        </div>
        <p className="text-base font-medium text-white">{q.q}</p>

        {type === 'mcq' && (
          <div className="mt-4 space-y-2">
            {q.options.map((opt, i) => {
              const state = !revealed ? (choice === i ? 'sel' : 'idle')
                : i === q.answer ? 'right' : choice === i ? 'wrong' : 'idle';
              const cls = {
                idle: 'border-slate-700 hover:border-slate-500',
                sel: 'border-sky-500 bg-sky-500/10',
                right: 'border-emerald-500 bg-emerald-500/15',
                wrong: 'border-rose-500 bg-rose-500/15',
              }[state];
              return (
                <button key={i} disabled={revealed} onClick={() => setChoice(i)} className={`block w-full rounded-lg border px-4 py-2.5 text-left text-sm text-slate-200 transition ${cls}`}>
                  {opt}
                </button>
              );
            })}
          </div>
        )}

        {type === 'calc' && (
          <div className="mt-4">
            <input
              type="number"
              step="any"
              disabled={revealed}
              value={choice ?? ''}
              onChange={(e) => setChoice(e.target.value)}
              placeholder="Enter your numeric answer"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white outline-none focus:border-sky-500"
            />
            {revealed && <p className="mt-2 text-sm text-slate-400">Correct answer: <span className="font-semibold text-emerald-300">{q.answer}</span></p>}
          </div>
        )}

        {type === 'short' && (
          <div className="mt-4">
            {!revealed && <p className="text-sm text-slate-400">Think through your answer, then reveal the model answer and grade yourself.</p>}
            {revealed && (
              <div className="rounded-lg border border-emerald-700/40 bg-emerald-950/30 p-3 text-sm leading-relaxed text-emerald-100">
                <span className="font-semibold">Model answer: </span>{q.answer}
              </div>
            )}
          </div>
        )}

        {revealed && q.explanation && (
          <div className={`mt-4 rounded-lg border p-3 text-sm ${correct ? 'border-emerald-700/40 bg-emerald-950/20 text-emerald-200' : 'border-rose-700/40 bg-rose-950/20 text-rose-200'}`}>
            <span className="font-semibold">{correct ? 'Correct. ' : 'Review. '}</span>{q.explanation}
          </div>
        )}

        <div className="mt-5 flex justify-end gap-2">
          {!revealed && type === 'short' && (
            <>
              <button onClick={() => { setChoice(false); submit(false); }} className="rounded-lg border border-rose-600/40 bg-rose-500/10 px-4 py-2 text-sm text-rose-300">Reveal — I missed it</button>
              <button onClick={() => { setChoice(true); submit(true); }} className="rounded-lg border border-emerald-600/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">Reveal — I got it</button>
            </>
          )}
          {!revealed && type !== 'short' && (
            <button onClick={() => submit()} disabled={choice == null || choice === ''} className="rounded-lg bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-900 disabled:opacity-40">Check</button>
          )}
          {revealed && (
            <button onClick={next} className="rounded-lg bg-slate-700 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-600">Next →</button>
          )}
        </div>
      </div>
    </div>
  );
}

function Tag({ className, children }) {
  return <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${className}`}>{children}</span>;
}
