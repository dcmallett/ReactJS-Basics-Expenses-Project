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
            <ExpenseItem 
            //so here we are passing in attributes to our ExpenseItem Component
            //the property value on the left i.e expenseTitle Can be anything

            //next we use the name of our value we want to send i.e our expenses array
            //becuase its an array we add what part of the array i.e the first index of the array (0)

            // then the property name of the data we want to send i.e title or amount
                expenseTitle={props.expenseItems[0].title} 
                expenseAmount={props.expenseItems[0].amount}
                expenseDate={props.expenseItems[0].date}
            />
            <ExpenseItem 
                expenseTitle={props.expenseItems[1].title} 
                expenseAmount={props.expenseItems[1].amount}
                expenseDate={props.expenseItems[1].date}
            />
            <ExpenseItem 
                expenseTitle={props.expenseItems[2].title} 
                expenseAmount={props.expenseItems[2].amount}
                expenseDate={props.expenseItems[2].date}
            />
            <ExpenseItem 
                expenseTitle={props.expenseItems[3].title} 
                expenseAmount={props.expenseItems[3].amount}
                expenseDate={props.expenseItems[3].date}
            />
        </BaseCard>
    )
}

export default Expenses;