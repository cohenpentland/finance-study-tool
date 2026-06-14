// COMPLETE equation reference for the ACC10007 final exam.
// Sourced directly from the course notes (W1–W11) and the Final Exam Prep sheet.
// Grouped by exam question so you can revise the formulas in the order they'll be
// tested. `exam` tags the question(s) each group maps to.
export default [
  {
    group: 'The Accounting Equation',
    exam: 'Q5 · W3',
    items: [
      { name: 'Basic equation', formula: 'Assets = Liabilities + Owner’s Equity', note: 'The foundation — must ALWAYS balance.' },
      { name: 'Rearranged for equity', formula: 'Owner’s Equity = Assets − Liabilities', note: 'Equity is the residual interest.' },
      { name: 'Extended equation', formula: 'Assets = Liabilities + Owner’s Equity + Income − Expenses + Capital − Drawings', note: 'Income & extra capital ADD to equity; expenses & drawings SUBTRACT.' },
      { name: 'Net assets', formula: 'Net Assets = Total Assets − Total Liabilities = Total Equity', note: 'Net assets always equals total equity.' },
    ],
  },
  {
    group: 'Depreciation (3 methods)',
    exam: 'Q3 · W5',
    items: [
      { name: 'Straight-line', formula: 'Annual Depreciation = (Cost − Residual Value) ÷ Useful Life', note: 'Equal expense each year. Harry’s laptop: ($3,000 − 0) ÷ 3 = $1,000/yr.' },
      { name: 'Reducing-balance', formula: 'Depreciation = (Cost − Accumulated Depreciation) × Rate', note: 'Higher expense early; applied to the carrying amount each year.' },
      { name: 'Units-of-production', formula: 'Depreciation = [(Cost − Residual) ÷ Total est. units] × Units used this period', note: 'Based on use, not time (e.g. km, machine hours).' },
      { name: 'Carrying amount', formula: 'Carrying Amount = Cost − Accumulated Depreciation', note: 'Book value — NOT market/resale value.' },
    ],
  },
  {
    group: 'Income Statement & Profit',
    exam: 'Q7 · W7',
    items: [
      { name: 'Gross profit', formula: 'Gross Profit = Sales − Cost of Sales' },
      { name: 'Profit before tax', formula: 'Profit before Tax = Gross Profit + Other Income − Operating Expenses' },
      { name: 'Profit after tax', formula: 'Profit after Tax = Profit before Tax − Income Tax Expense' },
      { name: 'Net profit (P&L)', formula: 'Net Profit = Total Revenue − Total Expenses' },
    ],
  },
  {
    group: 'Statement of Changes in Equity & Cash Flows',
    exam: 'Q7 · W7',
    items: [
      { name: 'Closing equity', formula: 'Closing Equity = Opening Equity + Profit − Drawings', note: 'Bridges the Income Statement to the Balance Sheet.' },
      { name: 'Net change in cash', formula: 'Δ Cash = Operating + Investing + Financing cash flows' },
      { name: 'Closing cash', formula: 'Closing Cash = Opening Cash + Net Change in Cash' },
    ],
  },
  {
    group: 'CVP — Cost-Volume-Profit',
    exam: 'Q8 · W10',
    items: [
      { name: 'Contribution margin / unit', formula: 'CM = Selling Price − Variable Cost per unit', note: 'Café toastie: $12 − $4 = $8.' },
      { name: 'Total contribution margin', formula: 'Total CM = Total Sales − Total Variable Costs' },
      { name: 'CM ratio', formula: 'CM Ratio = (CM per unit ÷ Selling Price) × 100', note: '$8 ÷ $12 = 66.7%.' },
      { name: 'Break-even (units)', formula: 'Break-even Units = Fixed Costs ÷ CM per unit', note: '$4,000 ÷ $8 = 500 toasties.' },
      { name: 'Break-even (dollars)', formula: 'Break-even $ = Fixed Costs ÷ CM Ratio  (= BE units × Price)', note: '$4,000 ÷ 0.667 = $6,000.' },
      { name: 'Target profit (units)', formula: 'Required Units = (Fixed Costs + Target Profit) ÷ CM per unit', note: '($4,000 + $2,000) ÷ $8 = 750.' },
      { name: 'Target profit (dollars)', formula: 'Required Sales $ = (Fixed Costs + Target Profit) ÷ CM Ratio' },
      { name: 'Operating profit (CM format)', formula: 'Operating Profit = Contribution Margin − Fixed Costs' },
    ],
  },
  {
    group: 'Performance — ROI & Residual Income',
    exam: 'Q9 · W11',
    items: [
      { name: 'Return on Investment', formula: 'ROI = (Operating Profit ÷ Total Investment) × 100', note: 'Alpha: $400,000 ÷ $2,500,000 = 16%.' },
      { name: 'DuPont ROI', formula: 'ROI = Profit Margin × Investment Turnover = (Profit ÷ Sales) × (Sales ÷ Investment)' },
      { name: 'Residual Income', formula: 'RI = Operating Profit − (Required Rate × Total Investment)', note: 'Alpha: $400,000 − (10% × $2.5m) = $150,000.' },
      { name: 'Capital charge', formula: 'Capital Charge = Required Rate of Return × Investment', note: 'The $ amount RI subtracts.' },
    ],
  },
  {
    group: 'Profitability Ratios',
    exam: 'Q10 · W8–9',
    items: [
      { name: 'Profit margin', formula: 'Profit Margin = (Net Profit ÷ Sales) × 100', note: 'Pine Ltd: $240,000 ÷ $3,000,000 = 8%.' },
      { name: 'Gross profit margin', formula: 'Gross Profit Margin = (Gross Profit ÷ Sales) × 100' },
      { name: 'Asset turnover', formula: 'Asset Turnover = Sales ÷ Average Total Assets', note: 'Pine Ltd: $3,000,000 ÷ $1,200,000 = 2.5×.' },
      { name: 'Return on assets (DuPont)', formula: 'ROA = Profit Margin × Asset Turnover = Net Profit ÷ Avg Total Assets', note: 'Pine Ltd: 8% × 2.5 = 20%.' },
      { name: 'Return on equity', formula: 'ROE = (Net Profit ÷ Average Owner’s Equity) × 100' },
    ],
  },
  {
    group: 'Liquidity Ratios',
    exam: 'Q10 · W8',
    items: [
      { name: 'Current ratio', formula: 'Current Ratio = Current Assets ÷ Current Liabilities', note: 'x:1 — above 1 can cover short-term debts.' },
      { name: 'Quick (acid-test) ratio', formula: 'Quick Ratio = (Current Assets − Inventory) ÷ Current Liabilities', note: 'Stricter — excludes slow-moving inventory.' },
      { name: 'Cash flow ratio', formula: 'Cash Flow Ratio = Net Operating Cash Flows ÷ Current Liabilities' },
    ],
  },
  {
    group: 'Asset Efficiency Ratios',
    exam: 'Q10 · W8',
    items: [
      { name: 'Inventory turnover', formula: 'Times Inventory Turnover = Cost of Sales ÷ Average Inventory', note: 'Higher = sells stock faster.' },
      { name: 'Days inventory', formula: 'Days Inventory = 365 ÷ Times Inventory Turnover' },
      { name: 'Debtors turnover', formula: 'Times Debtors Turnover = Sales ÷ Average Trade Debtors' },
      { name: 'Days debtors', formula: 'Days Debtors = 365 ÷ Times Debtors Turnover', note: 'Lower = collects cash faster.' },
      { name: 'Creditors turnover', formula: 'Times Creditors Turnover = Cost of Sales ÷ Average Trade Creditors' },
      { name: 'Days creditors', formula: 'Days Creditors = 365 ÷ Times Creditors Turnover' },
    ],
  },
  {
    group: 'Capital Structure (Solvency) Ratios',
    exam: 'Q10 · W8',
    items: [
      { name: 'Debt to total assets', formula: 'Debt to Total Assets = (Total Liabilities ÷ Total Assets) × 100', note: 'Higher = more leveraged = more risk.' },
      { name: 'Times interest earned', formula: 'Times Interest Earned = Profit before Interest & Tax (EBIT) ÷ Interest Expense', note: 'Higher = interest is more safely covered.' },
    ],
  },
];
