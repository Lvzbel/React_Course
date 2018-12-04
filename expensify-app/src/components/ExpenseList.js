import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        { props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense}/>) }
    </div>
);

// The reason of the double parentesis is because connect returns a functions that needs to be called again
// const ConnectedExpenseList = connect((state)=> {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);
// export default ConnectedExpenseList;

// This pattern is what is usually used in production

const mapStateToProps = (state)=> {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);