import React, { useState, useEffect, useRef } from 'react';
import { buildExam, gradeExam } from '../lib/examEngine.js';
import { recordExam, saveExamProgress, loadExamProgress, clearExamProgress } from '../lib/storage.js';
import { fmtTime } from './ui.js';
import ExamResults from './ExamResults.jsx';

const DURATION_OPTIONS = [
  { label: 'Quick (20 Q · 20 min)', q: 20, min: 20 },
  { label: 'Standard (40 Q · 45 min)', q: 40, min: 45 },
  { label: 'Full (60 Q · 90 min)', q: 60, min: 90 },
];

export default function MockExam({ topics, quizzes, onExit }) {
  const [phase, setPhase] = useState('setup'); // setup | running | done
  const [exam, setExam] = useState(null); // { questions, endsAt, durationSec }
  const [answers, setAnswers] = useState({});
  const [idx, setIdx] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [result, setResult] = useState(null);
  const resumable = useRef(loadExamProgress());

  // Tick the countdown from the stored end timestamp (robust to tab throttling).
  useEffect(() => {
    if (phase !== 'running' || !exam) return;
    const tick = () => {
      const left = Math.max(0, Math.round((exam.endsAt - Date.now()) / 1000));
      setRemaining(left);
      if (left <= 0) finish(exam, answersRef.current);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, exam]);

  // Keep a ref of answers so the timer's auto-submit grabs the latest.
  const answersRef = useRef(answers);
  useEffect(() => { answersRef.current = answers; }, [answers]);

  // Persist in-progress state for reload-resume.
  useEffect(() => {
    if (phase === 'running' && exam) {
      saveExamProgress({ questions: exam.questions, endsAt: exam.endsAt, durationSec: exam.durationSec, answers, idx });
    }
  }, [phase, exam, answers, idx]);

  const start = (opt) => {
    const questions = buildExam(topics, quizzes, { totalQuestions: opt.q });
    const durationSec = opt.min * 60;
    const e = { questions, endsAt: Date.now() + durationSec * 1000, durationSec };
    setExam(e);
    setAnswers({});
    setIdx(0);
    setPhase('running');
  };

  const resume = () => {
    const p = resumable.current;
    setExam({ questions: p.questions, endsAt: p.endsAt, durationSec: p.durationSec });
    setAnswers(p.answers || {});
    setIdx(p.idx || 0);
    setPhase('running');
  };

  const finish = (e, finalAnswers) => {
    const graded = gradeExam(e.questions, finalAnswers);
    const record = { ts: Date.now(), durationSec: e.durationSec, total: graded.total, score: graded.score, perTopic: graded.perTopic };
    recordExam(record);
    clearExamProgress();
    setResult({ ...graded, questions: e.questions, answers: finalAnswers });
    setPhase('done');
  };

  if (phase === 'setup') {
    return (
      <div className="mx-auto max-w-lg">
        <h2 className="text-xl font-bold text-white">Mock Exam</h2>
        <p className="mt-2 text-sm text-slate-400">A timed, mixed-topic paper. Questions are drawn from every topic, weighted by its real exam marks, and scored out of 100.</p>
        {resumable.current && (
          <div className="mt-5 rounded-xl border border-amber-600/40 bg-amber-500/10 p-4">
            <p className="text-sm text-amber-200">You have an unfinished exam.</p>
            <button onClick={resume} className="mt-2 rounded-lg bg-amber-500 px-4 py-1.5 text-sm font-semibold text-slate-900">Resume it</button>
          </div>
        )}
        <div className="mt-5 space-y-3">
          {DURATION_OPTIONS.map((opt) => (
            <button key={opt.label} onClick={() => start(opt)} className="block w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-left text-white transition hover:border-emerald-500 hover:bg-slate-800">
              {opt.label}
            </button>
          ))}
        </div>
        <button onClick={onExit} className="mt-6 text-sm text-slate-400 hover:text-white">← Back to topics</button>
      </div>
    );
  }

  if (phase === 'done' && result) {
    return <ExamResults result={result} onExit={onExit} />;
  }

  // running
  const q = exam.questions[idx];
  const answered = Object.keys(answers).length;
  const low = remaining <= 60;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-slate-400">Question {idx + 1} / {exam.questions.length} · {answered} answered</span>
        <span className={`rounded-lg px-3 py-1 font-mono text-sm font-semibold ${low ? 'bg-rose-500/20 text-rose-300' : 'bg-slate-800 text-slate-200'}`}>⏱ {fmtTime(remaining)}</span>
      </div>

      <ExamQuestion q={q} value={answers[q.examIndex]} onChange={(v) => setAnswers((a) => ({ ...a, [q.examIndex]: v }))} />

      <div className="mt-5 flex items-center justify-between">
        <button onClick={() => setIdx((i) => Math.max(0, i - 1))} disabled={idx === 0} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 disabled:opacity-40">← Prev</button>
        {idx < exam.questions.length - 1 ? (
          <button onClick={() => setIdx((i) => i + 1)} className="rounded-lg bg-slate-700 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-600">Next →</button>
        ) : (
          <button onClick={() => finish(exam, answers)} className="rounded-lg bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-900">Submit exam</button>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {exam.questions.map((qq, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`h-7 w-7 rounded text-xs ${i === idx ? 'bg-sky-500 text-slate-900' : answers[qq.examIndex] != null && answers[qq.examIndex] !== '' ? 'bg-emerald-600/40 text-emerald-200' : 'bg-slate-800 text-slate-400'}`}>{i + 1}</button>
        ))}
      </div>

      <button onClick={() => finish(exam, answers)} className="mt-6 text-sm text-rose-300 hover:text-rose-200">End &amp; submit now</button>
    </div>
  );
}

// Exam question input — no immediate feedback (graded at the end).
function ExamQuestion({ q, value, onChange }) {
  const type = q.type || 'mcq';
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <p className="mb-1 text-xs text-slate-500">{q.topicTitle}</p>
      <p className="text-base font-medium text-white">{q.q}</p>
      {type === 'mcq' && (
        <div className="mt-4 space-y-2">
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => onChange(i)} className={`block w-full rounded-lg border px-4 py-2.5 text-left text-sm text-slate-200 transition ${Number(value) === i ? 'border-sky-500 bg-sky-500/10' : 'border-slate-700 hover:border-slate-500'}`}>{opt}</button>
          ))}
        </div>
      )}
      {type === 'calc' && (
        <input type="number" step="any" value={value ?? ''} onChange={(e) => onChange(e.target.value)} placeholder="Numeric answer" className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white outline-none focus:border-sky-500" />
      )}
      {type === 'short' && (
        <div className="mt-4 space-y-2">
          <p className="text-xs text-slate-500">Short answer — you'll self-grade against the model answer at the end.</p>
          <textarea value={value ?? ''} onChange={(e) => onChange(e.target.value)} rows={3} placeholder="Jot your answer" className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white outline-none focus:border-sky-500" />
        </div>
      )}
    </div>
  );
}
