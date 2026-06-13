import React from 'react';
import studyNotes from '../data/studyNotes.js';

const ACCENTS = {
  blue: 'border-blue-500/40 bg-blue-500/5',
  green: 'border-emerald-500/40 bg-emerald-500/5',
  purple: 'border-purple-500/40 bg-purple-500/5',
  amber: 'border-amber-500/40 bg-amber-500/5',
  red: 'border-rose-500/40 bg-rose-500/5',
  sky: 'border-sky-500/40 bg-sky-500/5',
};

const CALLOUTS = {
  key: { box: 'border-emerald-600/40 bg-emerald-950/30 text-emerald-100', tag: 'KEY', tagColor: 'text-emerald-300' },
  tip: { box: 'border-sky-600/40 bg-sky-950/30 text-sky-100', tag: 'TIP', tagColor: 'text-sky-300' },
  warn: { box: 'border-amber-600/40 bg-amber-950/30 text-amber-100', tag: 'WATCH', tagColor: 'text-amber-300' },
};

// Rich study notes per topic, with a flashcard-based quick review at the end.
export default function StudyPanel({ topicId, cards }) {
  const notes = studyNotes[topicId];

  return (
    <div className="space-y-6">
      {notes?.sections.map((s, i) => <Section key={i} section={s} />)}

      {cards.length > 0 && (
        <details className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <summary className="cursor-pointer text-sm font-semibold text-slate-300">
            Quick review — {cards.length} key Q&amp;A
          </summary>
          <div className="mt-3 space-y-2">
            {cards.map((c, i) => (
              <div key={i} className="rounded-lg border border-slate-800 bg-slate-900 p-3">
                <p className="text-sm font-semibold text-emerald-300">{c.front}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{c.back}</p>
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

function Section({ section }) {
  if (section.type === 'intro') {
    return (
      <div>
        <h3 className="mb-1.5 text-base font-semibold text-white">{section.heading}</h3>
        <p className="text-sm leading-relaxed text-slate-300">{section.body}</p>
      </div>
    );
  }

  if (section.type === 'callout') {
    const c = CALLOUTS[section.tone] || CALLOUTS.key;
    return (
      <div className={`rounded-xl border p-4 text-sm leading-relaxed ${c.box}`}>
        <span className={`mr-2 text-xs font-bold uppercase tracking-wide ${c.tagColor}`}>{c.tag}</span>
        {section.body}
      </div>
    );
  }

  if (section.type === 'cards') {
    return (
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">{section.heading}</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {section.items.map((item, i) => (
            <div key={i} className={`rounded-xl border p-4 ${ACCENTS[item.accent] || 'border-slate-700'}`}>
              <p className="font-semibold text-white">
                {item.icon && <span className="mr-2">{item.icon}</span>}{item.name}
              </p>
              {item.desc && <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{item.desc}</p>}
              {item.points && (
                <ul className="mt-2 space-y-1">
                  {item.points.map((p, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-300">
                      <span className="text-slate-500">•</span><span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === 'formulas') {
    return (
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">{section.heading}</h3>
        <div className="space-y-2">
          {section.items.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-semibold text-white">{f.name}</span>
                <code className="rounded bg-slate-800 px-2 py-1 font-mono text-sm text-emerald-300">{f.formula}</code>
              </div>
              {f.meaning && <p className="mt-2 text-sm text-slate-400">{f.meaning}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
