import { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            //we create an obj copy the enteredExpenseData (argument)
            //which we expect it to be the object in the NewExpenseForm component i.e the expenseData obj
            //pull out all key value pairs and add them to this new obj
            //then add a new key the ID key.
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseData(expenseData);
        setIsEditing(false);
        // console.log(expenseData);
    }


    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    return (
        <div className="new-expense">

            {!isEditing && (
                <button onClick={startEditingHandler}>Add new expense</button>
            )}
            
            {isEditing && (
                 <NewExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler} 
                    onCancel={stopEditingHandler}
                />
            )}
            {/*
                here we are trying to pass our "expenseData" to our app component
                so we need to go up. first we create a prop in our NewExpesne.jsx on the NewExpenseForm component.
                i.e onSaveExpenseData making it clear that the value for the prop should be a function. that should be triggered when
                somthing happnes on this component. i.e when data is saved.
                on to follow the convention that should be called in the component
                        then we pass the newly created saveExpenseDataHandler as a pointer to our prop onSaveExpenseData.
            */}
        </div>
    )
}   


export default NewExpense;