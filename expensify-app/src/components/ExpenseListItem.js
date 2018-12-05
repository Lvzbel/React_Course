import React from "react";
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      Amount: {amount} Created: {createAt}
    </p>
  </div>
);

export default ExpenseListItem;
