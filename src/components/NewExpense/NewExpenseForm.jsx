import { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    //defualt when you listen to change change event on the input element
    //it will always be a string so we always use a string with our state. like below.
    const [enteredTitle, setEnteredTitle] =  useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
   
   const titleChangeHandler = (event) => {
        //here we are calling our updatingFunction i.e
        //setEnteredTitle and passing in event.target.value as the param.
        //to get the entered value provided by the user
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }


    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title:</label>
                    {/* onChange can trigger on every key stroke and use the same event on all input types */}
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount:</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date:</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm;