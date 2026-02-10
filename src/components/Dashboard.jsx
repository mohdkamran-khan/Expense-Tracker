import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

const Dashboard = ({ expense }) => {
  const totalCategory = expense.reduce((total, e) => {
    const category = e.category || "Others";
    total[category] = (total[category] || 0) + Number(e.amount);
    return total;
  }, {});

  const pieChartsData = Object.entries(totalCategory).map(([name, value]) => ({
    name,
    value,
  }));

  const colors = [
    "#6366F1",
    "#22C55E",
    "#F97316",
    "#EF4444",
    "#0EA5E9",
    "#A855F7",
    "#14B8A6",
  ];

  const monthlyData = Object.values(
    expense.reduce((acc, e) => {
      const month = new Date(e.date).toLocaleString("default", {
        month: "short",
      });

      acc[month] = acc[month] || { month, total: 0 };
      acc[month].total += Number(e.amount);
      return acc;
    }, {}),
  );

  const totalAmount = expense.reduce((sum, e) => sum + Number(e.amount), 0);

  const highestExpense =
    expense.length > 0 ? Math.max(...expense.map((e) => Number(e.amount))) : 0;

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Expense Dashboard
      </h1>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <StatCard
          title="Total Expenses"
          value={expense.length}
          color="text-orange-500"
        />
        <StatCard
          title="Total Amount"
          value={`₹${totalAmount}`}
          color="text-indigo-600 dark:text-indigo-500"
        />
        <StatCard
          title="Highest Expense"
          value={`₹${highestExpense}`}
          color="text-red-500"
        />
      </div>

      {expense.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <ChartCard title="Category Breakdown">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartsData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                >
                  {pieChartsData.map((_, index) => (
                    <Cell key={index} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`₹${value}`, `${name}`]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Monthly Chart */}
          <ChartCard title="Monthly Spending">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" tick={{ fill: "#9098a6" }} />

                <YAxis
                  tickFormatter={(value) => `₹${value}`}
                  tick={{ fill: "#9CA3AF" }}
                />

                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                  formatter={(value) => [`₹${value}`, "Total"]}
                />

                <Bar dataKey="total" fill="#5a5df1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      )}
    </div>
  );
};

/* ---------- Small Reusable Components ---------- */

const StatCard = ({ title, value, color = "text-gray-800" }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5">
    <p className="text-gray-500 dark:text-gray-300 text-sm">{title}</p>
    <h2 className={`text-2xl font-bold ${color}`}>{value}</h2>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
    <h2 className="text-lg font-semibold mb-4 dark:text-gray-100">{title}</h2>
    <p>{children}</p>
  </div>
);

const EmptyState = () => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-10 text-center text-gray-400">
    No expenses added yet.
  </div>
);

export default Dashboard;
