import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense}/>) 
            )
        }
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