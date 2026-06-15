import React from 'react';

// Small, theme-matched inline-SVG diagrams used across the study notes and the
// Basics cram cards. Each is keyed in DIAGRAMS and rendered via <Diagram name=…/>.
// Colours: slate text #94a3b8 / white #e2e8f0, emerald #34d399, sky #38bdf8,
// rose #fb7185, amber #fbbf24, purple #c084fc.

const C = { txt: '#e2e8f0', sub: '#94a3b8', em: '#34d399', sky: '#38bdf8', rose: '#fb7185', amber: '#fbbf24', purple: '#c084fc', box: '#1e293b', line: '#475569' };

function Box({ x, y, w, h, stroke, label, sub, fill = C.box, tc = C.txt }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 4 : h / 2 + 4)} textAnchor="middle" fill={tc} fontSize="12" fontWeight="600">{label}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 12} textAnchor="middle" fill={C.sub} fontSize="9.5">{sub}</text>}
    </g>
  );
}

// Assets = Liabilities + Equity
const AccountingEquation = () => (
  <svg viewBox="0 0 340 80" width="100%">
    <Box x={8} y={20} w={92} h={42} stroke={C.sky} label="ASSETS" sub="what you own" tc={C.sky} />
    <text x={108} y={46} textAnchor="middle" fill={C.txt} fontSize="18" fontWeight="700">=</text>
    <Box x={120} y={20} w={92} h={42} stroke={C.rose} label="LIABILITIES" sub="what you owe" tc={C.rose} />
    <text x={224} y={46} textAnchor="middle" fill={C.txt} fontSize="18" fontWeight="700">+</text>
    <Box x={238} y={20} w={94} h={42} stroke={C.em} label="EQUITY" sub="owner’s share" tc={C.em} />
  </svg>
);

// Three structures + liability
const BusinessStructures = () => (
  <svg viewBox="0 0 340 96" width="100%">
    <Box x={8} y={14} w={100} h={44} stroke={C.line} label="Sole Trader" sub="1 owner" />
    <Box x={120} y={14} w={100} h={44} stroke={C.line} label="Partnership" sub="2+ owners" />
    <Box x={232} y={14} w={100} h={44} stroke={C.em} label="Company" sub="shareholders" tc={C.em} />
    <text x={58} y={78} textAnchor="middle" fill={C.rose} fontSize="10" fontWeight="600">Unlimited ⚠</text>
    <text x={170} y={78} textAnchor="middle" fill={C.rose} fontSize="10" fontWeight="600">Unlimited ⚠</text>
    <text x={282} y={78} textAnchor="middle" fill={C.em} fontSize="10" fontWeight="600">Limited ✓</text>
  </svg>
);

// Qualitative characteristics — fundamentals (base) + enhancing (top)
const QualitativePyramid = () => (
  <svg viewBox="0 0 340 112" width="100%">
    <text x={170} y={12} textAnchor="middle" fill={C.sub} fontSize="9.5">ENHANCING (improve usefulness)</text>
    {['Comparability', 'Verifiability', 'Timeliness', 'Understandability'].map((t, i) => (
      <g key={t}>
        <rect x={8 + i * 82} y={18} width={76} height={26} rx="5" fill={C.box} stroke={C.sky} strokeWidth="1.2" />
        <text x={46 + i * 82} y={34} textAnchor="middle" fill={C.sky} fontSize="9">{t}</text>
      </g>
    ))}
    <text x={170} y={66} textAnchor="middle" fill={C.sub} fontSize="9.5">FUNDAMENTAL (must have both)</text>
    <Box x={8} y={72} w={160} h={32} stroke={C.em} label="Relevance" tc={C.em} />
    <Box x={172} y={72} w={160} h={32} stroke={C.em} label="Faithful Representation" tc={C.em} />
  </svg>
);

// Depreciation — carrying amount falling over 3 years (straight-line)
const DepreciationChart = () => {
  const X = (yr) => 44 + (yr / 3) * 236;
  const Y = (v) => 118 - (v / 3000) * 96;
  const pts = [[0, 3000], [1, 2000], [2, 1000], [3, 0]];
  return (
    <svg viewBox="0 0 300 150" width="100%">
      <line x1="44" y1="22" x2="44" y2="118" stroke={C.line} />
      <line x1="44" y1="118" x2="288" y2="118" stroke={C.line} />
      <polyline fill="none" stroke={C.em} strokeWidth="2" points={pts.map(([y, v]) => `${X(y)},${Y(v)}`).join(' ')} />
      {pts.map(([y, v]) => (
        <g key={y}>
          <circle cx={X(y)} cy={Y(v)} r="3" fill={C.em} />
          <text x={X(y)} y={Y(v) - 7} textAnchor="middle" fill={C.txt} fontSize="8.5">${v.toLocaleString()}</text>
          <text x={X(y)} y={130} textAnchor="middle" fill={C.sub} fontSize="8.5">Yr {y}</text>
        </g>
      ))}
      <text x={10} y={26} fill={C.sub} fontSize="8.5">$</text>
      <text x={166} y={148} textAnchor="middle" fill={C.sub} fontSize="9">Carrying amount, $3,000 laptop · $1,000/yr</text>
    </svg>
  );
};

// 5 elements grouped around the equation
const FiveElements = () => (
  <svg viewBox="0 0 340 110" width="100%">
    <Box x={8} y={10} w={100} h={34} stroke={C.sky} label="ASSET" sub="controlled resource" tc={C.sky} />
    <Box x={120} y={10} w={100} h={34} stroke={C.rose} label="LIABILITY" sub="present obligation" tc={C.rose} />
    <Box x={232} y={10} w={100} h={34} stroke={C.em} label="EQUITY" sub="A − L" tc={C.em} />
    <Box x={64} y={62} w={100} h={34} stroke={C.amber} label="INCOME" sub="↑ equity" tc={C.amber} />
    <Box x={176} y={62} w={100} h={34} stroke={C.purple} label="EXPENSE" sub="↓ equity" tc={C.purple} />
    <text x={170} y={108} textAnchor="middle" fill={C.sub} fontSize="9">Recognise if RELEVANT + FAITHFULLY REPRESENTED</text>
  </svg>
);

// 2×2 accruals / prepayments matrix
const AdjustmentsMatrix = () => (
  <svg viewBox="0 0 340 128" width="100%">
    <text x={130} y={12} textAnchor="middle" fill={C.sub} fontSize="9.5" fontWeight="600">Accruals</text>
    <text x={250} y={12} textAnchor="middle" fill={C.sub} fontSize="9.5" fontWeight="600">Prepayments</text>
    <text x={10} y={42} fill={C.sub} fontSize="9.5" fontWeight="600">Rev.</text>
    <text x={10} y={92} fill={C.sub} fontSize="9.5" fontWeight="600">Exp.</text>
    <Box x={70} y={20} w={120} h={42} stroke={C.em} label="Accrued revenue" sub="ASSET ↑" tc={C.em} />
    <Box x={200} y={20} w={132} h={42} stroke={C.rose} label="Unearned revenue" sub="LIABILITY ↑" tc={C.rose} />
    <Box x={70} y={70} w={120} h={42} stroke={C.rose} label="Accrued expense" sub="LIABILITY ↑" tc={C.rose} />
    <Box x={200} y={70} w={132} h={42} stroke={C.em} label="Prepaid expense" sub="ASSET ↑" tc={C.em} />
  </svg>
);

// Cash flow — three buckets
const CashFlowBuckets = () => (
  <svg viewBox="0 0 340 110" width="100%">
    <Box x={8} y={16} w={100} h={70} stroke={C.em} label="OPERATING" tc={C.em} />
    <text x={58} y={56} textAnchor="middle" fill={C.sub} fontSize="8.5">customers,</text>
    <text x={58} y={67} textAnchor="middle" fill={C.sub} fontSize="8.5">wages, interest</text>
    <Box x={120} y={16} w={100} h={70} stroke={C.sky} label="INVESTING" tc={C.sky} />
    <text x={170} y={56} textAnchor="middle" fill={C.sub} fontSize="8.5">buy / sell</text>
    <text x={170} y={67} textAnchor="middle" fill={C.sub} fontSize="8.5">long-term assets</text>
    <Box x={232} y={16} w={100} h={70} stroke={C.purple} label="FINANCING" tc={C.purple} />
    <text x={282} y={56} textAnchor="middle" fill={C.sub} fontSize="8.5">shares, loans,</text>
    <text x={282} y={67} textAnchor="middle" fill={C.sub} fontSize="8.5">dividends</text>
    <text x={170} y={102} textAnchor="middle" fill={C.sub} fontSize="9">O + I + F = net change in cash</text>
  </svg>
);

// How the four statements link
const StatementsFlow = () => (
  <svg viewBox="0 0 340 120" width="100%">
    <Box x={8} y={20} w={96} h={40} stroke={C.amber} label="Income Stmt" sub="→ Profit" tc={C.amber} />
    <text x={112} y={44} fill={C.sub} fontSize="14">→</text>
    <Box x={122} y={20} w={96} h={40} stroke={C.purple} label="Changes in" sub="Equity" tc={C.purple} />
    <text x={226} y={44} fill={C.sub} fontSize="14">→</text>
    <Box x={236} y={20} w={96} h={40} stroke={C.sky} label="Balance" sub="Sheet" tc={C.sky} />
    <Box x={88} y={78} w={164} h={32} stroke={C.em} label="Cash Flow Statement" sub="explains the cash line" tc={C.em} />
    <text x={170} y={74} textAnchor="middle" fill={C.sub} fontSize="8.5">profit ≠ cash</text>
  </svg>
);

// Break-even chart
const BreakEvenChart = () => {
  const x0 = 40, x1 = 285, y0 = 132, y1 = 22;
  const X = (u) => x0 + (u / 1000) * (x1 - x0);
  const Y = (d) => y0 - (d / 12000) * (y0 - y1);
  return (
    <svg viewBox="0 0 300 160" width="100%">
      <line x1={x0} y1={y1} x2={x0} y2={y0} stroke={C.line} />
      <line x1={x0} y1={y0} x2={x1} y2={y0} stroke={C.line} />
      {/* fixed cost */}
      <line x1={x0} y1={Y(4000)} x2={x1} y2={Y(4000)} stroke={C.sub} strokeWidth="1" strokeDasharray="4 3" />
      <text x={x1} y={Y(4000) - 3} textAnchor="end" fill={C.sub} fontSize="8">Fixed $4,000</text>
      {/* total cost */}
      <line x1={x0} y1={Y(4000)} x2={x1} y2={Y(8000)} stroke={C.rose} strokeWidth="2" />
      <text x={x1} y={Y(8000) - 3} textAnchor="end" fill={C.rose} fontSize="8">Total cost</text>
      {/* revenue */}
      <line x1={x0} y1={Y(0)} x2={x1} y2={Y(12000)} stroke={C.em} strokeWidth="2" />
      <text x={x1} y={Y(12000) + 8} textAnchor="end" fill={C.em} fontSize="8">Revenue</text>
      {/* BEP at 500 units / $6,000 */}
      <circle cx={X(500)} cy={Y(6000)} r="4" fill={C.amber} />
      <text x={X(500)} y={Y(6000) - 8} textAnchor="middle" fill={C.amber} fontSize="8.5" fontWeight="600">BEP 500</text>
      <text x={166} y={154} textAnchor="middle" fill={C.sub} fontSize="9">units sold →</text>
    </svg>
  );
};

// ROI vs RI — two mini grouped bars (Alpha vs Beta)
const RoiVsRi = () => {
  const bar = (x, h, color) => <rect x={x} y={108 - h} width="26" height={h} rx="3" fill={color} />;
  return (
    <svg viewBox="0 0 340 132" width="100%">
      <text x={85} y={12} textAnchor="middle" fill={C.sub} fontSize="9.5" fontWeight="600">ROI (%) — Beta wins</text>
      {bar(50, 58, C.sky)}{bar(96, 64, C.em)}
      <text x={63} y={120} textAnchor="middle" fill={C.sky} fontSize="8.5">A 16%</text>
      <text x={109} y={120} textAnchor="middle" fill={C.em} fontSize="8.5">B 17.5%</text>
      <text x={255} y={12} textAnchor="middle" fill={C.sub} fontSize="9.5" fontWeight="600">RI ($) — Alpha wins</text>
      {bar(225, 80, C.em)}{bar(271, 47, C.sky)}
      <text x={238} y={120} textAnchor="middle" fill={C.em} fontSize="8.5">A $150k</text>
      <text x={284} y={120} textAnchor="middle" fill={C.sky} fontSize="8.5">B $88k</text>
      <line x1="170" y1="14" x2="170" y2="118" stroke={C.line} strokeDasharray="3 3" />
    </svg>
  );
};

// DuPont tree
const DupontTree = () => (
  <svg viewBox="0 0 340 130" width="100%">
    <Box x={120} y={8} w={100} h={30} stroke={C.em} label="ROA 20%" tc={C.em} />
    <line x1="150" y1="38" x2="95" y2="60" stroke={C.line} />
    <line x1="190" y1="38" x2="245" y2="60" stroke={C.line} />
    <text x={170} y={54} textAnchor="middle" fill={C.txt} fontSize="13" fontWeight="700">×</text>
    <Box x={28} y={60} w={130} h={30} stroke={C.sky} label="Profit Margin 8%" tc={C.sky} />
    <Box x={182} y={60} w={130} h={30} stroke={C.amber} label="Asset Turnover 2.5×" tc={C.amber} />
    <text x={93} y={110} textAnchor="middle" fill={C.sub} fontSize="9">Net Profit ÷ Sales</text>
    <text x={247} y={110} textAnchor="middle" fill={C.sub} fontSize="9">Sales ÷ Avg Assets</text>
  </svg>
);

export const DIAGRAMS = {
  accountingEquation: AccountingEquation,
  businessStructures: BusinessStructures,
  qualitativePyramid: QualitativePyramid,
  depreciationChart: DepreciationChart,
  fiveElements: FiveElements,
  adjustmentsMatrix: AdjustmentsMatrix,
  cashFlowBuckets: CashFlowBuckets,
  statementsFlow: StatementsFlow,
  breakEvenChart: BreakEvenChart,
  roiVsRi: RoiVsRi,
  dupontTree: DupontTree,
};

export function Diagram({ name, caption }) {
  const Cmp = DIAGRAMS[name];
  if (!Cmp) return null;
  return (
    <figure className="mx-auto w-full max-w-md rounded-xl border border-slate-800 bg-slate-900/40 p-3">
      <Cmp />
      {caption && <figcaption className="mt-1 text-center text-xs text-slate-500">{caption}</figcaption>}
    </figure>
  );
}
