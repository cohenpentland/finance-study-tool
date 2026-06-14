// Rich per-topic study notes — recovered from the original tool's Study mode
// (structure cards, definition cards and all formulas are verbatim) and expanded
// with intro explanations, memory hooks and worked formulas.
//
// Section shapes:
//   { type:'intro',    heading, body }                       // paragraph(s)
//   { type:'cards',    heading, items:[{name,icon,accent,points?,desc?}] }
//   { type:'formulas', heading, items:[{name,formula,meaning?}] }
//   { type:'callout',  tone:'key'|'tip'|'warn', body }
export default {
  1: {
    sections: [
      {
        type: 'intro',
        heading: 'Financial vs Management Accounting',
        body: 'FINANCIAL accounting reports to EXTERNAL users — investors, banks, creditors, the ATO. It must follow AASB standards, is historical, mandatory and usually audited, and is reported on a regular cycle (annually). MANAGEMENT accounting is for INTERNAL managers: flexible, no required format, forward-looking (budgets, forecasts, cost analysis) and used to make decisions like pricing and expansion.',
      },
      {
        type: 'callout',
        tone: 'tip',
        body: 'Memory hook — Financial = your TAX RETURN (formal, for outsiders, about the past). Management = your PRIVATE NOTES (flexible, for you, about the future).',
      },
      {
        type: 'cards',
        heading: 'The Four Business Structures',
        items: [
          { name: 'Sole Trader', icon: '👤', accent: 'blue', points: ['Owned by ONE person', 'Simple to set up, low cost', 'UNLIMITED personal liability ⚠️', 'Not a separate legal entity', 'Owner taxed personally on profits'] },
          { name: 'Partnership', icon: '👥', accent: 'purple', points: ['2 or more owners sharing profits', 'Governed by a Partnership Agreement', 'ALL partners = UNLIMITED joint liability ⚠️', 'Easy to set up, shared resources', 'Each partner taxed on their share'] },
          { name: 'Company (Pty Ltd)', icon: '🏢', accent: 'green', points: ['Separate legal entity (its own "person")', 'LIMITED liability — owners only lose their investment ✅', 'Can own assets, make contracts, sue/be sued', 'More complex + costly to set up', 'Taxed at the company tax rate'] },
          { name: 'Trust', icon: '🤝', accent: 'amber', points: ['Assets held by a trustee FOR beneficiaries', 'Used for asset protection & tax planning', 'Complex to manage, costly', 'Common in family businesses', 'Income distributed to beneficiaries'] },
        ],
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'LIMITED liability = a COMPANY only. Sole traders and partnerships carry UNLIMITED personal liability — creditors can pursue the owners’ personal assets.',
      },
    ],
  },

  2: {
    sections: [
      {
        type: 'intro',
        heading: 'Qualitative Characteristics',
        body: 'These are the qualities that make financial information USEFUL for decisions. There are two FUNDAMENTAL characteristics (info must have both) and four ENHANCING characteristics that improve usefulness.',
      },
      {
        type: 'cards',
        heading: 'Two Fundamental Characteristics',
        items: [
          { name: 'Relevance', icon: '🎯', accent: 'sky', desc: 'Information that can MAKE A DIFFERENCE to decisions — it has predictive value, confirmatory value, and considers materiality.' },
          { name: 'Faithful Representation', icon: '✅', accent: 'green', desc: 'Information must be COMPLETE, NEUTRAL (unbiased) and FREE FROM ERROR.' },
        ],
      },
      {
        type: 'cards',
        heading: 'Four Enhancing Characteristics (C-V-T-U)',
        items: [
          { name: 'Comparability', icon: '⚖️', accent: 'blue', desc: 'Identify similarities/differences between entities and periods. Needs CONSISTENT policies.' },
          { name: 'Verifiability', icon: '🔍', accent: 'purple', desc: 'Different knowledgeable observers could reach the same conclusion.' },
          { name: 'Timeliness', icon: '⏰', accent: 'amber', desc: 'Available when it is still useful for decisions. Old news is not helpful!' },
          { name: 'Understandability', icon: '💡', accent: 'sky', desc: 'Clearly classified and presented for a reasonably knowledgeable user.' },
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        body: 'Enhancing characteristics BOOST useful information — but they can never make irrelevant or unfaithful information useful.',
      },
    ],
  },

  3: {
    sections: [
      {
        type: 'intro',
        heading: 'Cash vs Accrual — The Core Difference',
        body: 'CASH basis records transactions only when cash actually moves. ACCRUAL basis records revenue when it is EARNED and expenses when they are INCURRED — regardless of when cash changes hands. AASB standards REQUIRE the accrual basis because it gives a truer picture of performance.',
      },
      {
        type: 'callout',
        tone: 'tip',
        body: 'Example — work is done in June but the customer pays in July. Accrual recognises the revenue in JUNE (when earned); cash basis would wait until July.',
      },
      {
        type: 'intro',
        heading: 'Depreciation',
        body: 'Depreciation spreads the cost of a non-current asset over its useful life. It is a NON-CASH expense — the cash already left when the asset was bought; depreciation just allocates that cost across the periods that benefit. It reduces the asset (via accumulated depreciation) and reduces profit on the Income Statement.',
      },
      {
        type: 'formulas',
        heading: 'Straight-Line Depreciation',
        items: [
          { name: 'Annual Depreciation', formula: '(Cost − Residual Value) ÷ Useful Life', meaning: 'Equal expense each year of the asset’s life.' },
          { name: 'Carrying Amount', formula: 'Cost − Accumulated Depreciation', meaning: 'Book value — NOT the market/resale value.' },
        ],
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'Depreciation is a NON-CASH, book figure. Accumulated depreciation reduces the asset; the expense reduces equity.',
      },
    ],
  },

  4: {
    sections: [
      {
        type: 'intro',
        heading: 'The 5 Elements of Financial Statements',
        body: 'The Conceptual Framework defines five building blocks. Knowing the precise definitions is high-value exam content.',
      },
      {
        type: 'cards',
        heading: 'The Five Elements',
        items: [
          { name: 'Asset', icon: '🏦', accent: 'green', desc: 'A present economic resource CONTROLLED by the entity as a result of past events, with the potential to produce future economic benefits.' },
          { name: 'Liability', icon: '📕', accent: 'red', desc: 'A present OBLIGATION to transfer an economic resource as a result of past events.' },
          { name: 'Equity', icon: '🧮', accent: 'sky', desc: 'The RESIDUAL interest in the assets after deducting liabilities (Assets − Liabilities).' },
          { name: 'Income', icon: '📈', accent: 'blue', desc: 'Increases in assets / decreases in liabilities that increase equity — excluding owner contributions.' },
          { name: 'Expense', icon: '📉', accent: 'amber', desc: 'Decreases in assets / increases in liabilities that decrease equity — excluding distributions to owners.' },
        ],
      },
      {
        type: 'intro',
        heading: 'Recognition Criteria',
        body: 'An item is RECOGNISED (recorded in the statements) when it meets the definition of an element AND provides useful information — i.e. it is PROBABLE that future economic benefits will flow, and the amount can be MEASURED reliably.',
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'Recognition = PROBABLE + MEASURABLE. "Probable" means more likely than not to occur.',
      },
    ],
  },

  5: {
    sections: [
      {
        type: 'intro',
        heading: 'The Fundamental Rule',
        body: 'Every transaction is recorded so the accounting equation stays in balance. This dual effect is the heart of double-entry accounting.',
      },
      {
        type: 'formulas',
        heading: 'The Accounting Equation',
        items: [
          { name: 'Accounting Equation', formula: 'Assets = Liabilities + Equity', meaning: 'Total resources = who funded them (lenders + owners).' },
          { name: 'Expanded Equity', formula: 'Equity = Capital + Revenue − Expenses − Drawings', meaning: 'How profit and owner activity change equity.' },
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        body: 'Use the interactive step-through below to watch each transaction keep Assets = Liabilities + Equity balanced. Remember: owner DRAWINGS reduce equity but are NOT an expense.',
      },
    ],
  },

  6: {
    sections: [
      {
        type: 'intro',
        heading: 'What Are Balance Day Adjustments?',
        body: 'Balance day adjustments are end-of-period entries that apply the accrual basis — matching revenues and expenses to the period they belong to, regardless of when cash moved. They make profit reflect the period’s real performance.',
      },
      {
        type: 'cards',
        heading: 'The Four Adjustment Types',
        items: [
          { name: 'Accrued Revenue', icon: '💰', accent: 'green', desc: 'Revenue EARNED but NOT YET received → record an asset (receivable) + revenue.' },
          { name: 'Accrued Expense', icon: '📄', accent: 'red', desc: 'Expense INCURRED but NOT YET paid → record an expense + a liability (payable).' },
          { name: 'Prepaid Expense', icon: '⏳', accent: 'blue', desc: 'Expense PAID IN ADVANCE for a future benefit → an asset now, expensed as it is used.' },
          { name: 'Unearned Revenue', icon: '🎫', accent: 'purple', desc: 'Cash RECEIVED but service NOT YET delivered → a liability now, revenue when earned.' },
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        body: 'Depreciation is also a balance day adjustment: the expense reduces equity and accumulated depreciation reduces the asset.',
      },
    ],
  },

  7: {
    sections: [
      {
        type: 'intro',
        heading: 'The Three Financial Statements',
        body: 'The statements tell a connected story: the Income Statement shows performance over a period, the Balance Sheet shows position at a point in time, and the Cash Flow Statement explains how cash moved.',
      },
      {
        type: 'formulas',
        heading: 'Statement Formulas',
        items: [
          { name: 'Income Statement (P&L)', formula: 'Revenue − Expenses = Net Profit', meaning: 'Profitability over a PERIOD.' },
          { name: 'Balance Sheet', formula: 'Assets = Liabilities + Equity', meaning: 'Position at a POINT IN TIME.' },
          { name: 'Statement of Cash Flows', formula: 'Operating + Investing + Financing = Net Change in Cash', meaning: 'Cash movements over a PERIOD.' },
        ],
      },
      {
        type: 'cards',
        heading: 'Cash Flow — Three Activities',
        items: [
          { name: 'Operating', icon: '⚙️', accent: 'green', desc: 'Day-to-day trading: cash from customers, cash to suppliers and employees.' },
          { name: 'Investing', icon: '📈', accent: 'blue', desc: 'Buying/selling non-current assets and investments.' },
          { name: 'Financing', icon: '🏦', accent: 'purple', desc: 'Funding from owners and lenders: capital, drawings, loans, repayments.' },
        ],
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'Profit ≠ Cash. A profitable business can still run out of cash — the cash flow statement reconciles the two.',
      },
    ],
  },

  8: {
    sections: [
      {
        type: 'intro',
        heading: 'What is CVP Analysis?',
        body: 'Cost-Volume-Profit analysis examines how changes in costs, volume and price affect profit. Its core idea is the Contribution Margin: each unit’s selling price minus its variable cost first covers fixed costs, then becomes profit.',
      },
      {
        type: 'formulas',
        heading: 'Key CVP Formulas',
        items: [
          { name: 'Contribution Margin / unit', formula: 'Selling Price − Variable Cost per unit' },
          { name: 'CM Ratio', formula: 'CM per unit ÷ Selling Price × 100%' },
          { name: 'Break-Even (units)', formula: 'Fixed Costs ÷ CM per unit' },
          { name: 'Break-Even (dollars)', formula: 'Break-Even Units × Selling Price' },
          { name: 'Target Profit (units)', formula: '(Fixed Costs + Target Profit) ÷ CM per unit' },
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        body: 'Try the interactive CVP calculator below — change price, variable cost and fixed costs to watch break-even move.',
      },
    ],
  },

  9: {
    sections: [
      {
        type: 'intro',
        heading: 'Performance Measurement — Why it Matters',
        body: 'Managers and investors evaluate how well a division or investment uses the assets entrusted to it. Two key measures are Return on Investment (a percentage) and Residual Income (a dollar amount).',
      },
      {
        type: 'formulas',
        heading: 'ROI & Residual Income',
        items: [
          { name: 'Return on Investment (ROI)', formula: 'Operating Profit ÷ Total Investment × 100', meaning: 'Percentage return generated on the investment (operating assets).' },
          { name: 'Residual Income (RI)', formula: 'Operating Profit − (Total Investment × Required Rate)', meaning: 'Profit earned ABOVE the minimum required return, in $.' },
        ],
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'ROI is a % (good for comparing sizes); RI is a $ amount. RI avoids ROI’s underinvestment problem — a manager won’t reject a project that beats the required rate just because it lowers their average ROI.',
      },
    ],
  },

  10: {
    sections: [
      {
        type: 'intro',
        heading: 'Financial Statement Analysis — The Big Picture',
        body: 'Ratios turn the raw statements into insight: profitability, efficiency and return. DuPont analysis breaks overall return into its drivers so you can see WHY it changed.',
      },
      {
        type: 'formulas',
        heading: 'Key Ratios',
        items: [
          { name: 'Gross Profit Margin', formula: 'Gross Profit ÷ Sales × 100', meaning: 'Profitability before operating expenses.' },
          { name: 'Profit Margin', formula: 'Net Profit ÷ Sales × 100', meaning: 'Cents of profit per $1 of sales.' },
          { name: 'Asset Turnover', formula: 'Sales ÷ Average Total Assets', meaning: 'Sales generated per $1 of assets (efficiency).' },
          { name: 'Return on Assets (ROA)', formula: 'Net Profit ÷ Avg Total Assets × 100', meaning: 'Overall return on assets.' },
          { name: 'Return on Equity (ROE)', formula: "Net Profit ÷ Owner's Equity × 100", meaning: 'Return generated for the owners.' },
          { name: 'DuPont ROA', formula: 'Profit Margin × Asset Turnover', meaning: 'Splits ROA into profitability × efficiency.' },
        ],
      },
      {
        type: 'callout',
        tone: 'key',
        body: 'DuPont: ROA = Profit Margin × Asset Turnover. A low ROA is either thin margins, slow asset use, or both — DuPont tells you which.',
      },
    ],
  },
};
