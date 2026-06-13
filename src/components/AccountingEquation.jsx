import React, { useState } from 'react';
import transactions from '../data/accountingEquation.js';

// Step through worked transactions and watch Assets = Liabilities + Equity hold.
export default function AccountingEquation() {
  const [step, setStep] = useState(0);
  const t = transactions[step];
  const assets = t.cash + t.equip + t.supplies;
  const balanced = assets === t.ap + t.equity;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="font-semibold text-white">Accounting Equation — step through</h3>
      <p className="mt-1 text-sm text-emerald-300">{t.label}</p>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
        <Box label="Cash" value={t.cash} />
        <Box label="Equipment" value={t.equip} />
        <Box label="Supplies" value={t.supplies} />
      </div>
      <div className="my-2 text-center text-xs text-slate-500">Assets ${assets.toLocaleString()} = Liabilities + Equity</div>
      <div className="grid grid-cols-2 gap-2 text-center text-sm">
        <Box label="Accounts Payable" value={t.ap} tone="rose" />
        <Box label="Equity" value={t.equity} tone="sky" />
      </div>

      <p className="mt-3 rounded-lg bg-slate-800/60 px-3 py-2 text-sm text-slate-300">{t.note}</p>
      <p className={`mt-2 text-xs ${balanced ? 'text-emerald-400' : 'text-rose-400'}`}>{balanced ? '✓ Equation balances' : '✗ Out of balance'}</p>

      <div className="mt-4 flex items-center justify-between">
        <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 disabled:opacity-40">← Prev</button>
        <span className="text-xs text-slate-500">Step {step + 1} / {transactions.length}</span>
        <button onClick={() => setStep((s) => Math.min(transactions.length - 1, s + 1))} disabled={step === transactions.length - 1} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 disabled:opacity-40">Next →</button>
      </div>
    </div>
  );
}

function Box({ label, value, tone = 'slate' }) {
  const tones = { slate: 'border-slate-700', rose: 'border-rose-700/50', sky: 'border-sky-700/50' };
  return (
    <div className={`rounded-lg border bg-slate-800/40 px-2 py-2 ${tones[tone]}`}>
      <p className="text-xs text-slate-400">{label}</p>
      <p className="font-semibold text-white">${value.toLocaleString()}</p>
    </div>
  );
}
