import ExpenseDate from './ExpenseDate';
import BaseCard from '../UI/BaseCard';

import './ExpenseItem.css';

const ExpenseItem = (props) => {

		//react jsx code here
		return (
			<li>
				<BaseCard className="expense-item">
					<ExpenseDate expenseDate={props.expenseDate} />
					<div className="expense-item__description">
						{/* 
							we can use the Opening and closing {} 
							the special thing about these {} between them you can run basic
							js expressions i.e 1+ 1 the result of this expression will be displayed
						*/}

						{/*we then pass the first element in the useState i.e expesneTitle to output the new state changed by the updating function i.e setExpenseTitle */}
						<h2>{props.expenseTitle}</h2>
					</div>
					<div className="expense-item__price">${props.expenseAmount}</div>
					{/*onclick wants a function event handler props want a function as a value
						remeber you don't execute your event handlers here. you just point at it.
					*/}
				</BaseCard>
			</li>
	)
}

export default ExpenseItem;



/*
	state in react: 
	we need to import  a named import to tell React to re-run what we need to change
	useState allows us to define values as state where changes to the values should
	reflect in the component function being called again

	useState() can't be called outside the function or in nested function 
	but directly inside component functions







		//just js not react related typically we do have js code in our components
	// could be any code i.e to fetch data from a db or user input to validation

		//use state returns an array the first value is the variable itself.
		//the second is the updating function the order MATTERS names do not

		//this expenseItem function is called 4 times when we call ExpenseItem
		//each time its called a new seperate state is created maanaged independity by React
		// const [expenseTitle, setExpenseTitle] = useState(props.expenseTitle);

		// const changeTitleHandler = () => {
			//we assign a new value by calling the state updatefunction and pass
			//the new value as argument;

			//we call useState to tell React to manage state for us we dont see the variable
			//we don't assign a new value for the updating function. #
			// setExpenseTitle('Updated')
		//}











	*/