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

    const submitFormHandler = (event) => {
        //prevents the browser default on form submit
        event.preventDefault();
        const expenseData = {
            //left properties names can be anything.
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        //so becuase we are using the value prop on the inputs as two way binding. 
        //we then call our propertiy names on that value field and then in our handler or where,
        //we need to reset the fields we re-call the state updatingfunctions. I.E setEnteredTItle and assign it to an empty string.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        console.log(expenseData);
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title:</label>
                    {/* onChange can trigger on every key stroke and use the same event on all input types 
                            two way binding: inputs we can pass a new value back into the input reset and change the input programatically
                            using the value attribute set internal value prop and set it a new value;
                    */}
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount:</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date:</label>
                    <input type="date" min="2019-01-01" value={enteredDate} max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm;









/**
 * whenever you depend on state, and you update the previous state
 * you should use an alternate updateState function i.e  
 * 
 * 
 * function syntax when your state depends on the previous state.
 *  setUserInput((prevState) => {
 *  return {...prevState, enteredTitle: event.target.value}
 * })
 */