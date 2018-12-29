import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";

// Refactor EditExpensepage to be a class based component
// Setup mapDispatchToProps editExpense and removeExpense

// should render EditExpensePage
// snapshot

// should handle editExpense
// spies

// should handle removeExpense
// spies

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.editExpense(expense, expense)
    this.props.history.push("/");
  };

  onClick = () => {
    this.props.removeExpense(expense.id)
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => ({
  editExpense: (expense => dispatch(editExpense(id, expense))),
  removeExpense: (expense => dispatch(removeExpense({ id: expense.id })))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
