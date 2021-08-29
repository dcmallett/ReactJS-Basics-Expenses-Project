import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

import BaseCard from '../UI/BaseCard';

import './Expenses.css';


const Expenses = (props) => {

    const [filterYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <BaseCard className="expenses">
            <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
           {/* the curly braces {} used to execute js code i.e expressions 
            we are using the map array method. 
            creates a new array based on another array and transforms every element in the original array.
           
            so we want to ourput our ExpenseItem jsx element in this conditional
            then we use the function name "expense" to output our data i.e expense.Title expense.amount
           
           */}

           {props.ExpenseItem.map((expense) => (
               <ExpenseItem 
                key={expense.id}
                expesneTitle={expense.title}
                expenseAmount={expense.amount}
                expenseDate={expense.date}
               />
            ))}


{/*            
            //so here we are passing in attributes to our ExpenseItem Component
            //the property value on the left i.e expenseTitle Can be anything

            //next we use the name of our value we want to send i.e our expenses array
            //becuase its an array we add what part of the array i.e the first index of the array (0)

            // then the property name of the data we want to send i.e title or amount */}
        </BaseCard>
    )
}

export default Expenses;