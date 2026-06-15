import React, { useState } from 'react';
import basics from '../data/basics.js';
import { Diagram } from './diagrams.jsx';

// "The Basics" — quick cram flip-cards, the must-know essentials for each exam
// question. Tap a card to flip it; "Reveal all" flips a whole question at once.
export default function BasicsCards() {
  const [flipped, setFlipped] = useState(() => new Set());
  const total = basics.reduce((s, g) => s + g.cards.length, 0);

  const key = (num, i) => `${num}-${i}`;
  const toggle = (num, i) =>
    setFlipped((prev) => {
      const next = new Set(prev);
      const k = key(num, i);
      next.has(k) ? next.delete(k) : next.add(k);
      return next;
    });
  const revealGroup = (g, reveal) =>
    setFlipped((prev) => {
      const next = new Set(prev);
      g.cards.forEach((_, i) => (reveal ? next.add(key(g.num, i)) : next.delete(key(g.num, i))));
      return next;
    });

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">The Basics — Quick Cram Cards</h2>
        <p className="mt-1 text-sm text-slate-400">{total} bite-size essentials, grouped by exam question. Tap any card to flip it.</p>
      </div>

      <div className="space-y-7">
        {basics.map((g) => {
          const allShown = g.cards.every((_, i) => flipped.has(key(g.num, i)));
          return (
            <section key={g.num}>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="rounded-md bg-sky-500/15 px-2 py-0.5 text-xs font-bold text-sky-300">Q{g.num}</span>
                  {g.title}
                  <span className="rounded-md border px-2 py-0.5 text-[11px] font-medium text-slate-400 border-slate-700">{g.marks} marks</span>
                </h3>
                <button
                  onClick={() => revealGroup(g, !allShown)}
                  className="shrink-0 text-xs text-slate-400 hover:text-white"
                >
                  {allShown ? 'Hide all' : 'Reveal all'}
                </button>
              </div>

              {g.viz && (
                <div className="mb-3 sm:max-w-md">
                  <Diagram name={g.viz} />
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {g.cards.map((c, i) => {
                  const isFlipped = flipped.has(key(g.num, i));
                  return (
                    <button
                      key={i}
                      onClick={() => toggle(g.num, i)}
                      className="card-3d h-28 text-left focus:outline-none sm:h-32"
                    >
                      <div className={`card-inner relative h-full w-full ${isFlipped ? 'flipped' : ''}`}>
                        <div className="card-face absolute inset-0 flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800 p-3 text-center">
                          <p className="text-sm font-medium leading-snug text-white">{c.q}</p>
                        </div>
                        <div className="card-face card-back absolute inset-0 flex items-center justify-center rounded-xl border border-emerald-700/50 bg-emerald-950/40 p-3 text-center">
                          <p className="text-[13px] leading-snug text-emerald-100">{c.a}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
