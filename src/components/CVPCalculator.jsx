import React, { useState } from 'react';

// Cost-Volume-Profit calculator: break-even, contribution margin, target profit.
export default function CVPCalculator() {
  const [price, setPrice] = useState(10);
  const [varCost, setVarCost] = useState(4);
  const [fixedCost, setFixedCost] = useState(30000);
  const [targetProfit, setTargetProfit] = useState(0);

  const cm = price - varCost;
  const cmRatio = price > 0 ? cm / price : 0;
  const beUnits = cm > 0 ? fixedCost / cm : Infinity;
  const beDollars = beUnits === Infinity ? Infinity : beUnits * price;
  const targetUnits = cm > 0 ? (fixedCost + Number(targetProfit)) / cm : Infinity;

  const fmt = (n) => (n === Infinity ? '—' : n.toLocaleString(undefined, { maximumFractionDigits: 2 }));

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="font-semibold text-white">CVP Calculator</h3>
      <p className="mt-1 text-xs text-slate-400">Change the inputs to see break-even and target-profit volumes update.</p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Field label="Price / unit" value={price} onChange={setPrice} />
        <Field label="Variable / unit" value={varCost} onChange={setVarCost} />
        <Field label="Fixed costs" value={fixedCost} onChange={setFixedCost} />
        <Field label="Target profit" value={targetProfit} onChange={setTargetProfit} />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Contribution margin" value={`$${fmt(cm)}`} />
        <Stat label="CM ratio" value={`${(cmRatio * 100).toFixed(1)}%`} />
        <Stat label="Break-even (units)" value={fmt(Math.ceil(beUnits))} />
        <Stat label="Break-even ($)" value={`$${fmt(beDollars)}`} />
      </div>
      <div className="mt-3 rounded-lg border border-emerald-700/40 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-200">
        Units for target profit of ${Number(targetProfit).toLocaleString()}: <span className="font-semibold">{fmt(Math.ceil(targetUnits))} units</span>
      </div>
    </div>
  );
}

function Field({ label, value, onChange }) {
  return (
    <label className="block text-xs text-slate-400">
      {label}
      <input type="number" value={value} onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))} className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-sky-500" />
    </label>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-slate-800/60 px-3 py-2">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-0.5 font-semibold text-white">{value}</p>
    </div>
  );
}
