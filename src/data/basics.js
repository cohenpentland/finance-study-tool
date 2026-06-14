// "The Basics" — short, easy cram cards: the bare minimum to remember for EACH of
// the 10 exam questions. Front = quick prompt, back = one-line answer. Keyed by the
// exam question number (matches examPaper.js / the exam overview).
export default [
  {
    num: 1, marks: 10, title: 'Financial vs Management Accounting & Structures',
    cards: [
      { q: 'Financial accounting — who for?', a: 'EXTERNAL users (investors, banks, ATO). Follows AASB, historical, annual.' },
      { q: 'Management accounting — who for?', a: 'INTERNAL managers. Flexible, forward-looking (budgets, forecasts).' },
      { q: 'Which structure has LIMITED liability?', a: 'A company only. Sole trader & partnership = UNLIMITED.' },
      { q: 'The three structures?', a: 'Sole proprietorship, Partnership, Company.' },
      { q: 'Best accounting for an expansion decision?', a: 'Management accounting (budgets, CVP, cash-flow forecasts).' },
    ],
  },
  {
    num: 2, marks: 6, title: 'Conceptual Framework — Characteristics',
    cards: [
      { q: 'Two FUNDAMENTAL characteristics?', a: 'Relevance + Faithful Representation.' },
      { q: 'Faithful representation =', a: 'Complete, Neutral, Free from error.' },
      { q: 'Relevance =', a: 'Can make a difference (predictive + confirmatory value, materiality).' },
      { q: 'Four ENHANCING characteristics?', a: 'Comparability, Verifiability, Timeliness, Understandability (C-V-T-U).' },
    ],
  },
  {
    num: 3, marks: 12, title: 'Cash vs Accrual / Depreciation',
    cards: [
      { q: 'Accrual records when?', a: 'Revenue when EARNED, expense when INCURRED — not when cash moves.' },
      { q: 'Why depreciate (not expense in full)?', a: 'Matching principle — spread cost over the useful life.' },
      { q: 'Straight-line formula?', a: '(Cost − Residual) ÷ Useful life.' },
      { q: 'Carrying amount =', a: 'Cost − Accumulated Depreciation.' },
      { q: 'Laptop $3,000, 3 yrs, $0?', a: '$1,000 per year.' },
      { q: 'Depreciation is a … expense?', a: 'NON-CASH.' },
    ],
  },
  {
    num: 4, marks: 12, title: 'Definitions & Recognition Criteria',
    cards: [
      { q: 'Asset =', a: 'Present economic resource, CONTROLLED, from a PAST event (future benefits).' },
      { q: 'Liability =', a: 'Present OBLIGATION to transfer a resource, from a past event.' },
      { q: 'Equity =', a: 'Assets − Liabilities (the owner’s residual).' },
      { q: 'Recognition criteria?', a: 'Provides useful info → RELEVANT + FAITHFULLY REPRESENTED.' },
      { q: 'Highope $300k platinum — verdict?', a: 'NOT an asset (benefits not probable) → EXPENSE it.' },
    ],
  },
  {
    num: 5, marks: 10, title: 'Transaction Analysis (Accounting Equation)',
    cards: [
      { q: 'The equation?', a: 'Assets = Liabilities + Equity.' },
      { q: 'Buy an asset with cash?', a: 'Asset swap — total assets unchanged.' },
      { q: 'Owner drawings?', a: 'Assets ↓ and Equity ↓ — NOT an expense.' },
      { q: 'Sneaker business final balances?', a: 'Assets $18,500 = Liabilities $1,500 + Equity $17,000.' },
      { q: 'Why must it balance?', a: 'Every transaction has a dual effect (double-entry).' },
    ],
  },
  {
    num: 6, marks: 10, title: 'Balance Day Adjustments',
    cards: [
      { q: 'Accrued revenue?', a: 'Earned, not received → Asset ↑, Revenue ↑.' },
      { q: 'Accrued expense?', a: 'Incurred, not paid → Liability ↑, Expense ↑.' },
      { q: 'Prepaid expense?', a: 'Paid in advance → Asset first, expensed as used.' },
      { q: 'Unearned revenue?', a: 'Cash before service → Liability.' },
      { q: 'Trigger words?', a: '“Not yet” = accrual; “in advance” = prepayment.' },
    ],
  },
  {
    num: 7, marks: 12, title: 'Financial Statements & Cash Flows',
    cards: [
      { q: 'Three cash-flow sections?', a: 'Operating, Investing, Financing.' },
      { q: 'Operating =', a: 'Day-to-day: customers, suppliers, wages, interest paid.' },
      { q: 'Investing =', a: 'Buy/sell long-term assets (equipment, property).' },
      { q: 'Financing =', a: 'Shares, loans, dividends/drawings.' },
      { q: 'Interest paid → which section?', a: 'OPERATING (under AASB).' },
      { q: 'Dividend paid → which section?', a: 'FINANCING.' },
    ],
  },
  {
    num: 8, marks: 8, title: 'Cost-Volume-Profit (CVP)',
    cards: [
      { q: 'Contribution margin / unit?', a: 'Selling price − Variable cost.' },
      { q: 'Break-even (units)?', a: 'Fixed costs ÷ CM per unit.' },
      { q: 'Target profit (units)?', a: '(Fixed costs + Target profit) ÷ CM.' },
      { q: 'Café break-even?', a: '$4,000 ÷ $8 = 500 toasties.' },
      { q: 'Price cut effect?', a: 'Lower CM → higher break-even → MORE risk.' },
    ],
  },
  {
    num: 9, marks: 8, title: 'Performance Measurement (ROI & RI)',
    cards: [
      { q: 'ROI formula?', a: 'Operating Profit ÷ Total Investment × 100.' },
      { q: 'Residual Income (RI)?', a: 'Operating Profit − (Required rate × Investment).' },
      { q: 'Alpha vs Beta — ROI?', a: 'Beta higher (17.5% vs 16%).' },
      { q: 'Alpha vs Beta — RI?', a: 'Alpha higher ($150k vs $88k).' },
      { q: 'ROI’s big problem?', a: 'May reject good projects (underinvestment). RI fixes it.' },
    ],
  },
  {
    num: 10, marks: 12, title: 'Financial Statement Analysis / DuPont',
    cards: [
      { q: 'Profit margin?', a: 'Net Profit ÷ Sales × 100.' },
      { q: 'Asset turnover?', a: 'Sales ÷ Average Total Assets.' },
      { q: 'ROA (DuPont)?', a: 'Profit Margin × Asset Turnover.' },
      { q: 'Pine Ltd?', a: '8% × 2.5 = 20% ROA.' },
      { q: 'Improve ROA?', a: '↑ margin (cut costs / raise prices) or ↑ turnover (more sales, same assets).' },
    ],
  },
];
