import React, { useState } from 'react';
import formulas from '../data/formulas.js';

// The complete equation reference for the exam. Searchable + printable so it can
// be used as a one-page cheat sheet during revision.
export default function FormulaSheet() {
  const [q, setQ] = useState('');
  const needle = q.trim().toLowerCase();

  const groups = formulas
    .map((g) => ({
      ...g,
      items: g.items.filter(
        (it) =>
          !needle ||
          it.name.toLowerCase().includes(needle) ||
          it.formula.toLowerCase().includes(needle) ||
          (it.note || '').toLowerCase().includes(needle) ||
          g.group.toLowerCase().includes(needle),
      ),
    }))
    .filter((g) => g.items.length);

  const total = formulas.reduce((s, g) => s + g.items.length, 0);

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-white">Formula Sheet</h2>
          <p className="mt-1 text-sm text-slate-400">{total} equations to remember · grouped by exam question</p>
        </div>
        <div className="flex gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search formulas…"
            className="w-44 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm text-white outline-none focus:border-sky-500"
          />
          <button onClick={() => window.print()} className="rounded-lg bg-sky-500 px-3 py-1.5 text-sm font-semibold text-slate-900 hover:bg-sky-400">
            Print / Save PDF
          </button>
        </div>
      </div>

      <div className="space-y-5 print:space-y-3">
        {groups.map((g) => (
          <section key={g.group} className="break-inside-avoid rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="mb-3 flex items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-white">{g.group}</h3>
              {g.exam && <span className="rounded-md bg-rose-500/15 px-2 py-0.5 text-xs font-medium text-rose-300">{g.exam}</span>}
            </div>
            <div className="space-y-2">
              {g.items.map((it, i) => (
                <div key={i} className="rounded-lg border border-slate-800 bg-slate-900 p-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <span className="text-sm font-semibold text-white">{it.name}</span>
                    <code className="font-mono text-sm text-emerald-300">{it.formula}</code>
                  </div>
                  {it.note && <p className="mt-1 text-xs text-slate-400">{it.note}</p>}
                </div>
              ))}
            </div>
          </section>
        ))}
        {groups.length === 0 && <p className="text-sm text-slate-400">No formulas match “{q}”.</p>}
      </div>
    </div>
  );
}
