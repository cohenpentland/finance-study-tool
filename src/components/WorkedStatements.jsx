import React, { useState } from 'react';
import statements from '../data/statements.js';

// Renders the four worked financial statements (from the W7 course notes) in their
// proper layout, so you can learn the exact format the exam expects for Q7.
export default function WorkedStatements({ heading = true }) {
  const [active, setActive] = useState(statements[0].id);
  const s = statements.find((x) => x.id === active);

  return (
    <div>
      {heading && (
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white">Worked Financial Statements</h2>
          <p className="mt-1 text-sm text-slate-400">The real layouts from the course notes — study the structure, not just the numbers.</p>
        </div>
      )}

      <div className="mb-4 flex flex-wrap gap-2">
        {statements.map((st) => (
          <button
            key={st.id}
            onClick={() => setActive(st.id)}
            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition ${
              active === st.id ? 'border-sky-500 bg-sky-500/15 text-white' : 'border-slate-700 text-slate-300 hover:border-slate-500'
            }`}
          >
            {st.name}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="mb-1 text-center">
          <p className="text-base font-bold text-white">{s.entity}</p>
          <p className="text-sm font-semibold text-slate-200">{s.full}</p>
          <p className="text-xs text-slate-400">{s.period}</p>
        </div>

        <div className="mx-auto mt-4 max-w-xl">
          <div className="mb-1 flex justify-end border-b border-slate-700 pb-1">
            <span className="text-xs font-medium text-slate-500">$</span>
          </div>
          {s.lines.map((ln, i) => (
            <StatementRow key={i} line={ln} />
          ))}
        </div>

        <p className="mx-auto mt-4 max-w-xl rounded-lg border border-sky-600/40 bg-sky-950/30 p-3 text-sm leading-relaxed text-sky-100">
          <span className="mr-2 text-xs font-bold uppercase tracking-wide text-sky-300">Why</span>
          {s.blurb}
        </p>
      </div>

      <div className="mt-4 rounded-xl border border-emerald-700/40 bg-emerald-950/20 p-4 text-sm leading-relaxed text-emerald-100">
        <p className="font-semibold text-emerald-300">How the four statements link</p>
        <p className="mt-1 text-emerald-100/90">
          The <strong>Income Statement</strong> produces <strong>profit</strong> → profit flows into the <strong>Statement of Changes in Equity</strong>
          (Opening + Profit − Drawings) → the <strong>closing equity</strong> appears on the <strong>Balance Sheet</strong>. Separately, the
          <strong> Cash Flow Statement</strong> explains how cash (one Balance-Sheet line) actually moved. Profit ≠ cash — that’s why both exist.
        </p>
      </div>
    </div>
  );
}

function fmt(v, paren) {
  if (v == null) return '';
  const n = v.toLocaleString('en-AU');
  return paren ? `(${n})` : n;
}

function StatementRow({ line }) {
  const indent = line.indent || 0;
  const pad = { paddingLeft: `${indent * 1.25}rem` };

  if (line.kind === 'header') {
    return (
      <div className="mt-3 mb-1" style={pad}>
        <span className="text-sm font-semibold text-white">{line.label}</span>
      </div>
    );
  }

  const styles = {
    item: { row: 'py-0.5', label: 'text-slate-300', value: 'text-slate-300' },
    subtotal: { row: 'mt-1 border-t border-slate-700 py-1', label: 'font-medium text-white', value: 'font-medium text-white' },
    total: { row: 'mt-1 border-t-2 border-slate-600 py-1', label: 'font-bold text-white', value: 'font-bold text-white' },
    grandtotal: { row: 'mt-1 border-y-2 border-emerald-600/50 py-1.5', label: 'font-bold text-emerald-300', value: 'font-bold text-emerald-300' },
  }[line.kind] || { row: 'py-0.5', label: 'text-slate-300', value: 'text-slate-300' };

  return (
    <div className={`flex items-baseline justify-between gap-4 ${styles.row}`}>
      <span className={`text-sm ${styles.label}`} style={pad}>{line.label}</span>
      <span className={`shrink-0 font-mono text-sm tabular-nums ${styles.value} ${line.paren ? 'text-rose-300' : ''}`}>
        {fmt(line.value, line.paren)}
      </span>
    </div>
  );
}
