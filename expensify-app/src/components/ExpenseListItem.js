import React from "react";
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, description, amount, createAt, id }) => (
  <div>

    <h3>Description: {description}</h3>
    <p>Amount: {amount} Created: {createAt}</p>
    <button onClick={() => {
      dispatch(removeExpense( {id} ))
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);