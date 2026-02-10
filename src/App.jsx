import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/Dashboard";
import { BadgeIndianRupee, Moon, Search, Sun } from "lucide-react";

function App() {
  const [expense, setExpense] = useLocalStorage("expense", []);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [isEditing, setIsEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  /* ---------------- ADD / UPDATE ---------------- */

  function onAddExpense(newExpense) {
    setExpense([...expense, { ...newExpense, id: crypto.randomUUID() }]);
    setShowForm(false);
  }

  function updateExpense(id, updatedExpense) {
    setExpense(
      expense.map((e) => (e.id === id ? { ...updatedExpense, id } : e)),
    );
    setIsEditing(null);
    setShowForm(false);
  }

  function startEdit(exp) {
    setIsEditing(exp);
    setShowForm(true);
  }

  function deleteExpense(id) {
    setExpense(expense.filter((e) => e.id !== id));
  }

  /* ---------------- FILTERS ---------------- */

  const categories = ["All", ...new Set(expense.map((e) => e.category))];

  const filteredExpenses = expense.filter((e) => {
    const matchesSearch = e.description
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || e.category === category;

    return matchesSearch && matchesCategory;
  });

  /* ---------------- UI ---------------- */

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-300 dark:border-gray-700">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-3">
            <BadgeIndianRupee size={30} /> Expense Tracker
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition dark:text-gray-100"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>

            <button
              onClick={() => {
                setIsEditing(null);
                setShowForm(true);
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold shadow"
            >
              + Add Expense
            </button>
          </div>
        </nav>

        {/* SEARCH + FILTER */}
        <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full flex items-center">
            <Search
              size={22}
              className="absolute left-4 text-gray-500 pointer-events-none z-10"
            />
            <input
              type="text"
              placeholder="Search expenses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 pl-12 pr-10 rounded-lg border border-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Dashboard expense={expense} />

          {/* MODAL */}
          {showForm && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md relative">
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute right-5 top-4 text-2xl text-gray-400 hover:text-black dark:hover:text-white"
                >
                  ✕
                </button>

                <ExpenseForm
                  onAddExpense={isEditing ? updateExpense : onAddExpense}
                  isEditing={isEditing}
                />
              </div>
            </div>
          )}

          <ExpenseList
            expenses={filteredExpenses}
            deleteExpense={deleteExpense}
            updateExpense={startEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
