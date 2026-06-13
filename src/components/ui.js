// Shared presentational helpers.

export const priorityStyles = {
  HIGH: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  MED: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  STD: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
};

export function masteryColor(value) {
  if (value == null) return 'text-slate-400';
  if (value >= 0.8) return 'text-emerald-400';
  if (value >= 0.5) return 'text-amber-400';
  return 'text-rose-400';
}

export function pct(value) {
  return value == null ? '—' : `${Math.round(value * 100)}%`;
}

export function fmtTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}
