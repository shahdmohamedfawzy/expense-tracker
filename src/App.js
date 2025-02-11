import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const filteredExpenses = filterCategory
    ? expenses.filter((expense) => expense.category === filterCategory)
    : expenses;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Expense Tracker</h2>

      <ExpenseForm addExpense={addExpense} />

      <div className="mt-3">
        <label className="form-label">Filter by Category</label>
        <select
          className="form-select"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;
