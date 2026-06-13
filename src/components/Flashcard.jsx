import React, { useState } from 'react';
import { setCardStatus, load } from '../lib/storage.js';
import { pct } from './ui.js';

export default function Flashcard({ topicId, cards, onProgress }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [statuses, setStatuses] = useState(() => load().flashcards[topicId] || {});

  if (!cards.length) return <p className="text-slate-400">No flashcards for this topic.</p>;

  const card = cards[idx];
  const known = Object.values(statuses).filter((s) => s === 'known').length;

  const go = (delta) => {
    setFlipped(false);
    setIdx((i) => (i + delta + cards.length) % cards.length);
  };

  const mark = (status) => {
    setCardStatus(topicId, idx, status);
    const next = { ...statuses, [idx]: status };
    setStatuses(next);
    onProgress?.();
    if (idx < cards.length - 1) go(1);
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm text-slate-400">
        <span>Card {idx + 1} / {cards.length}</span>
        <span>Known {known} ({pct(known / cards.length)})</span>
      </div>

      <div className="card-3d mb-5 h-64 cursor-pointer" onClick={() => setFlipped((f) => !f)}>
        <div className={`card-inner relative h-full w-full ${flipped ? 'flipped' : ''}`}>
          <div className="card-face absolute inset-0 flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 p-6 text-center">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Concept</p>
              <p className="mt-2 text-lg font-semibold text-white">{card.front}</p>
              <p className="mt-4 text-xs text-slate-500">Tap to reveal</p>
            </div>
          </div>
          <div className="card-face card-back absolute inset-0 flex items-center justify-center rounded-2xl border border-emerald-700/50 bg-emerald-950/40 p-6 text-center">
            <p className="text-base leading-relaxed text-emerald-100">{card.back}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <button onClick={() => go(-1)} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800">← Prev</button>
        <div className="flex gap-2">
          <button onClick={() => mark('review')} className="rounded-lg border border-amber-600/40 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300 hover:bg-amber-500/20">Review again</button>
          <button onClick={() => mark('known')} className="rounded-lg border border-emerald-600/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20">I know it</button>
        </div>
        <button onClick={() => go(1)} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800">Next →</button>
      </div>
    </div>
  );
}
