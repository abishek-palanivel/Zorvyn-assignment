# Finance Dashboard UI

A visually stunning, zero-dependency custom-styled React finance dashboard designed for the frontend developer assignment evaluation.

## Links
- **Live Demo:** [https://zorvyn-finance-dashboard.netlify.app/](https://zorvyn-finance-dashboard.netlify.app/)
- **GitHub Repository:** [https://github.com/abishek-palanivel/Zorvyn-assignment](https://github.com/abishek-palanivel/Zorvyn-assignment)

## Features
- **Dashboard Overview:** Displays Real-time calculated balances, income, expenses.
- **Transactions Management:** View lists, filter by category, sort by timestamp.
- **Role-Based Access Control:** Switch between `VIEWER` and `ADMIN`. Admins can add and delete transactions.
- **Visual Insights:** Responsive, horizontally scaled progress bars visualizing expenses breakdown dynamically.
- **State Management:** Handled efficiently using React Context API.
- **Aesthetic UI:** 100% custom CSS utilizing CSS Variables, Light/Dark Modes, clean flex layouts, and glass-like components. Does not rely on UI libraries, maintaining complete control.

## Stack
- Vite
- React (Hooks, Context)
- Vanilla CSS 

## How to Run
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173/` in your browser.

## Architecture
- `src/styles/global.css`: CSS Variables and simple utility classes.
- `src/store/FinanceContext.jsx`: Provides the global data store.
- `src/components/`: Modular reusable UI widgets like Cards and Tables.
- `src/layout/`: Holds Topbar and Sidebar constructs.

This application is meant to showcase how custom styles can look crisp, professional, and very adaptable while managing local states elegantly without excess overhead.
