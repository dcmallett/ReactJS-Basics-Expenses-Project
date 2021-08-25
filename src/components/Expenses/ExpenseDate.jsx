import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const expenseDateMonth = props.expenseDate.toLocaleString('en-GB', { month: 'long' });
    const expenseDateYear = props.expenseDate.getFullYear();
    const expenseDateDay = props.expenseDate.toLocaleString('en-GB', { day: '2-digit' });
    
    return (
        <div className="expense-date">
        {/*we can set the toLocaleString we pass it two arguments where the first is the language i.e en-GB, the 2nd is 
                how that date should be formatted i.e month: 'long' so the long month i .e June, July December */}
            <div className="expense-date__month">{expenseDateMonth}</div>
            <div className="exepnse-date__year">{expenseDateYear}</div>
            <div className="expense-date__day">{expenseDateDay}</div>
        </div>
    )
}

export default ExpenseDate;