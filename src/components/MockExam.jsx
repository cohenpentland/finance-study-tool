import React, { useState, useEffect, useRef } from 'react';
import examPaper from '../data/examPaper.js';
import { recordExam, saveExamProgress, loadExamProgress, clearExamProgress } from '../lib/storage.js';
import { fmtTime } from './ui.js';

// The Mock Exam IS the real paper: the 10 official practice/revision questions in
// exam order, 100 marks. Each question is open-response; you attempt it, reveal the
// model answer, and self-mark out of the question's marks.
const TOTAL_MARKS = examPaper.reduce((s, q) => s + q.marks, 0);

export default function MockExam({ onExit }) {
  const [phase, setPhase] = useState('setup'); // setup | running | done
  const [answers, setAnswers] = useState({});
  const [selfMarks, setSelfMarks] = useState({});
  const [revealed, setRevealed] = useState({});
  const [idx, setIdx] = useState(0);
  const [timed, setTimed] = useState(false);
  const [endsAt, setEndsAt] = useState(null);
  const [remaining, setRemaining] = useState(0);
  const resumable = useRef(loadExamProgress());
  const stateRef = useRef({});

  useEffect(() => { stateRef.current = { answers, selfMarks, revealed, idx, endsAt, timed }; });

  // Countdown for timed mode.
  useEffect(() => {
    if (phase !== 'running' || !timed || !endsAt) return;
    const tick = () => {
      const left = Math.max(0, Math.round((endsAt - Date.now()) / 1000));
      setRemaining(left);
      if (left <= 0) finish();
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, timed, endsAt]);

  // Autosave for reload-resume.
  useEffect(() => {
    if (phase === 'running') {
      saveExamProgress({ paper: true, answers, selfMarks, revealed, idx, endsAt, timed });
    }
  }, [phase, answers, selfMarks, revealed, idx, endsAt, timed]);

  const start = (isTimed) => {
    setAnswers({}); setSelfMarks({}); setRevealed({}); setIdx(0);
    setTimed(isTimed);
    setEndsAt(isTimed ? Date.now() + 120 * 60 * 1000 : null);
    setPhase('running');
  };

  const resume = () => {
    const p = resumable.current;
    setAnswers(p.answers || {}); setSelfMarks(p.selfMarks || {}); setRevealed(p.revealed || {});
    setIdx(p.idx || 0); setTimed(!!p.timed); setEndsAt(p.endsAt || null);
    setPhase('running');
  };

  const finish = () => {
    const sm = stateRef.current.selfMarks || selfMarks;
    const score = examPaper.reduce((s, q) => s + (Number(sm[q.num]) || 0), 0);
    recordExam({ ts: Date.now(), score, total: TOTAL_MARKS, paper: true });
    clearExamProgress();
    setPhase('done');
  };

  // ── Setup ──────────────────────────────────────────────────────────────────
  if (phase === 'setup') {
    const canResume = resumable.current && resumable.current.paper;
    return (
      <div className="mx-auto max-w-lg">
        <h2 className="text-xl font-bold text-white">Mock Exam</h2>
        <p className="mt-2 text-sm text-slate-400">
          The full ACC10007 paper — the <strong className="text-slate-200">10 official practice questions</strong> in exam order, {TOTAL_MARKS} marks.
          Attempt each question, reveal the model answer, and self-mark.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-800">
          <table className="w-full text-sm">
            <tbody>
              {examPaper.map((q) => (
                <tr key={q.num} className="border-t border-slate-800 first:border-t-0">
                  <td className="px-3 py-1.5 text-slate-500">Q{q.num}</td>
                  <td className="px-3 py-1.5 text-slate-300">{q.title}</td>
                  <td className="px-3 py-1.5 text-right text-slate-400">{q.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {canResume && (
          <div className="mt-5 rounded-xl border border-amber-600/40 bg-amber-500/10 p-4">
            <p className="text-sm text-amber-200">You have an unfinished exam.</p>
            <button onClick={resume} className="mt-2 rounded-lg bg-amber-500 px-4 py-1.5 text-sm font-semibold text-slate-900">Resume it</button>
          </div>
        )}

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <button onClick={() => start(false)} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white transition hover:border-emerald-500 hover:bg-slate-800">
            <span className="block font-semibold">Start — untimed</span>
            <span className="text-xs text-slate-400">Work through at your own pace</span>
          </button>
          <button onClick={() => start(true)} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white transition hover:border-emerald-500 hover:bg-slate-800">
            <span className="block font-semibold">Start — timed (2 hrs)</span>
            <span className="text-xs text-slate-400">Exam-condition countdown</span>
          </button>
        </div>
        <button onClick={onExit} className="mt-6 text-sm text-slate-400 hover:text-white">← Back to topics</button>
      </div>
    );
  }

  // ── Done ───────────────────────────────────────────────────────────────────
  if (phase === 'done') {
    const score = examPaper.reduce((s, q) => s + (Number(selfMarks[q.num]) || 0), 0);
    const p = Math.round((score / TOTAL_MARKS) * 100);
    const tone = p >= 75 ? 'text-emerald-400' : p >= 50 ? 'text-amber-400' : 'text-rose-400';
    return (
      <div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
          <p className="text-sm text-slate-400">Self-assessed score</p>
          <p className={`text-5xl font-bold ${tone}`}>{score}<span className="text-2xl text-slate-500">/{TOTAL_MARKS}</span></p>
          <p className="mt-1 text-sm text-slate-400">{p}%</p>
        </div>
        <div className="mt-4 space-y-2">
          {examPaper.map((q) => (
            <div key={q.num} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">Q{q.num}. {q.title}</span>
                <span className="text-sm text-slate-300">{Number(selfMarks[q.num]) || 0}/{q.marks}</span>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-xs text-sky-300">Model answer</summary>
                <div className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-300">
                  {q.model.map((m, i) => <p key={i}>{m}</p>)}
                </div>
              </details>
            </div>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <button onClick={() => setPhase('setup')} className="rounded-lg bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-900">Retake</button>
          <button onClick={onExit} className="rounded-lg border border-slate-700 px-5 py-2 text-sm text-slate-300">Back to topics</button>
        </div>
      </div>
    );
  }

  // ── Running ────────────────────────────────────────────────────────────────
  const q = examPaper[idx];
  const answeredCount = examPaper.filter((qq) => (answers[qq.num] || '').trim()).length;
  const markedCount = examPaper.filter((qq) => selfMarks[qq.num] != null && selfMarks[qq.num] !== '').length;
  const low = timed && remaining <= 300;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-slate-400">Question {idx + 1} / {examPaper.length} · {answeredCount} attempted · {markedCount} marked</span>
        {timed && <span className={`rounded-lg px-3 py-1 font-mono text-sm font-semibold ${low ? 'bg-rose-500/20 text-rose-300' : 'bg-slate-800 text-slate-200'}`}>⏱ {fmtTime(remaining)}</span>}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-sky-500/15 px-2 py-0.5 text-xs font-semibold text-sky-300">Q{q.num}</span>
          <span className="text-xs text-slate-500">{q.week}</span>
          <span className="rounded-md bg-rose-500/15 px-2 py-0.5 text-xs font-medium text-rose-300">{q.marks} marks</span>
          <span className="text-xs text-slate-600">· {q.source}</span>
        </div>
        <p className="font-semibold text-white">{q.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{q.scenario}</p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Required</p>
        <ol className="mt-1 list-decimal space-y-1 pl-5 text-sm text-slate-300">
          {q.required.map((r, i) => <li key={i}>{r}</li>)}
        </ol>

        <textarea
          value={answers[q.num] ?? ''}
          onChange={(e) => setAnswers((a) => ({ ...a, [q.num]: e.target.value }))}
          rows={6}
          placeholder="Write your answer here (or work it out on paper)…"
          className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white outline-none focus:border-sky-500"
        />

        <button
          onClick={() => setRevealed((r) => ({ ...r, [q.num]: !r[q.num] }))}
          className="mt-3 rounded-lg border border-slate-700 px-4 py-1.5 text-sm text-slate-200 hover:border-slate-500"
        >
          {revealed[q.num] ? 'Hide model answer' : 'Show model answer'}
        </button>

        {revealed[q.num] && (
          <div className="mt-3 rounded-lg border border-emerald-700/40 bg-emerald-950/30 p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-emerald-300">Model answer</p>
            <div className="space-y-1.5 text-sm leading-relaxed text-emerald-50">
              {q.model.map((m, i) => <p key={i}>{m}</p>)}
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-emerald-800/40 pt-3">
              <label className="text-sm text-slate-300">Your marks (out of {q.marks}):</label>
              <input
                type="number" min={0} max={q.marks} step={0.5}
                value={selfMarks[q.num] ?? ''}
                onChange={(e) => {
                  const v = e.target.value === '' ? '' : Math.max(0, Math.min(q.marks, Number(e.target.value)));
                  setSelfMarks((m) => ({ ...m, [q.num]: v }));
                }}
                className="w-20 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm text-white outline-none focus:border-emerald-500"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button onClick={() => setIdx((i) => Math.max(0, i - 1))} disabled={idx === 0} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 disabled:opacity-40">← Prev</button>
        {idx < examPaper.length - 1 ? (
          <button onClick={() => setIdx((i) => i + 1)} className="rounded-lg bg-slate-700 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-600">Next →</button>
        ) : (
          <button onClick={finish} className="rounded-lg bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-900">Finish &amp; see score</button>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {examPaper.map((qq, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-7 w-7 rounded text-xs ${i === idx ? 'bg-sky-500 text-slate-900' : selfMarks[qq.num] != null && selfMarks[qq.num] !== '' ? 'bg-emerald-600/40 text-emerald-200' : (answers[qq.num] || '').trim() ? 'bg-slate-700 text-slate-200' : 'bg-slate-800 text-slate-400'}`}>
            {qq.num}
          </button>
        ))}
      </div>

      <button onClick={finish} className="mt-6 text-sm text-rose-300 hover:text-rose-200">Finish &amp; see score now</button>
    </div>
  );
}
