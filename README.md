# 📈 Stock Prices Ticker Challenge

Welcome! This challenge involves building a real-time stock ticker table, similar in style and functionality to Yahoo
Finance. Your goal is to display and update live stock quotes with dynamic styling and user interactions.

## 🧩 The Challenge

Build a stock price ticker that:

- Displays a table of stock quotes displaying: Symbol, Last Price, Change, % Change and Name)
- Streams live updates from a hardcoded list of symbols
- Supports adding/removing symbols dynamically
- Matches the look and feel of the provided design mockup (`quote-lookup.png`)

## ✅ Task List

Your implementation should include the following features:

1. **Display Stock Table**
    - Show a table with data for each symbol: `symbol`, `lastPrice`, `change`, and `changePct`
    - Notice the `name` on the second line. It overlaps over more than once column
    - Use the hardcoded list of stock symbols `initialSymbols` to begin with

2. **Real-Time Updates**
    - Update stock data in real time (using `StreamingClient`)
    - The primary key is the `symbol` field
    - 💡 _You can find the streamed data output in the browser console_
    - ⚠️ _The emitted updates are provided as deltas — fields that haven't changed are omitted_

3. **Styling**
    - Match the visual design shown in `quote-lookup.png`
    - Apply color coding:
        - 🔴 Red for negative `change` values
        - 🟢 Green for `change` values ≥ 0

4. **Symbol Subscription**
    - Add an input field to allow users to subscribe to additional stock symbols

5. **Unsubscribe Feature**
    - Add a delete button in each row to remove/unsubscribe from a symbol

## 🚀 Getting Started

To run the project locally:

```bash
npm install
npm start
```

## 🖼 Design Reference

Please refer to the `quote-lookup.png` mockup included in the project directory for visual and UI guidance.
