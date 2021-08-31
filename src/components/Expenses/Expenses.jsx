import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import BaseCard from '../UI/BaseCard';

import './Expenses.css';


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenseItems.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
        <BaseCard className="expenses">
            <ExpenseFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler} 
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </BaseCard>
    )
}

export default Expenses;











































            /* && it returns the part after the and Oporator as a result of the check if the first condition is met
                    it moves on to the part after the && oporator. and returns the value
            */
            /* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
            {filteredExpenses.length > 0 && */


           /* the curly braces {} used to execute js code i.e expressions 
            we are using the map array method. 
            creates a new array based on another array and transforms every element in the original array.
           
            so we want to ourput our ExpenseItem jsx element in this conditional
            then we use the function name "expense" to output our data i.e expense.Title expense.amount
           
           */




            /*            
            //so here we are passing in attributes to our ExpenseItem Component
            //the property value on the left i.e expenseTitle Can be anything

            //next we use the name of our value we want to send i.e our expenses array
            //becuase its an array we add what part of the array i.e the first index of the array (0)

            // then the property name of the data we want to send i.e title or amount */