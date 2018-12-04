import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters.js";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

// This function will console.log every time it there is  changed made
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visible)

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

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));

// setTimeout(() => {
//   store.dispatch(setTextFilter('rent'));
// }, 3000)

ReactDOM.render(jsx, document.querySelector("#app"));
