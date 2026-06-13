// Harder, exam-realistic questions added on top of the original 20 MCQs/topic.
// Keyed by topic id. Supports optional fields beyond the base MCQ shape:
//   type: "calc"  -> numeric answer graded within `tolerance`
//   type: "short" -> self-graded; `answer` holds the model answer
//   difficulty: "hard" -> flag for harder MCQs
export default {
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
  ],
  2: [
    {
      q: "Name the two FUNDAMENTAL qualitative characteristics and the four ENHANCING ones.",
      type: "short",
      answer: "Fundamental: Relevance and Faithful Representation. Enhancing: Comparability, Verifiability, Timeliness, Understandability.",
      explanation: "Fundamentals come first; the four enhancing characteristics improve usefulness but cannot replace them.",
    },
  ],
  3: [
    {
      q: "A machine costs $50,000, has a residual value of $5,000 and a useful life of 5 years. What is the annual straight-line depreciation expense ($)?",
      type: "calc",
      answer: 9000,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "(Cost − Residual) / Useful life = (50,000 − 5,000) / 5 = $9,000 per year.",
    },
    {
      q: "Using the machine above, what is the accumulated depreciation after 2 full years ($)?",
      type: "calc",
      answer: 18000,
      tolerance: 0.5,
      explanation: "2 × $9,000 = $18,000 accumulated; carrying amount would be $50,000 − $18,000 = $32,000.",
    },
    {
      q: "At 30 June a business has earned $4,000 of revenue but will not invoice until July. Under accrual accounting, what is recorded at 30 June?",
      options: [
        "Nothing until cash is received",
        "Accrued revenue (asset) and revenue of $4,000",
        "Unearned revenue (liability) of $4,000",
        "Prepaid expense of $4,000",
      ],
      answer: 1,
      difficulty: "hard",
      explanation: "Revenue is recognised when earned. The amount owed by the customer is an asset (accrued revenue/receivable).",
    },
  ],
  4: [
    {
      q: "State the two recognition criteria that must be met to record an asset under the Conceptual Framework.",
      type: "short",
      answer: "(1) It is probable that future economic benefits will flow to the entity, and (2) the item has a cost or value that can be measured reliably.",
      explanation: "Probable future economic benefit + reliable measurement are the two recognition tests.",
    },
  ],
  5: [
    {
      q: "A business buys $2,000 of supplies on credit. Describe the effect on the accounting equation.",
      type: "short",
      answer: "Assets increase (Supplies +$2,000) and Liabilities increase (Accounts Payable +$2,000); Equity is unchanged. The equation stays balanced.",
      explanation: "Buying on credit raises an asset and a liability by the same amount.",
    },
  ],
  6: [
    {
      q: "On 1 March a business pays $12,000 for 12 months of insurance. What is the insurance EXPENSE recognised at 30 June (4 months later)?",
      type: "calc",
      answer: 4000,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "$12,000 / 12 months × 4 months = $4,000 expensed; the remaining $8,000 stays as prepaid insurance (an asset).",
    },
    {
      q: "A gym receives $2,400 on 1 April for a 12-month membership. How much is still UNEARNED revenue (a liability) at 30 June?",
      type: "calc",
      answer: 1800,
      tolerance: 0.5,
      explanation: "3 months earned = $600; unearned = $2,400 − $600 = $1,800.",
    },
  ],
  7: [
    {
      q: "Cash received from customers is $80,000 and cash paid to suppliers and employees is $55,000. What is net cash from OPERATING activities ($)?",
      type: "calc",
      answer: 25000,
      tolerance: 0.5,
      explanation: "$80,000 − $55,000 = $25,000 net operating cash inflow.",
    },
  ],
  8: [
    {
      q: "Price $10, variable cost $4 per unit, fixed costs $30,000. What is the break-even point in UNITS?",
      type: "calc",
      answer: 5000,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "CM = $10 − $4 = $6. Break-even = Fixed / CM = $30,000 / $6 = 5,000 units.",
    },
    {
      q: "Same data (price $10, variable $4, fixed $30,000). How many units must be sold to earn a target profit of $12,000?",
      type: "calc",
      answer: 7000,
      tolerance: 0.5,
      explanation: "(Fixed + Target) / CM = (30,000 + 12,000) / 6 = 7,000 units.",
    },
    {
      q: "A product sells for $25 with variable cost $15. What is the contribution margin RATIO?",
      options: ["40%", "60%", "10%", "15%"],
      answer: 0,
      difficulty: "hard",
      explanation: "CM = $25 − $15 = $10. CM ratio = 10 / 25 = 40%.",
    },
  ],
  9: [
    {
      q: "A division has operating profit of $90,000 and average operating assets of $600,000. What is its ROI (as a %)?",
      type: "calc",
      answer: 15,
      tolerance: 0.1,
      difficulty: "hard",
      explanation: "ROI = Operating profit / Operating assets = 90,000 / 600,000 = 15%.",
    },
    {
      q: "Operating profit $90,000, operating assets $600,000, required rate of return 12%. What is Residual Income ($)?",
      type: "calc",
      answer: 18000,
      tolerance: 0.5,
      difficulty: "hard",
      explanation: "RI = Profit − (Assets × Required rate) = 90,000 − (600,000 × 12%) = 90,000 − 72,000 = $18,000.",
    },
  ],
  10: [
    {
      q: "Net profit is $50,000 on sales of $500,000. What is the net profit margin (as a %)?",
      type: "calc",
      answer: 10,
      tolerance: 0.1,
      explanation: "Net profit margin = 50,000 / 500,000 = 10%.",
    },
    {
      q: "Sales are $500,000 and total assets are $250,000. What is the total asset turnover (in times)?",
      type: "calc",
      answer: 2,
      tolerance: 0.05,
      explanation: "Asset turnover = Sales / Total assets = 500,000 / 250,000 = 2.0 times.",
    },
    {
      q: "DuPont analysis: net profit margin 10%, asset turnover 2.0, equity multiplier 1.5. What is ROE?",
      options: ["30%", "12%", "20%", "15%"],
      answer: 0,
      difficulty: "hard",
      explanation: "ROE = margin × turnover × equity multiplier = 10% × 2.0 × 1.5 = 30%.",
    },
  ],
};
