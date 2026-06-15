// Rich per-topic study notes, rebuilt from the actual ACC10007 course notes
// (W1–W11) and the Final Exam Prep sheet so the content matches what was taught.
//
// Section shapes:
//   { type:'intro',    heading, body }
//   { type:'cards',    heading, items:[{name,icon,accent,points?,desc?}] }
//   { type:'formulas', heading, items:[{name,formula,meaning?}] }
//   { type:'table',    heading, columns:[...], rows:[[...]], note? }
//   { type:'callout',  tone:'key'|'tip'|'warn', body }
export default {
  1: {
    sections: [
      {
        type: 'intro',
        heading: 'Financial vs Management Accounting',
        body: 'Accounting is an information system that IDENTIFIES, RECORDS and COMMUNICATES the economic events of an entity to help users make decisions. It splits into two branches: FINANCIAL accounting (mainly for external users) and MANAGEMENT accounting (internal only).',
      },
      {
        type: 'visual',
        key: 'businessStructures',
        caption: 'Liability by structure — only a company is limited.',
      },
      {
        type: 'table',
        heading: 'Financial vs Management Accounting',
        columns: ['Feature', 'Financial', 'Management'],
        rows: [
          ['Audience', 'Mainly external (investors, banks, ATO)', 'Internal only (managers)'],
          ['Reports', 'General purpose', 'Specific purpose'],
          ['Detail', 'Broad overview', 'Quite detailed'],
          ['Rules', 'Must follow accounting standards (AASB)', 'No restrictions'],
          ['Frequency', 'Mainly annual / semi-annual', 'Whenever required'],
          ['Time horizon', 'Mainly historical', 'Past AND future'],
          ['Info type', 'Money terms; objective & verifiable', 'Can include non-financial info'],
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        body: 'Memory hook — Financial = your TAX RETURN (formal, for outsiders, about the past). Management = your PRIVATE NOTES (flexible, for you, about the future). For the exam’s “small partnership considering expansion”, the answer is MANAGEMENT accounting (budgets, forecasts, CVP/break-even).',
      },
      {
        type: 'table',
        heading: 'The Three Business Structures',
        columns: ['Structure', 'Owners', 'Liability'],
        rows: [
          ['Sole Proprietorship', '1', 'Unlimited personal liability'],
          ['Partnership', '2 or more', 'Shared — unlimited (joint & several)'],
          ['Company (Ltd / Pty Ltd)', 'Shareholders', 'Limited to amount invested'],
        ],
        note: 'A company is a SEPARATE LEGAL ENTITY — only it offers limited liability.',
      },
      {
        type: 'cards',
        heading: 'Public vs Proprietary Companies',
        items: [
          { name: 'Public (Ltd)', icon: '🏛️', accent: 'blue', points: ['Can sell shares to the public', 'Typically large', 'Extensive regulation', 'Must report'] },
          { name: 'Proprietary (Pty Ltd)', icon: '🏢', accent: 'green', points: ['Cannot sell shares publicly', 'Usually smaller', 'Moderate regulation', 'Reporting depends on size'] },
        ],
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'Corporate regulation (Australia): the CORPORATIONS ACT is the primary law, enforced by ASIC. Other regulators: ASX, ACCC, RBA, APRA, ATO.',
      },
    ],
  },

  2: {
    sections: [
      {
        type: 'intro',
        heading: 'Qualitative Characteristics',
        body: 'The Conceptual Framework sets the qualities that make financial information USEFUL for decisions. There are two FUNDAMENTAL characteristics (information must have both) and four ENHANCING characteristics that improve usefulness.',
      },
      {
        type: 'visual',
        key: 'qualitativePyramid',
        caption: 'Fundamentals first; the four enhancing qualities build on top.',
      },
      {
        type: 'cards',
        heading: 'Two Fundamental Characteristics',
        items: [
          { name: 'Relevance', icon: '🎯', accent: 'sky', desc: 'Capable of MAKING A DIFFERENCE to decisions — it has predictive value, confirmatory value, and considers materiality.' },
          { name: 'Faithful Representation', icon: '✅', accent: 'green', desc: 'COMPLETE, NEUTRAL (unbiased) and FREE FROM ERROR.' },
        ],
      },
      {
        type: 'cards',
        heading: 'Four Enhancing Characteristics (C-V-T-U)',
        items: [
          { name: 'Comparability', icon: '⚖️', accent: 'blue', desc: 'Consistent across entities and periods, so users can spot similarities and differences.' },
          { name: 'Verifiability', icon: '🔍', accent: 'purple', desc: 'Independent observers could confirm the information.' },
          { name: 'Timeliness', icon: '⏰', accent: 'amber', desc: 'Available before it loses its capacity to influence decisions.' },
          { name: 'Understandability', icon: '💡', accent: 'sky', desc: 'Classified, characterised and presented clearly for knowledgeable users.' },
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        body: 'Q2 is 6 marks — likely one mark per characteristic with a brief definition. Don’t confuse fundamental with enhancing. If Relevance and Faithful Representation aren’t met, the other four don’t matter.',
      },
    ],
  },

  3: {
    sections: [
      {
        type: 'intro',
        heading: 'Cash vs Accrual Accounting',
        body: 'CASH accounting records transactions only when cash is received or paid. ACCRUAL accounting records revenue when EARNED and expenses when INCURRED, regardless of the cash flow. AASB requires the accrual basis for general-purpose reports because it applies the matching principle and gives a truer picture of performance.',
      },
      {
        type: 'visual',
        key: 'depreciationChart',
        caption: 'Carrying amount falls $1,000 a year to $0 (straight-line).',
      },
      {
        type: 'table',
        heading: 'Cash vs Accrual',
        columns: ['', 'Cash basis', 'Accrual basis'],
        rows: [
          ['Revenue recorded when', 'Cash received', 'Earned (regardless of cash)'],
          ['Expense recorded when', 'Cash paid', 'Incurred (regardless of cash)'],
          ['Required by AASB?', 'No', 'Yes'],
          ['Matches revenue & expense?', 'No', 'Yes — matching principle'],
        ],
        note: 'Example: work done in June, paid in July → accrual recognises the revenue in JUNE.',
      },
      {
        type: 'intro',
        heading: 'Depreciation & Amortisation',
        body: 'DEPRECIATION is the systematic allocation of a TANGIBLE asset’s cost over its useful life (AMORTISATION does the same for INTANGIBLE assets). It applies the matching principle. It is a NON-CASH expense and does NOT measure the loss in market value. Depreciation expense = the amount charged this period; accumulated depreciation = the total charged over the asset’s life.',
      },
      {
        type: 'formulas',
        heading: 'Three Depreciation Methods',
        items: [
          { name: 'Straight-line', formula: '(Cost − Residual Value) ÷ Useful Life', meaning: 'Equal expense each year. Laptop $3,000, 3 yrs, $0 → $1,000/yr.' },
          { name: 'Reducing-balance', formula: '(Cost − Accumulated Depreciation) × Rate', meaning: 'Higher expense early; applied to the carrying amount (e.g. computers).' },
          { name: 'Units-of-production', formula: '[(Cost − Residual) ÷ Total est. units] × Units used', meaning: 'Based on use, not time (e.g. km driven, machine hours).' },
          { name: 'Carrying amount', formula: 'Cost − Accumulated Depreciation', meaning: 'Book value — NOT market/resale value.' },
        ],
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'In the statements: Depreciation EXPENSE → Income Statement (reduces profit). Accumulated depreciation → Balance Sheet (a contra-asset reducing the asset’s carrying amount).',
      },
    ],
  },

  4: {
    sections: [
      {
        type: 'intro',
        heading: 'The 5 Elements of Financial Statements',
        body: 'The Conceptual Framework defines five building blocks. Knowing the precise definitions — and applying each criterion to the scenario — is high-value exam content (Q4 is 12 marks of analysis).',
      },
      {
        type: 'visual',
        key: 'fiveElements',
        caption: 'The five elements — recognise if relevant + faithfully represented.',
      },
      {
        type: 'cards',
        heading: 'The Five Elements',
        items: [
          { name: 'Asset', icon: '🏦', accent: 'green', desc: 'A present economic resource controlled by the entity as a result of past events.' },
          { name: 'Liability', icon: '📕', accent: 'red', desc: 'A present obligation to transfer an economic resource as a result of past events.' },
          { name: 'Owner’s Equity', icon: '🧮', accent: 'sky', desc: 'The residual interest in the assets after deducting all liabilities (Assets − Liabilities).' },
          { name: 'Income', icon: '📈', accent: 'blue', desc: 'Increases in assets / decreases in liabilities that increase equity — excluding owner contributions.' },
          { name: 'Expense', icon: '📉', accent: 'amber', desc: 'Decreases in assets / increases in liabilities that decrease equity — excluding distributions to owners.' },
        ],
      },
      {
        type: 'cards',
        heading: 'The 3 Criteria (ALL must be met)',
        items: [
          { name: 'Asset', icon: '🟢', accent: 'green', points: ['Present economic resource (potential to produce future benefits)', 'Controlled by the entity', 'Result of a past event'] },
          { name: 'Liability', icon: '🔴', accent: 'red', points: ['Present obligation (no practical ability to avoid)', 'To transfer an economic resource', 'Result of a past event'] },
        ],
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'Recognition criteria (for assets AND liabilities): an item is recognised only if it provides USEFUL information — i.e. it is RELEVANT and a FAITHFUL REPRESENTATION. (Older texts phrase this as “probable + reliably measurable”.)',
      },
      {
        type: 'callout',
        tone: 'tip',
        body: 'Highope Ltd ($300k platinum): control (licence) and past event are arguable, but future benefits are NOT probable (no platinum found, no experience), so recognising an asset would not be relevant/faithful → EXPENSE it. Always link every criterion back to the scenario facts using “because”.',
      },
    ],
  },

  5: {
    sections: [
      {
        type: 'intro',
        heading: 'The Accounting Equation',
        body: 'Every transaction is recorded so the accounting equation stays in balance. Each transaction has a MINIMUM of two effects (dual effect) — this is the heart of double-entry accounting.',
      },
      {
        type: 'visual',
        key: 'accountingEquation',
        caption: 'Assets = Liabilities + Equity — it always balances.',
      },
      {
        type: 'formulas',
        heading: 'The Equation',
        items: [
          { name: 'Basic equation', formula: 'Assets = Liabilities + Owner’s Equity', meaning: 'Resources = how they were financed (lenders + owners).' },
          { name: 'Extended equation', formula: 'A = L + OE + Income − Expenses + Capital − Drawings', meaning: 'Income & capital ADD to equity; expenses & drawings SUBTRACT.' },
        ],
      },
      {
        type: 'table',
        heading: 'Transaction Patterns',
        columns: ['Transaction', 'Effect'],
        rows: [
          ['Owner invests cash', 'Assets ↑, Equity ↑'],
          ['Buy asset with cash', 'Assets ↑↓ (swap — net zero)'],
          ['Buy asset on credit', 'Assets ↑, Liabilities ↑'],
          ['Earn cash revenue', 'Assets ↑, Equity ↑'],
          ['Pay cash expense', 'Assets ↓, Equity ↓'],
          ['Repay a loan', 'Assets ↓, Liabilities ↓'],
          ['Owner withdraws (drawings)', 'Assets ↓, Equity ↓ (NOT an expense)'],
        ],
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'Sneaker business final balances: Assets $18,500 (Cash $11,500 + Equipment $5,000 + Supplies $2,000) = Liabilities $1,500 + Equity $17,000 ($15,000 capital + $3,000 revenue − $1,000 drawings). Always do the balance check. Use the interactive step-through below.',
      },
    ],
  },

  6: {
    sections: [
      {
        type: 'intro',
        heading: 'Balance Day Adjustments',
        body: 'Accounting divides the business’s life into artificial reporting periods. Balance day adjustments are end-of-period entries that apply the ACCRUAL basis — putting revenues and expenses in the correct period regardless of when cash moved.',
      },
      {
        type: 'visual',
        key: 'adjustmentsMatrix',
        caption: 'Accruals vs prepayments — and whether each is an asset or a liability.',
      },
      {
        type: 'table',
        heading: 'The 4 Types (Accruals vs Prepayments)',
        columns: ['', 'Accruals', 'Prepayments'],
        rows: [
          ['Revenues', 'Accrued revenue → ASSET', 'Prepaid (unearned) revenue → LIABILITY'],
          ['Expenses', 'Accrued expense → LIABILITY', 'Prepaid expense → ASSET'],
        ],
        note: 'Trigger words: “not yet received/paid” = accrual. “In advance / prepaid” = prepayment.',
      },
      {
        type: 'cards',
        heading: 'Effect on the Equation',
        items: [
          { name: 'Accrued Revenue', icon: '💰', accent: 'green', desc: 'Earned, not yet received → Asset ↑ (receivable), Equity ↑ (revenue). e.g. $2,000 interest earned.' },
          { name: 'Accrued Expense', icon: '📄', accent: 'red', desc: 'Incurred, not yet paid → Liability ↑ (payable), Equity ↓ (expense). e.g. $3,500 wages owed.' },
          { name: 'Prepaid Expense', icon: '⏳', accent: 'blue', desc: 'Paid in advance → Asset first; as used, Asset ↓ & Equity ↓. e.g. $1,200 insurance for 6 months.' },
          { name: 'Unearned Revenue', icon: '🎫', accent: 'purple', desc: 'Cash received before earning → Liability; as earned, Liability ↓ & Revenue ↑. e.g. $4,000 customer advance.' },
        ],
      },
      {
        type: 'intro',
        heading: 'Bad & Doubtful Debts',
        body: 'When a business sells on credit, some debtors won’t pay. The accrual concept requires accounting for this. There are two methods.',
      },
      {
        type: 'cards',
        heading: 'Two Methods',
        items: [
          { name: 'Direct Write-Off', icon: '✂️', accent: 'amber', desc: 'Write the debt off as a Bad Debts Expense only WHEN it goes bad (Accounts Receivable ↓, Expense ↑). Criticism: the loss often lands in a later period than the sale → violates matching.' },
          { name: 'Allowance Method', icon: '🛡️', accent: 'green', desc: 'ESTIMATE uncollectible debts and record an expense in the period of sale (Allowance for Doubtful Debts ↑ as a contra-asset, Bad Debts Expense ↑). PREFERRED — it matches the expense to the revenue period.' },
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        body: 'Forgetting an accrued expense understates expenses → OVERSTATES profit (and understates liabilities).',
      },
    ],
  },

  7: {
    sections: [
      {
        type: 'intro',
        heading: 'The Four Financial Statements',
        body: 'The statements tell a connected story. Note there are FOUR — the Statement of Changes in Equity links profit to the Balance Sheet.',
      },
      {
        type: 'visual',
        key: 'statementsFlow',
        caption: 'How the four statements connect (profit → equity → balance sheet).',
      },
      {
        type: 'cards',
        heading: 'The Four Statements',
        items: [
          { name: 'Statement of Financial Position (Balance Sheet)', icon: '📊', accent: 'sky', desc: 'Assets, liabilities & equity at a POINT IN TIME. Assets = Liabilities + Equity.' },
          { name: 'Statement of Profit or Loss (Income Statement)', icon: '📈', accent: 'green', desc: 'Revenue & expenses over a PERIOD → profit.' },
          { name: 'Statement of Changes in Owner’s Equity', icon: '🔁', accent: 'purple', desc: 'Opening Equity + Profit − Drawings = Closing Equity. Bridges profit to the Balance Sheet.' },
          { name: 'Statement of Cash Flows', icon: '💵', accent: 'amber', desc: 'Actual cash in/out over a PERIOD, split into Operating, Investing, Financing.' },
        ],
      },
      {
        type: 'formulas',
        heading: 'Income Statement Structure',
        items: [
          { name: 'Gross Profit', formula: 'Sales − Cost of Sales' },
          { name: 'Profit before tax', formula: 'Gross Profit + Other Income − Operating Expenses' },
          { name: 'Profit after tax', formula: 'Profit before Tax − Income Tax Expense' },
        ],
      },
      {
        type: 'table',
        heading: 'Cash Flow — Three Activities',
        columns: ['Section', 'What it includes', 'Examples'],
        rows: [
          ['Operating (O)', 'Day-to-day trading', 'Receipts from customers, payments to suppliers/employees, interest paid, tax'],
          ['Investing (I)', 'Buying/selling long-term assets', 'Buy equipment, sell property, equipment refund'],
          ['Financing (F)', 'How the business is funded', 'Issue shares, borrow/repay loans, dividends/drawings'],
        ],
        note: 'Exam traps: interest PAID = Operating (AASB); dividends paid = Financing; equipment refund = Investing.',
      },
      {
        type: 'visual',
        key: 'cashFlowBuckets',
        caption: 'The three cash-flow sections and what falls in each.',
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'Profit ≠ Cash. A profitable business can still run out of cash. Positive OPERATING cash flow is the key sign of health. Net change in cash = Operating + Investing + Financing.',
      },
    ],
  },

  8: {
    sections: [
      {
        type: 'intro',
        heading: 'What is CVP Analysis?',
        body: 'Cost-Volume-Profit analysis examines how costs, volume and price affect profit. It is a MANAGEMENT accounting tool for planning profit, break-even, target profit, and short-term decisions. Key assumption: costs are either FIXED or VARIABLE.',
      },
      {
        type: 'visual',
        key: 'breakEvenChart',
        caption: 'Break-even = where the revenue and cost lines cross (café: 500 units).',
      },
      {
        type: 'cards',
        heading: 'Cost Behaviour',
        items: [
          { name: 'Fixed Costs', icon: '🏠', accent: 'blue', desc: 'Do NOT change with activity (rent, insurance, depreciation). Fixed cost PER UNIT falls as volume rises.' },
          { name: 'Variable Costs', icon: '📦', accent: 'green', desc: 'Change in direct proportion to activity (materials, commissions). Variable cost PER UNIT stays constant.' },
          { name: 'Mixed (Semi-variable)', icon: '🔀', accent: 'amber', desc: 'Both a fixed and a variable part (e.g. electricity = service charge + usage). Split before CVP.' },
          { name: 'Relevant Range', icon: '📏', accent: 'sky', desc: 'The activity range over which the fixed/variable assumptions hold.' },
        ],
      },
      {
        type: 'formulas',
        heading: 'Core CVP Formulas',
        items: [
          { name: 'CM per unit', formula: 'Selling Price − Variable Cost per unit' },
          { name: 'CM Ratio', formula: 'CM per unit ÷ Selling Price × 100' },
          { name: 'Break-Even (units)', formula: 'Fixed Costs ÷ CM per unit' },
          { name: 'Break-Even (dollars)', formula: 'Fixed Costs ÷ CM Ratio' },
          { name: 'Target Profit (units)', formula: '(Fixed Costs + Target Profit) ÷ CM per unit' },
          { name: 'Operating Profit', formula: 'Contribution Margin − Fixed Costs', meaning: 'The management-accounting income format: Sales − Variable = CM − Fixed = Profit.' },
        ],
      },
      {
        type: 'table',
        heading: 'Relevant Costs for Decisions',
        columns: ['Term', 'Meaning'],
        rows: [
          ['Relevant cost', 'A FUTURE cost that DIFFERS between alternatives'],
          ['Incremental cost', 'The extra cost of choosing one option'],
          ['Opportunity cost', 'The benefit given up by not choosing the next-best option'],
          ['Sunk cost', 'A past cost already incurred — ALWAYS irrelevant'],
        ],
        note: 'Make-or-buy: choose the lower of make vs buy cost. Special order: accept if incremental revenue > incremental cost (idle capacity).',
      },
      {
        type: 'callout',
        tone: 'tip',
        body: 'Café toastie: CM $8, break-even 500 units ($6,000), 750 units for $2,000 profit. Drop price to $10 → CM $6 → break-even 667 → MORE risk. Try the interactive calculator below.',
      },
    ],
  },

  9: {
    sections: [
      {
        type: 'intro',
        heading: 'Performance Measurement',
        body: 'Organisations set a mission → strategy → objectives, then measure whether objectives are met. How performance is measured depends on the type of RESPONSIBILITY CENTRE a manager runs.',
      },
      {
        type: 'visual',
        key: 'roiVsRi',
        caption: 'ROI favours Beta (17.5%); RI favours Alpha ($150k) — they can disagree.',
      },
      {
        type: 'table',
        heading: 'Responsibility Centres',
        columns: ['Type', 'Manager controls…', 'Measured by'],
        rows: [
          ['Cost Centre', 'Costs only', 'Variance from budgeted costs'],
          ['Revenue Centre', 'Revenue only', 'Variance from budgeted revenue'],
          ['Profit Centre', 'Costs & revenue', 'Profit (Revenue − Costs)'],
          ['Investment Centre', 'Costs, revenue & assets', 'ROI or Residual Income'],
        ],
        note: 'Responsibility accounting: only judge managers on items WITHIN THEIR CONTROL.',
      },
      {
        type: 'formulas',
        heading: 'ROI & Residual Income',
        items: [
          { name: 'Return on Investment (ROI)', formula: 'Operating Profit ÷ Total Investment × 100', meaning: 'Alpha: $400k ÷ $2.5m = 16%. Beta: $280k ÷ $1.6m = 17.5%.' },
          { name: 'DuPont ROI', formula: '(Profit ÷ Sales) × (Sales ÷ Investment)', meaning: 'Profit Margin × Investment Turnover.' },
          { name: 'Residual Income (RI)', formula: 'Operating Profit − (Required Rate × Investment)', meaning: 'Alpha: $400k − (10% × $2.5m) = $150k. Beta: $280k − (12% × $1.6m) = $88k.' },
        ],
      },
      {
        type: 'cards',
        heading: 'ROI vs RI',
        items: [
          { name: 'ROI — advantages', icon: '✅', accent: 'green', points: ['Single, easy summary measure', 'Compares divisions of DIFFERENT sizes (a ratio)', 'Encourages efficient asset use'] },
          { name: 'ROI — disadvantages', icon: '⚠️', accent: 'amber', points: ['Short-term bias — may reject good projects that dilute ROI', 'Asset-age problem: old assets → low book value → inflated ROI', 'Distorted by different accounting policies'] },
          { name: 'RI — advantage', icon: '✅', accent: 'green', desc: 'Accepts ANY project earning above the required rate → better value-creating decisions. RI > 0 = value created.' },
          { name: 'RI — limitation', icon: '⚠️', accent: 'amber', desc: 'An absolute $ figure → can’t fairly compare divisions of different sizes.' },
        ],
      },
      {
        type: 'cards',
        heading: 'The Balanced Scorecard (Kaplan & Norton)',
        items: [
          { name: 'Financial', icon: '💰', accent: 'green', desc: '“How do we look to shareholders?” — ROI, RI, profit margin, revenue growth.' },
          { name: 'Customer', icon: '🤝', accent: 'sky', desc: '“How do customers see us?” — satisfaction, market share, retention.' },
          { name: 'Internal Business Processes', icon: '⚙️', accent: 'blue', desc: '“What must we excel at?” — defect rate, cycle time, efficiency.' },
          { name: 'Innovation & Improvement', icon: '🌱', accent: 'purple', desc: '“Can we keep improving?” — training, new-product revenue, R&D.' },
        ],
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'Financial measures alone are LAGGING indicators. The Balanced Scorecard adds non-financial perspectives so short-term profit isn’t chased at the expense of long-term health.',
      },
    ],
  },

  10: {
    sections: [
      {
        type: 'intro',
        heading: 'Financial Statement Analysis',
        body: 'Ratios turn raw statements into insight. Always compare to a benchmark: prior years (intra-entity / trend), competitors (inter-entity), or industry averages. There are FOUR categories of ratios.',
      },
      {
        type: 'visual',
        key: 'dupontTree',
        caption: 'DuPont splits ROA into profit margin × asset turnover.',
      },
      {
        type: 'table',
        heading: 'The 4 Categories',
        columns: ['Category', 'Measures'],
        rows: [
          ['Liquidity', 'Short-term ability to pay debts with cash'],
          ['Asset Efficiency', 'How efficiently assets are used to generate cash'],
          ['Capital Structure', 'Long-term solvency / risk (use of debt)'],
          ['Profitability', 'Operating success of the entity'],
        ],
      },
      {
        type: 'formulas',
        heading: 'Profitability & DuPont',
        items: [
          { name: 'Profit Margin', formula: 'Net Profit ÷ Sales × 100', meaning: 'Pine Ltd: $240k ÷ $3m = 8%.' },
          { name: 'Asset Turnover', formula: 'Sales ÷ Average Total Assets', meaning: 'Pine Ltd: $3m ÷ $1.2m = 2.5×.' },
          { name: 'ROA (DuPont)', formula: 'Profit Margin × Asset Turnover = Net Profit ÷ Avg Total Assets', meaning: 'Pine Ltd: 8% × 2.5 = 20%.' },
          { name: 'ROE', formula: 'Net Profit ÷ Average Owner’s Equity × 100' },
          { name: 'Gross Profit Margin', formula: 'Gross Profit ÷ Sales × 100' },
        ],
      },
      {
        type: 'formulas',
        heading: 'Liquidity · Efficiency · Solvency',
        items: [
          { name: 'Current Ratio', formula: 'Current Assets ÷ Current Liabilities' },
          { name: 'Quick (Acid-Test) Ratio', formula: '(Current Assets − Inventory) ÷ Current Liabilities' },
          { name: 'Inventory Turnover', formula: 'Cost of Sales ÷ Average Inventory  ·  Days = 365 ÷ turnover' },
          { name: 'Debtors Turnover', formula: 'Sales ÷ Average Trade Debtors  ·  Days = 365 ÷ turnover' },
          { name: 'Debt to Total Assets', formula: 'Total Liabilities ÷ Total Assets × 100', meaning: 'Higher = more leveraged = more risk.' },
          { name: 'Times Interest Earned', formula: 'EBIT ÷ Interest Expense', meaning: 'Higher = interest more safely covered.' },
        ],
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'DuPont: a low ROA is thin margins, slow asset turnover, or both — DuPont tells you which. No ratio is good or bad alone; always compare and explain WHY using the numbers. Improve ROA via margin (cut costs / raise prices) or turnover (more sales from the same assets).',
      },
    ],
  },
};
