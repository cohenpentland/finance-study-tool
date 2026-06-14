// THE ACTUAL EXAM PAPER — the 10 questions from the Week 12 Final Exam overview,
// using the official Exam Revision Questions scenarios (and worked model answers
// from the course's Final Exam Prep). This is what the Mock Exam presents — the
// real practice questions, in exam order, totalling 100 marks. Q2 has no separate
// revision scenario (it is pure theory), so it is the standard characteristics
// question the exam lists.
export default [
  {
    num: 1, week: 'Week 1', marks: 10, source: 'Revision Q1',
    title: 'Financial vs Management Accounting & Business Structures',
    scenario: 'Accounting plays a crucial role in supporting business decision-making.',
    required: [
      'Explain the difference between financial and management accounting, and discuss how each supports decision-making for different users.',
      'Using an example, identify which form of accounting would be most useful for a small partnership considering expansion, and why.',
    ],
    model: [
      'FINANCIAL accounting reports to EXTERNAL users (investors, creditors, banks, the ATO). It must follow AASB standards, is mainly historical, general-purpose, and reported on a regular cycle (usually annually). It supports outsiders’ decisions (whether to invest or lend) and provides accountability.',
      'MANAGEMENT accounting is for INTERNAL managers. It has no mandatory format, is flexible and forward-looking (budgets, forecasts, cost & break-even analysis), can be produced anytime, and may include non-financial information. It supports planning, control and internal decision-making.',
      'For a small partnership considering EXPANSION: MANAGEMENT accounting is most useful. The partners need internal, forward-looking information — projected costs, a cash-flow forecast and CVP/break-even analysis — to judge whether the expansion is affordable and profitable. Financial accounting only reports past results. (A partnership also has unlimited joint liability, which may prompt considering a company structure.)',
    ],
  },
  {
    num: 2, week: 'Week 2', marks: 6, source: 'Exam topic (theory)',
    title: 'Conceptual Framework — Qualitative Characteristics',
    scenario: 'The Conceptual Framework sets out the qualities that make financial information useful to users.',
    required: [
      'Explain the TWO fundamental qualitative characteristics.',
      'Explain the FOUR enhancing qualitative characteristics.',
    ],
    model: [
      'FUNDAMENTAL (information must have both): RELEVANCE — capable of making a difference to decisions (predictive value, confirmatory value, materiality). FAITHFUL REPRESENTATION — complete, neutral (unbiased) and free from error.',
      'ENHANCING (improve usefulness): COMPARABILITY (consistent across entities/periods); VERIFIABILITY (independent observers could agree); TIMELINESS (available before it loses its influence); UNDERSTANDABILITY (classified and presented clearly).',
      'The fundamentals come first — if information is not relevant and faithfully represented, the enhancing characteristics cannot make it useful.',
    ],
  },
  {
    num: 3, week: 'Week 5', marks: 12, source: 'Revision Q4',
    title: 'Cash vs Accrual Accounting & Depreciation',
    scenario: 'Harry’s Variety Store purchased a laptop for $3,000 on 1 January 2023. The laptop is expected to last 3 years and have no residual value.',
    required: [
      'Explain the difference between cash and accrual accounting, and state which basis the business must use.',
      'Explain why depreciation is recorded rather than expensing the full $3,000 in the year of purchase.',
      'Calculate annual depreciation using the straight-line method.',
      'Identify which accounts are affected and how they appear in the financial statements.',
    ],
    model: [
      'Cash vs accrual: cash accounting records when cash is received/paid; ACCRUAL records revenue when EARNED and expenses when INCURRED, regardless of cash. AASB requires the accrual basis (it applies the matching principle).',
      'Why depreciate: the MATCHING PRINCIPLE — the laptop provides benefits over 3 years, so its cost is spread across those 3 years. Expensing the full $3,000 in Year 1 would overstate Year 1 expenses (understate profit) and understate later expenses. Depreciation is a non-cash expense.',
      'Straight-line: (Cost − Residual) ÷ Useful life = ($3,000 − $0) ÷ 3 = $1,000 per year.',
      'Accounts: Depreciation Expense $1,000 → Income Statement (reduces profit). Accumulated Depreciation (contra-asset) → Balance Sheet, reducing the carrying amount: Yr1 $2,000, Yr2 $1,000, Yr3 $0.',
    ],
  },
  {
    num: 4, week: 'Week 2', marks: 12, source: 'Revision Q2',
    title: 'Conceptual Framework — Definitions & Recognition Criteria',
    scenario: 'Highope Ltd has spent $300,000 exploring for platinum. The company holds a mining licence but has no previous mining experience, and no platinum has yet been found.',
    required: [
      'Assess whether the exploration costs meet the DEFINITION and RECOGNITION criteria for an asset under the Conceptual Framework.',
      'If not, discuss whether they should instead be recognised as an expense, providing justification.',
    ],
    model: [
      'Asset definition — 3 criteria: (1) a present economic resource with potential future economic benefits, (2) controlled by the entity, (3) arising from a past event. Past event: YES ($300,000 spent). Control: PARTLY (the mining licence). Future benefits: NOT demonstrated — no platinum found and no experience, so benefits are not probable.',
      'Recognition: an item is recognised only if it provides USEFUL information — RELEVANT and a FAITHFUL REPRESENTATION. Recording $300,000 as an asset when recovery is unproven would not faithfully represent the position and could mislead users.',
      'Conclusion: the costs FAIL asset recognition → recognise as an EXPENSE in the period incurred, because there is no reliable evidence of future benefits and capitalising would overstate assets. (AASB 6 allows capitalising exploration costs only where recovery is probable — not the case here.)',
    ],
  },
  {
    num: 5, week: 'Week 3', marks: 10, source: 'Revision Q3',
    title: 'Transaction Analysis (Accounting Equation)',
    scenario: 'A custom-sneaker business begins with the owner contributing $15,000 cash. During the month: (1) buys $5,000 of equipment for cash; (2) buys $2,000 of supplies on credit; (3) earns $3,000 cash sales; (4) repays $500 of the loan; (5) the owner withdraws $1,000.',
    required: [
      'Show the effect of each transaction on the accounting equation (Assets = Liabilities + Equity).',
      'Calculate the final balances of Assets, Liabilities and Owner’s Equity.',
      'Briefly explain why the equation must always remain in balance.',
    ],
    model: [
      'Start: Cash +$15,000; Equity (Capital) +$15,000. (1) Equipment +$5,000, Cash −$5,000 (asset swap). (2) Supplies +$2,000; Accounts Payable +$2,000. (3) Cash +$3,000; Equity (Revenue) +$3,000. (4) Cash −$500; Liabilities −$500. (5) Cash −$1,000; Equity (Drawings) −$1,000.',
      'Final balances: Assets = Cash $11,500 + Equipment $5,000 + Supplies $2,000 = $18,500. Liabilities = $1,500. Equity = $15,000 + $3,000 − $1,000 = $17,000. Check: $18,500 = $1,500 + $17,000 ✓.',
      'Why it balances: every transaction has a dual effect, and equity is DEFINED as assets minus liabilities, so the equation is an identity that must always hold (double-entry).',
    ],
  },
  {
    num: 6, week: 'Week 6', marks: 10, source: 'Revision Q5',
    title: 'Balance Day Adjustments',
    scenario: 'For each transaction, determine the end-of-period adjustment: (1) earned $2,000 interest not yet received; (2) owe $3,500 wages for work performed; (3) paid $1,800 in advance for advertising; (4) received $4,000 in advance from a customer; (5) paid $1,200 insurance covering the next 6 months; (6) incurred $900 electricity not yet paid; (7) earned $3,000 service income not yet invoiced; (8) customer prepays $2,500 for services next period.',
    required: [
      'Identify whether each transaction is accrued, prepaid, or unearned.',
      'Explain how each affects the accounting equation (Assets ↑/↓, Liabilities ↑/↓, Equity ↑/↓).',
      'Briefly justify your reasoning.',
    ],
    model: [
      '1. ACCRUED REVENUE — Asset ↑ (receivable), Equity ↑ (revenue). Earned, not received.',
      '2. ACCRUED EXPENSE — Liability ↑ (wages payable), Equity ↓ (expense). Incurred, not paid.',
      '3. PREPAID EXPENSE — Asset ↑ (prepaid advertising); expensed as used. Paid in advance.',
      '4. UNEARNED REVENUE — Asset ↑ (cash), Liability ↑ (unearned revenue). Cash before service.',
      '5. PREPAID EXPENSE — Asset ↑ (prepaid insurance); expensed over 6 months. Paid in advance.',
      '6. ACCRUED EXPENSE — Liability ↑ (electricity payable), Equity ↓ (expense). Incurred, not paid.',
      '7. ACCRUED REVENUE — Asset ↑ (receivable), Equity ↑ (revenue). Earned, not invoiced.',
      '8. UNEARNED REVENUE — Asset ↑ (cash), Liability ↑ (unearned revenue). Not yet earned.',
    ],
  },
  {
    num: 7, week: 'Week 7', marks: 12, source: 'Revision Q6',
    title: 'Financial Statements — focus on Cash Flows',
    scenario: 'Classify the cash-flow activity of each transaction for a retail business: (1) paid supplier for inventory; (2) purchased equipment; (3) issued shares for cash; (4) received payment from a customer; (5) paid interest on a loan; (6) sold an old delivery van; (7) repaid part of a bank loan; (8) paid wages; (9) paid a dividend to the owner; (10) received a cash refund from an equipment supplier.',
    required: [
      'Classify each as Operating (O), Investing (I), or Financing (F).',
      'Write a one-line justification for each classification.',
      'Explain how each activity type (O, I, F) helps different users understand the cash position.',
    ],
    model: [
      '1. O — paying for inventory is core operations. 2. I — buying a long-term asset. 3. F — raising equity capital. 4. O — collecting revenue from customers. 5. O — interest paid is operating under AASB.',
      '6. I — disposing of a long-term asset. 7. F — repaying debt finance. 8. O — wages are day-to-day operating costs. 9. F — distribution to owners. 10. I — relates to the equipment (asset) purchase.',
      'How each helps users: OPERATING shows whether the core business generates enough cash to sustain itself (liquidity). INVESTING shows whether the business is growing or contracting its asset base. FINANCING shows how the business is funded and what is returned to capital providers.',
    ],
  },
  {
    num: 8, week: 'Week 10', marks: 8, source: 'Revision Q8',
    title: 'Cost-Volume-Profit (CVP) Analysis',
    scenario: 'A small café sells toasties for $12 each. Variable cost per toastie is $4, and total fixed costs are $4,000 per month.',
    required: [
      'Calculate the contribution margin per unit, the break-even point in units and in dollars, and the number of toasties for a target profit of $2,000.',
      'If the selling price is reduced to $10 for a promotion (costs unchanged), explain the effect on the contribution margin, the break-even point and the risk profile.',
      'Discuss one real-world decision where CVP analysis could help a manager choose between pricing or cost strategies.',
    ],
    model: [
      'CM = $12 − $4 = $8. Break-even units = $4,000 ÷ $8 = 500 toasties. Break-even $ = 500 × $12 = $6,000. Target $2,000: ($4,000 + $2,000) ÷ $8 = 750 toasties.',
      'Price to $10: new CM = $6 (down from $8); new break-even = $4,000 ÷ $6 ≈ 667 toasties (up from 500). RISK INCREASES — more units must be sold to break even, so the café is more exposed to a loss if volume doesn’t rise to offset the lower margin.',
      'Real-world: a happy-hour discount. CVP tells the manager how many extra toasties must sell at the lower price to keep the same total contribution — if the expected volume increase doesn’t cover the lost margin, the promotion reduces profit.',
    ],
  },
  {
    num: 9, week: 'Week 11', marks: 8, source: 'Revision Q9',
    title: 'Performance Measurement (ROI & Residual Income)',
    scenario: 'Two divisions report: Alpha — Operating Profit $400,000, Total Investment $2,500,000, Required Return 10%. Beta — Operating Profit $280,000, Total Investment $1,600,000, Required Return 12%.',
    required: [
      'Calculate the Return on Investment (ROI) and Residual Income (RI) for each division.',
      'Based solely on ROI, which division appears to perform better? Based on RI, which creates more value above expectations?',
      'Explain why a manager’s performance evaluation might differ depending on whether ROI or RI is used.',
      'Identify one advantage and one limitation of each measure.',
    ],
    model: [
      'ROI: Alpha = $400,000 ÷ $2,500,000 = 16%; Beta = $280,000 ÷ $1,600,000 = 17.5% → BETA better on ROI.',
      'RI: Alpha = $400,000 − (10% × $2,500,000) = $150,000; Beta = $280,000 − (12% × $1,600,000) = $88,000 → ALPHA creates more value.',
      'Why they differ: ROI is a ratio (favours the smaller, efficient Beta); RI is an absolute $ of value above the required return (favours the larger Alpha). On ROI alone a manager might reject a project earning above the required rate but below their current ROI (underinvestment); RI would accept it.',
      'ROI — advantage: compares divisions of different sizes; limitation: short-term bias / may reject good projects. RI — advantage: encourages all value-adding projects (goal congruence); limitation: can’t fairly compare divisions of different sizes.',
    ],
  },
  {
    num: 10, week: 'Week 8 & 9', marks: 12, source: 'Revision Q7',
    title: 'Financial Statement Analysis — Profitability & DuPont',
    scenario: 'Pine Ltd reports for the year ended 30 June 2025: Sales $3,000,000; Net Profit $240,000; Average Total Assets $1,200,000.',
    required: [
      'Calculate the profit margin, asset turnover, and ROA using the DuPont formula.',
      'Explain how changes in profit margin and asset turnover can influence ROA differently.',
      'Suggest one practical strategy a business could use to improve ROA through each component.',
    ],
    model: [
      'Profit margin = $240,000 ÷ $3,000,000 = 8%. Asset turnover = $3,000,000 ÷ $1,200,000 = 2.5×. ROA (DuPont) = 8% × 2.5 = 20% (check: $240,000 ÷ $1,200,000 = 20%).',
      'How each influences ROA: profit margin reflects cost control / pricing power (profit per $ of sales); asset turnover reflects efficiency (sales per $ of assets). Two firms can reach the same ROA differently — a luxury brand (high margin, low turnover) vs a supermarket (low margin, high turnover).',
      'Strategies: improve MARGIN → cut operating costs or raise prices; improve TURNOVER → generate more sales from the same assets (better inventory management, faster receivables collection, dispose of idle assets).',
    ],
  },
];
