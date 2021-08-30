import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = (props) => {

    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">
            found no expenses
        </h2>
    }


    return (
        <ul className="expenses-list">
            {props.expenses.map((expense) => (
                <ExpenseItem 
                    key={expense.id}
                    expenseTitle={expense.title}
                    expenseAmount={expense.amount}
                    expenseDate={expense.date}
                />
            ))}
        </ul>
    )
}

export default ExpensesList;