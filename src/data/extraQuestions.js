// Harder, exam-realistic questions layered on top of the 20 base MCQs/topic.
// EVERY question here is built off one of the actual exam revision scenarios
// (Harry's laptop, Highope Ltd, the sneaker business, the 8 balance-day items,
// the 10 cash-flow items, the café toasties, Alpha/Beta, Pine Ltd) so practice
// matches what the exam will actually ask. All content stays within the scope
// of the course (e.g. DuPont here is the 2-component ROA = margin × turnover).
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

  // ── Topic 3 — Cash vs Accrual / Depreciation (Harry's laptop) ────────────────
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
      q: "A business performs $5,000 of work in June but the customer pays in July. Under the ACCRUAL basis, in which month is the revenue recognised?",
      options: ["July, when cash is received", "June, when the work is performed", "Split between June and July", "Neither — wait for year end"],
      answer: 1,
      difficulty: "hard",
      explanation: "Accrual recognises revenue when EARNED (work performed) — June — regardless of when the cash arrives. Cash basis would wait until July.",
    },
  ],

  // ── Topic 4 — Definitions & Recognition (Highope Ltd) ────────────────────────
  4: [
    {
      q: "State the two recognition criteria that must be met to record an asset under the Conceptual Framework.",
      type: "short",
      answer: "It must meet the DEFINITION of an asset, and recognition must give useful information — i.e. it is PROBABLE that future economic benefits will flow, and the amount can be MEASURED reliably.",
      explanation: "Meets the definition + probable future benefit + reliable measurement.",
    },
    {
      q: "Exam Q2 (Highope Ltd): $300,000 was spent exploring for platinum — a mining licence is held, but there is no experience and no platinum found. Do these costs qualify as an ASSET? Justify and state the correct treatment.",
      type: "short",
      answer: "No. The future economic benefits are NOT probable — no platinum has been found and the company has no mining experience — so the costs fail the recognition criteria for an asset. They should be recognised as an EXPENSE in the period incurred.",
      explanation: "Control + past event are arguably met, but 'probable future economic benefits' fails, so it cannot be an asset → expense it.",
    },
    {
      q: "Highope Ltd's exploration costs fail asset recognition mainly because:",
      options: [
        "The $300,000 is immaterial",
        "Future economic benefits are not probable (no platinum found, no experience)",
        "They lack a mining licence",
        "The cash has not yet been paid",
      ],
      answer: 1,
      difficulty: "hard",
      explanation: "Recognition needs PROBABLE future benefits. With no platinum found and no experience, that test fails.",
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

  // ── Topic 6 — Balance Day Adjustments (the 8 exam items) ─────────────────────
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
      explanation: "Cash received before the service is delivered → unearned revenue, a LIABILITY, until the service is performed.",
    },
  ],

  // ── Topic 7 — Financial Statements & Cash Flows (the 10 exam items) ──────────
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
      q: "Exam Q6 asks how the three activity types help users. Briefly explain what Operating, Investing and Financing cash flows each tell a user.",
      type: "short",
      answer: "OPERATING shows whether core trading generates enough cash to sustain the business. INVESTING shows whether the business is growing or shrinking its asset base (buying vs selling non-current assets). FINANCING shows how the business is funded — raising/repaying debt and equity and returns to owners. Together they explain where cash came from and went.",
      explanation: "O = sustainability of the core business; I = investment in capacity; F = funding and returns to capital providers.",
    },
  ],

  // ── Topic 8 — CVP (the café toasties) ────────────────────────────────────────
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
  ],

  // ── Topic 9 — ROI & RI (Alpha vs Beta) ───────────────────────────────────────
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
      q: "Exam Q9: ROI ranks Beta higher (17.5% vs 16%) but RI ranks Alpha higher ($150k vs $88k). Explain why, and which division creates more value.",
      type: "short",
      answer: "ROI is a percentage, so smaller Beta looks more efficient per dollar invested (17.5% > 16%). RI is an absolute dollar figure of profit earned ABOVE the required return, so larger Alpha creates more value ($150,000 > $88,000). RI avoids ROI's underinvestment problem — judged on ROI alone, a manager might reject a value-adding project that lowers their average ROI. In value terms, Alpha contributes more.",
      explanation: "ROI (%) favours efficiency/size-neutral comparison; RI ($) favours absolute value created. They can rank divisions differently.",
    },
  ],

  // ── Topic 10 — Financial Statement Analysis / DuPont (Pine Ltd) ──────────────
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
      q: "Exam Q7 asks for one strategy to lift ROA via EACH DuPont component. Give one for profit margin and one for asset turnover.",
      type: "short",
      answer: "Profit margin: earn more profit per sale — e.g. cut operating costs or raise selling prices. Asset turnover: generate more sales from the same assets — e.g. improve inventory turnover, collect receivables faster, or dispose of idle assets.",
      explanation: "Margin = profitability per sale; turnover = sales efficiency per dollar of assets. ROA improves if either rises.",
    },
  ],
};
