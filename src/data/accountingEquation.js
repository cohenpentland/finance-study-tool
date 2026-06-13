// AUTO-EXTRACTED from the original minified bundle, then hand-editable.
export default [
  {
    "label": "Owner invests $15,000 cash",
    "cash": 15000,
    "equip": 0,
    "supplies": 0,
    "ap": 0,
    "equity": 15000,
    "note": "Starting capital contribution → Assets ↑, Equity ↑"
  },
  {
    "label": "T1: Buy equipment $5,000 cash",
    "cash": 10000,
    "equip": 5000,
    "supplies": 0,
    "ap": 0,
    "equity": 15000,
    "note": "Asset swap — Cash ↓, Equipment ↑. Total assets unchanged."
  },
  {
    "label": "T2: Buy supplies $2,000 on credit",
    "cash": 10000,
    "equip": 5000,
    "supplies": 2000,
    "ap": 2000,
    "equity": 15000,
    "note": "Assets ↑ (supplies), Liabilities ↑ (accounts payable)"
  },
  {
    "label": "T3: Cash sales $3,000",
    "cash": 13000,
    "equip": 5000,
    "supplies": 2000,
    "ap": 2000,
    "equity": 18000,
    "note": "Revenue earned → Assets ↑ (cash), Equity ↑ (via revenue)"
  },
  {
    "label": "T4: Repay $500 of loan",
    "cash": 12500,
    "equip": 5000,
    "supplies": 2000,
    "ap": 1500,
    "equity": 18000,
    "note": "Assets ↓ (cash), Liabilities ↓ (accounts payable). Equity unchanged."
  },
  {
    "label": "T5: Owner withdraws $1,000",
    "cash": 11500,
    "equip": 5000,
    "supplies": 2000,
    "ap": 1500,
    "equity": 17000,
    "note": "Drawings → Assets ↓ (cash), Equity ↓. Not an expense!"
  }
];
