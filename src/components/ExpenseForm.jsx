import React, { useEffect, useState } from "react";

const initialExpense = {
  description: "",
  amount: "",
  category: "",
  date: "",
};

const ExpenseForm = ({ isEditing, onAddExpense }) => {
  const [expense, setExpense] = useState(initialExpense);

  useEffect(() => {
    if (isEditing) {
      setExpense({
        description: isEditing.description,
        amount: isEditing.amount,
        category: isEditing.category,
        date: isEditing.date,
      });
    }
  }, [isEditing]);

  const handleExpense = (e) => {
    e.preventDefault();

    if (isEditing) {
      onAddExpense(isEditing.id, expense);
    } else {
      onAddExpense(expense);
    }

    setExpense(initialExpense);
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-slate-800 dark:text-gray-100 shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-5 text-center">
        {isEditing ? "Edit Expense" : "Add Expense"}
      </h2>

      <form onSubmit={handleExpense} className="space-y-4">
        <input
          type="text"
          placeholder="Expense description (eg. Dinner)"
          required
          value={expense.description}
          onChange={(e) =>
            setExpense({ ...expense, description: e.target.value })
          }
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
        />

        <input
          type="number"
          placeholder="Amount (₹)"
          required
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
        />

        <select
          required
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
          className="w-full rounded-lg border border-gray-300 dark:bg-slate-800 dark:text-gray-100 px-3 py-2 text-sm bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Food">Food</option>
          <option value="Medicine">Medicine</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>

        <input
          type="date"
          required
          value={expense.date}
          onChange={(e) => setExpense({ ...expense, date: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          {isEditing ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
