import React from "react";

const ExpenseList = ({ expenses, updateExpense, deleteExpense }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-50">
        Expense History
      </h2>

      {expenses.length > 0 ? (
        <div className="space-y-4">
          {expenses.map((e) => (
            <div
              key={e.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              {/* Left Side */}
              <div className="space-y-1">
                <p className="font-semibold text-gray-800 dark:text-gray-300">
                  {e.description}
                </p>

                <div className="flex gap-3 text-sm text-gray-500">
                  <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-md">
                    {e.category}
                  </span>

                  <span className="dark:text-gray-300">{e.date}</span>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4 mt-3 sm:mt-0">
                <p className="text-lg font-bold text-indigo-600 dark:text-indigo-500">₹{e.amount}</p>

                <button
                  onClick={() => updateExpense(e)}
                  className="px-3 py-1.5 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-medium transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteExpense(e.id)}
                  className="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center bg-white shadow-md rounded-xl p-10 text-gray-500 dark:bg-gray-800 dark:text-white">
          No expenses yet. Start tracking now 🙂
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
