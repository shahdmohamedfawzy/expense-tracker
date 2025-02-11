import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ExpenseList = ({ expenses, deleteExpense }) => {
  useEffect(() => {
    if (window.bootstrap && window.bootstrap.Tooltip) {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltipTriggerList.forEach((tooltipEl) => new window.bootstrap.Tooltip(tooltipEl));
    }
  }, [expenses]);

  const totalAmount = expenses.reduce((acc, exp) => acc + exp.amount, 0);

  return (
    <div className="mt-4">
      <h5 className="text-center">Total: ${totalAmount.toFixed(2)}</h5>

      {/* Scrollable Expense List */}
      <div className="expense-list-container">
        <ul className="list-group">
          {expenses.length > 0 ? (
            expenses.map((expense, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  {expense.name} - ${expense.amount} ({expense.category})
                </span>
                <i
                  className="bi bi-trash text-danger"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Delete"
                  onClick={() => deleteExpense(index)}
                ></i>
              </li>
            ))
          ) : (
            <li className="list-group-item text-center">No expenses added</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseList;
