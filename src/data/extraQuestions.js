// Harder, exam-realistic questions layered on top of the 20 base MCQs/topic.
// EVERY question is built off the actual ACC10007 course material (W1–W11) and the
// exam revision scenarios (Harry's laptop, Highope Ltd, the sneaker business, the 8
// balance-day items, the 10 cash-flow items, the café toasties, Alpha/Beta, Pine Ltd)
// plus the wider course content the exam can draw on (the 3 depreciation methods,
// bad debts, the 4 financial statements, the full ratio set, responsibility centres
// and the balanced scorecard). All content stays within the scope of the course
// (e.g. DuPont here is the 2-component ROA = margin × turnover).
//
// Optional fields beyond the base MCQ shape:
//   type: "calc"  -> numeric answer graded within `tolerance`
//   type: "short" -> self-graded; `answer` holds the model answer
//   difficulty: "hard" -> flag for harder MCQs
export default {
  // ── Topic 1 — Financial vs Management Accounting & Business Structures ────────
  1: [
    {
      q: "Which statement about a company (Pty Ltd) is correct?",
      options: [
        "Owners have unlimited liability",
        "It is not a separate legal entity",
        "Shareholders' liability is limited to their investment",
        "It cannot own assets in its own name",
      ],
      answer: 2,
      difficulty: "hard",
      explanation: "A company is a separate legal entity; shareholders only risk the capital they invested — that is limited liability.",
    },
    {
      q: "Which feature distinguishes a PUBLIC company (Ltd) from a PROPRIETARY company (Pty Ltd)?",
      options: [
        "Only a public company has limited liability",
        "A public company can sell its shares to the public; a Pty Ltd cannot",
        "A Pty Ltd is a separate legal entity but a public company is not",
        "Only a Pty Ltd must follow the Corporations Act",
      ],
      answer: 1,
      difficulty: "hard",
      explanation: "Public (Ltd) companies can raise money by selling shares to the public and face extensive regulation; proprietary (Pty Ltd) companies cannot sell to the public and are more lightly regulated.",
    },
    {
      q: "In Australia, the primary law governing companies is the Corporations Act, enforced by:",
      options: ["The ATO", "ASIC", "The RBA", "The ASX"],
      answer: 1,
      explanation: "ASIC (Australian Securities and Investments Commission) administers the Corporations Act. The ATO handles tax, the RBA monetary policy, and the ASX is the share market.",
    },
    {
      q: "Explain the key difference between financial and management accounting in terms of audience and regulation.",
      type: "short",
      answer: "Financial accounting reports to EXTERNAL users (investors, banks, ATO) and must follow AASB standards; management accounting is for INTERNAL decision-makers, is flexible/forward-looking and follows no mandatory format.",
      explanation: "Audience (external vs internal) and regulation (standardised vs flexible) are the two defining contrasts.",
    },
    {
      q: "Exam Q1 scenario: a small partnership is considering EXPANSION. Which form of accounting is most useful, and why?",
      type: "short",
      answer: "MANAGEMENT accounting. It supplies internal, forward-looking information — budgets, cash-flow forecasts, cost-volume-profit and break-even analysis — that lets the partners test whether the expansion is affordable and worthwhile before committing.",
      explanation: "The decision is an internal, future-oriented one, so management accounting (not the historical, external financial accounts) is the right tool.",
    },
  ],

  // ── Topic 2 — Conceptual Framework Characteristics ───────────────────────────
  2: [
    {
      q: "Name the two FUNDAMENTAL qualitative characteristics and the four ENHANCING ones.",
      type: "short",
      answer: "Fundamental: Relevance and Faithful Representation. Enhancing: Comparability, Verifiability, Timeliness, Understandability.",
      explanation: "Fundamentals come first; the four enhancing characteristics improve usefulness but cannot replace them.",
    },
    {
      q: "A company sits on its annual report for 8 months before releasing it. Which ENHANCING characteristic is most compromised?",
      options: ["Comparability", "Verifiability", "Timeliness", "Understandability"],
      answer: 2,
      difficulty: "hard",
      explanation: "Information must be available in time to influence decisions. An 8-month delay damages TIMELINESS.",
    },
  ],

  // ── Topic 3 — Cash vs Accrual / Depreciation (Harry's laptop + 3 methods) ────
  3: [
    {
      q: "Harry's Variety Store buys a laptop for $3,000 (1 Jan 2023) with a 3-year life and no residual value. What is the annual straight-line depreciation ($)?",
      type: "calc",
      answer: 1000,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "(Cost − Residual) / Useful life = ($3,000 − $0) / 3 = $1,000 per year.",
    },
    {
      q: "Harry's laptop ($3,000, $1,000/yr). What is its CARRYING AMOUNT at the end of year 2 ($)?",
      type: "calc",
      answer: 1000,
      tolerance: 0.5,
      explanation: "Carrying amount = Cost − Accumulated Depreciation = $3,000 − ($1,000 × 2) = $1,000.",
    },
    {
      q: "REDUCING-BALANCE method: a computer costs $10,000 and is depreciated at 30% on the reducing balance. What is the depreciation expense in YEAR 1 ($)?",
      type: "calc",
      answer: 3000,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "Year 1 = (Cost − Accumulated Depreciation) × Rate = ($10,000 − $0) × 30% = $3,000.",
    },
    {
      q: "Same computer ($10,000, 30% reducing-balance). What is the depreciation expense in YEAR 2 ($)?",
      type: "calc",
      answer: 2100,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "Year 2 = (Cost − Accumulated Depreciation) × Rate = ($10,000 − $3,000) × 30% = $7,000 × 30% = $2,100. Notice it's LESS than year 1 — reducing-balance front-loads depreciation.",
    },
    {
      q: "UNITS-OF-PRODUCTION: a machine costs $50,000, residual $5,000, and is expected to produce 90,000 units over its life. It makes 18,000 units this year. Depreciation for the year ($)?",
      type: "calc",
      answer: 9000,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "[(Cost − Residual) / total units] × units used = [($50,000 − $5,000) / 90,000] × 18,000 = $0.50 × 18,000 = $9,000.",
    },
    {
      q: "A business performs $5,000 of work in June but the customer pays in July. Under the ACCRUAL basis, in which month is the revenue recognised?",
      options: ["July, when cash is received", "June, when the work is performed", "Split between June and July", "Neither — wait for year end"],
      answer: 1,
      difficulty: "hard",
      explanation: "Accrual recognises revenue when EARNED (work performed) — June — regardless of when the cash arrives.",
    },
    {
      q: "Amortisation is to intangible assets as depreciation is to:",
      options: ["Current assets", "Tangible (physical) assets", "Liabilities", "Cash"],
      answer: 1,
      explanation: "Depreciation allocates the cost of TANGIBLE assets; amortisation does the same job for INTANGIBLE assets (e.g. patents, software).",
    },
  ],

  // ── Topic 4 — Definitions & Recognition (Highope Ltd) ────────────────────────
  4: [
    {
      q: "State the two recognition criteria that must be met to record an asset under the Conceptual Framework (as taught in this course).",
      type: "short",
      answer: "It must meet the DEFINITION of an asset, and recognition must provide USEFUL information — i.e. the information is RELEVANT and a FAITHFUL REPRESENTATION (complete, neutral, free from error).",
      explanation: "The course frames recognition through relevance + faithful representation (older texts say 'probable + reliably measurable').",
    },
    {
      q: "List the THREE criteria an item must ALL meet to be an asset.",
      type: "short",
      answer: "(1) A present economic resource (has the potential to produce future economic benefits), (2) Controlled by the entity, (3) Arising as a result of a past event.",
      explanation: "All three — resource + control + past event — must be satisfied.",
    },
    {
      q: "Exam Q2 (Highope Ltd): $300,000 was spent exploring for platinum — a mining licence is held, but there is no experience and no platinum found. Do these costs qualify as an ASSET? Justify and state the correct treatment.",
      type: "short",
      answer: "No. There is no reliable evidence of future economic benefits — no platinum found and no mining experience — so recognising an asset would not be relevant or a faithful representation. The costs should be recognised as an EXPENSE in the period incurred.",
      explanation: "Control + past event are arguable, but the uncertain future benefit means asset recognition fails → expense it.",
    },
    {
      q: "Highope Ltd's exploration costs fail asset recognition mainly because:",
      options: [
        "The $300,000 is immaterial",
        "Future economic benefits are not reliably demonstrated (no platinum found, no experience)",
        "They lack a mining licence",
        "The cash has not yet been paid",
      ],
      answer: 1,
      difficulty: "hard",
      explanation: "Recognising the costs as an asset would not faithfully represent the situation when recovery is unproven → expense.",
    },
  ],

  // ── Topic 5 — Accounting Equation (the sneaker business) ─────────────────────
  5: [
    {
      q: "Sneaker business: owner invests $15,000; buys $5,000 equipment (cash); buys $2,000 supplies on credit; earns $3,000 cash sales; repays $500 of the payable; withdraws $1,000. What are TOTAL ASSETS at the end ($)?",
      type: "calc",
      answer: 18500,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "Cash $11,500 (15,000 − 5,000 + 3,000 − 500 − 1,000) + Equipment $5,000 + Supplies $2,000 = $18,500.",
    },
    {
      q: "Same sneaker business. What is the final OWNER'S EQUITY ($)?",
      type: "calc",
      answer: 17000,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "Equity = Capital $15,000 + Revenue $3,000 − Drawings $1,000 = $17,000. Check: Assets $18,500 − Liabilities $1,500 = $17,000.",
    },
    {
      q: "In the sneaker business, buying $2,000 of supplies ON CREDIT affects the accounting equation how?",
      type: "short",
      answer: "Assets increase (Supplies +$2,000) and Liabilities increase (Accounts Payable +$2,000); Equity is unchanged. The equation stays balanced.",
      explanation: "Buying on credit raises an asset and a liability by the same amount — equity is untouched.",
    },
  ],

  // ── Topic 6 — Balance Day Adjustments + Bad Debts ────────────────────────────
  6: [
    {
      q: "Exam Q5 item: $1,200 insurance is paid covering the next 6 months. After 2 months have passed, how much insurance EXPENSE has been recognised ($)?",
      type: "calc",
      answer: 400,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "$1,200 / 6 months = $200 per month × 2 months = $400 expensed.",
    },
    {
      q: "Same $1,200 insurance (6 months). After 2 months, how much remains as PREPAID insurance (an asset) ($)?",
      type: "calc",
      answer: 800,
      tolerance: 0.5,
      explanation: "$1,200 − $400 used = $800 still prepaid (an asset) at that point.",
    },
    {
      q: "Exam Q5 item: a customer prepays $4,000 in advance for services to be delivered next period. At balance day this is:",
      options: [
        "Revenue recognised immediately",
        "An accrued revenue (asset)",
        "Unearned revenue (a liability)",
        "A prepaid expense (an asset)",
      ],
      answer: 2,
      difficulty: "hard",
      explanation: "Cash received before the service is delivered → unearned (prepaid) revenue, a LIABILITY, until the service is performed.",
    },
    {
      q: "Which method of accounting for bad debts is PREFERRED under the accrual concept, and why?",
      options: [
        "Direct write-off — it only records a loss once a debt is confirmed bad",
        "The allowance method — it estimates bad debts in the period of the sale, matching expense to revenue",
        "Neither — bad debts are never recorded",
        "Direct write-off — because it avoids estimates",
      ],
      answer: 1,
      difficulty: "hard",
      explanation: "The allowance method estimates uncollectible debts and records the expense in the SAME period as the sale, satisfying the matching principle. Direct write-off often records the loss in a later period.",
    },
    {
      q: "Under the DIRECT WRITE-OFF method, when a specific debt becomes uncollectible the entry is:",
      options: [
        "Accounts Receivable ↓ and Bad Debts Expense ↑",
        "Cash ↑ and Revenue ↑",
        "Allowance for Doubtful Debts ↓ only",
        "No entry is made",
      ],
      answer: 0,
      explanation: "Direct write-off removes the receivable (Asset ↓) and recognises a Bad Debts Expense (Equity ↓) when the debt is confirmed bad.",
    },
  ],

  // ── Topic 7 — Financial Statements & Cash Flows (10 items + 4 statements) ─────
  7: [
    {
      q: "From the exam Q6 list, which transaction is an INVESTING activity?",
      options: ["Paid wages", "Sold an old delivery van", "Issued shares for cash", "Paid interest on a loan"],
      answer: 1,
      difficulty: "hard",
      explanation: "Selling a long-term (non-current) asset like a delivery van is an INVESTING activity. Wages & interest are operating; issuing shares is financing.",
    },
    {
      q: "Exam Q6 trap: under AASB, 'paid interest on a loan' is normally classified as which cash-flow activity?",
      options: ["Financing", "Investing", "Operating", "It is non-cash"],
      answer: 2,
      difficulty: "hard",
      explanation: "Interest PAID is treated as an OPERATING cash flow (a cost of running the business) under AASB — a common exam catch.",
    },
    {
      q: "Which of the FOUR financial statements bridges the Income Statement to the Balance Sheet by showing Opening Equity + Profit − Drawings?",
      options: [
        "Statement of Cash Flows",
        "Statement of Changes in Owner's Equity",
        "Statement of Financial Position",
        "Statement of Profit or Loss",
      ],
      answer: 1,
      difficulty: "hard",
      explanation: "The Statement of Changes in Owner's Equity reconciles profit into the closing equity figure that appears on the Balance Sheet.",
    },
    {
      q: "Sales $500,000 and Cost of Sales $275,000. What is GROSS PROFIT ($)?",
      type: "calc",
      answer: 225000,
      tolerance: 0.5,
      explanation: "Gross Profit = Sales − Cost of Sales = $500,000 − $275,000 = $225,000.",
    },
    {
      q: "Exam Q6 asks how the three activity types help users. Briefly explain what Operating, Investing and Financing cash flows each tell a user.",
      type: "short",
      answer: "OPERATING shows whether core trading generates enough cash to sustain the business. INVESTING shows whether the business is growing or shrinking its asset base (buying vs selling non-current assets). FINANCING shows how the business is funded — raising/repaying debt and equity and returns to owners.",
      explanation: "O = sustainability of the core business; I = investment in capacity; F = funding and returns to capital providers.",
    },
  ],

  // ── Topic 8 — CVP (the café toasties + cost behaviour) ───────────────────────
  8: [
    {
      q: "Café toasties: price $12, variable cost $4, fixed costs $4,000/month. What is the break-even point in UNITS?",
      type: "calc",
      answer: 500,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "CM = $12 − $4 = $8. Break-even = Fixed / CM = $4,000 / $8 = 500 toasties.",
    },
    {
      q: "Same café ($12 / $4 / $4,000 fixed). How many toasties give a target profit of $2,000?",
      type: "calc",
      answer: 750,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "(Fixed + Target) / CM = ($4,000 + $2,000) / $8 = 750 toasties.",
    },
    {
      q: "Promotion drops the price to $10 (variable cost still $4, fixed still $4,000). What is the new break-even in UNITS (round up)?",
      type: "calc",
      answer: 667,
      tolerance: 1,
      difficulty: "hard",
      explanation: "New CM = $10 − $4 = $6. Break-even = $4,000 / $6 = 666.7 → 667 toasties. Lower price = lower CM = higher break-even = more risk.",
    },
    {
      q: "For the café at $12 price and $4 variable cost, what is the contribution margin RATIO?",
      options: ["66.7%", "33.3%", "50%", "60%"],
      answer: 0,
      difficulty: "hard",
      explanation: "CM ratio = CM / Price = $8 / $12 = 0.667 = 66.7%.",
    },
    {
      q: "Which cost is ALWAYS irrelevant to a short-term decision?",
      options: ["Incremental cost", "Opportunity cost", "Sunk cost", "Avoidable cost"],
      answer: 2,
      difficulty: "hard",
      explanation: "A sunk cost has already been incurred and cannot change between alternatives, so it is ALWAYS irrelevant. Relevant costs are future and differ between options.",
    },
    {
      q: "An electricity bill with a fixed monthly service charge plus a usage-based charge is an example of a:",
      options: ["Pure fixed cost", "Pure variable cost", "Mixed (semi-variable) cost", "Sunk cost"],
      answer: 2,
      explanation: "A mixed (semi-variable) cost has both a fixed component (service charge) and a variable component (usage) — it must be split for CVP analysis.",
    },
  ],

  // ── Topic 9 — Performance Measurement (Alpha/Beta + responsibility centres) ──
  9: [
    {
      q: "Alpha division: operating profit $400,000, total investment $2,500,000. What is its ROI (as a %)?",
      type: "calc",
      answer: 16,
      tolerance: 0.1,
      difficulty: "hard",
      explanation: "ROI = Operating profit / Total investment = $400,000 / $2,500,000 = 16%.",
    },
    {
      q: "Beta division: operating profit $280,000, total investment $1,600,000, required rate 12%. What is its Residual Income ($)?",
      type: "calc",
      answer: 88000,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "RI = Profit − (Investment × required rate) = $280,000 − ($1,600,000 × 12%) = $280,000 − $192,000 = $88,000.",
    },
    {
      q: "Alpha: profit $400,000, investment $2,500,000, required rate 10%. What is Alpha's Residual Income ($)?",
      type: "calc",
      answer: 150000,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "RI = $400,000 − ($2,500,000 × 10%) = $400,000 − $250,000 = $150,000.",
    },
    {
      q: "A manager who controls costs, revenue AND the division's assets runs which type of responsibility centre?",
      options: ["Cost centre", "Revenue centre", "Profit centre", "Investment centre"],
      answer: 3,
      difficulty: "hard",
      explanation: "An INVESTMENT centre manager controls costs, revenue and assets, and is measured by ROI or Residual Income. A profit centre controls only costs and revenue.",
    },
    {
      q: "The Balanced Scorecard measures performance across four perspectives. Which is NOT one of them?",
      options: ["Financial", "Customer", "Internal Business Processes", "Government & Regulation"],
      answer: 3,
      difficulty: "hard",
      explanation: "The four perspectives are Financial, Customer, Internal Business Processes, and Innovation & Improvement (Learning & Growth). 'Government & Regulation' is not one of them.",
    },
    {
      q: "Exam Q9: ROI ranks Beta higher (17.5% vs 16%) but RI ranks Alpha higher ($150k vs $88k). Explain why, and which division creates more value.",
      type: "short",
      answer: "ROI is a percentage, so smaller Beta looks more efficient per dollar invested (17.5% > 16%). RI is an absolute dollar figure of profit earned ABOVE the required return, so larger Alpha creates more value ($150,000 > $88,000). RI avoids ROI's underinvestment problem — judged on ROI alone, a manager might reject a value-adding project that lowers their average ROI.",
      explanation: "ROI (%) favours size-neutral comparison; RI ($) favours absolute value created. They can rank divisions differently.",
    },
  ],

  // ── Topic 10 — Financial Statement Analysis (Pine Ltd + full ratio set) ──────
  10: [
    {
      q: "Pine Ltd: sales $3,000,000, net profit $240,000. What is the net profit margin (as a %)?",
      type: "calc",
      answer: 8,
      tolerance: 0.1,
      difficulty: "hard",
      explanation: "Profit margin = Net profit / Sales = $240,000 / $3,000,000 = 8%.",
    },
    {
      q: "Pine Ltd: sales $3,000,000, average total assets $1,200,000. What is the asset turnover (in times)?",
      type: "calc",
      answer: 2.5,
      tolerance: 0.05,
      difficulty: "hard",
      explanation: "Asset turnover = Sales / Average total assets = $3,000,000 / $1,200,000 = 2.5 times.",
    },
    {
      q: "Using DuPont (ROA = profit margin × asset turnover), what is Pine Ltd's ROA (as a %)?",
      type: "calc",
      answer: 20,
      tolerance: 0.1,
      difficulty: "hard",
      explanation: "ROA = 8% × 2.5 = 20%. Check: $240,000 / $1,200,000 = 20%.",
    },
    {
      q: "Current assets $200,000 (including $40,000 inventory), current liabilities $100,000. What is the QUICK (acid-test) ratio?",
      type: "calc",
      answer: 1.6,
      tolerance: 0.05,
      difficulty: "hard",
      explanation: "Quick ratio = (Current Assets − Inventory) / Current Liabilities = ($200,000 − $40,000) / $100,000 = 1.6.",
    },
    {
      q: "Cost of sales $600,000 and average inventory $50,000. What is the TIMES INVENTORY TURNOVER?",
      type: "calc",
      answer: 12,
      tolerance: 0.1,
      difficulty: "hard",
      explanation: "Inventory turnover = Cost of Sales / Average Inventory = $600,000 / $50,000 = 12 times. (Days inventory = 365 / 12 ≈ 30 days.)",
    },
    {
      q: "Total liabilities $400,000 and total assets $1,000,000. What is DEBT TO TOTAL ASSETS (as a %)?",
      type: "calc",
      answer: 40,
      tolerance: 0.1,
      difficulty: "hard",
      explanation: "Debt to total assets = Total Liabilities / Total Assets = $400,000 / $1,000,000 = 40%. Higher = more leveraged = more risk.",
    },
    {
      q: "Exam Q7 asks for one strategy to lift ROA via EACH DuPont component. Give one for profit margin and one for asset turnover.",
      type: "short",
      answer: "Profit margin: earn more profit per sale — e.g. cut operating costs or raise selling prices. Asset turnover: generate more sales from the same assets — e.g. improve inventory turnover, collect receivables faster, or dispose of idle assets.",
      explanation: "Margin = profitability per sale; turnover = sales efficiency per dollar of assets. ROA improves if either rises.",
    },
  ],
};
