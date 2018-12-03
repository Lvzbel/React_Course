import React from 'react';
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
// Chanllenge imports
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 400,
    createAt: -21000
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: "Gas bill",
    amount: 400,
    createAt: -21000
  })
);

store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

ReactDOM.render(<AppRouter />, document.querySelector("#app"));
