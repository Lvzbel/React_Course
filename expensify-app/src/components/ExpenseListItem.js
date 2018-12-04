import React from "react";

const ExpenseListItem = ({ description, amount, createAt }) => (
  <div>
    <h3>Description: {description}</h3>
    <p>Amount: {amount} Created: {createAt}</p>
  </div>
);

export default ExpenseListItem;
