import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !category) return;
    addExpense({ name, amount: parseFloat(amount), category });
    setName("");
    setAmount("");
    setCategory("");
  };

  return (
    <form className="p-2 border rounded" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Expense Name</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary w-25">Add Expense</button>
      </div>
      </form>
  );
};

export default ExpenseForm;
