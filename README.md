# 📊 Expense Tracker

A modern Expense Tracker built with React, Vite, Tailwind CSS & Recharts — designed to help users track their spending easily with features like dark/light mode, search & category filters, analytics charts, and local storage persistence.

## 🔗 Live Demo: https://mohdkamran-khan.github.io/Expense-Tracker/

## 📌 Features

- ✨ Dark & Light Mode Toggle — User-friendly theme switching
- 🔍 Search Bar — Quickly find expenses by description
- 📂 Category Filter — Filter expenses by category
- 📉 Monthly Analytics Chart — Visualize spending trends
- 💰 Budget vs Actual Overview — At-a-glance financial insights
- 📄 Export / Download Report — Download expense summary (PDF/CSV)
- 👍 Toast Notifications — Instant feedback on actions like add/update/delete
- 📦 Animations — Smooth UI transitions improve user experience
- 🗃️ Local Storage Persistence — Keeps data even after refresh

## 🧱 Tech Stack

This project uses:

- ⚛️ React for UI

- 🚀 Vite for fast development experience

- 🖤 Tailwind CSS for utility-first styling

- 📊 Recharts for data visualization

- 🏠 Local Storage for persistent data

## 🗂️ Screenshots
<img width="2880" height="2334" alt="Expense-Tracker" src="https://github.com/user-attachments/assets/ca2e1125-416d-4d78-b21c-19c8c09df02e" />
<img width="2880" height="1934" alt="Expense-Tracker_Filter" src="https://github.com/user-attachments/assets/7dfe51a9-465b-45ca-959a-e03926037577" />

## 📁 Project Structure
```pgsql
expense-tracker/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Expense-Tracker.git
cd Expense-Tracker
```

### 2️⃣ Install Dependencies

```bash
npm install
```
### 4️⃣ Run Locally

```bash
npm run dev
```

## 📦 Deployment

- GitHub Pages

- Update `vite.config.js`:
```bash
export default defineConfig({
  base: "/Expense-Tracker/",
  plugins: [react(), tailwindcss()],
})
```

- Add to `package.json`:
```bash
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/Expense-Tracker",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

- Deploy:
```bash
npm install gh-pages --save-dev
npm run deploy
```

## 🎯 Usage

- Click Add Expense to log a new entry

- Use search and category filter to refine the list

- View your spending patterns in the dashboard charts

- Toggle between dark/light mode

- Export a report for sharing or bookkeeping

## 📧 Contributing

Contributions are welcome. If you want to contribute:

1. Fork the repo
2. Create a feature branch `git checkout -b feature/your-feature`
3. Commit your changes `git commit -m "feat: add ..."`
4. Push and open a pull request

## 📄 License

```
This project is open-source and available under the [MIT License]
```

## 👨🏻‍💻 Author

Mohd Kamran Khan | You can reach me at: [mohdkamrankhan.dev@gmail.com]

🌐 **Portfolio:** [mohdkamran-khan.github.io/KAMRAN-portfolio](https://mohdkamran-khan.github.io/KAMRAN-portfolio/)
