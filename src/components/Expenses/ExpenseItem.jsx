import ExpenseDate from './ExpenseDate';
import BaseCard from '../UI/BaseCard';

import './ExpenseItem.css';

const ExpenseItem = (props) => {

	//just js not react related typically we do have js code in our components
	// could be any code i.e to fetch data from a db or user input to validation

		//react jsx code here
		return (
			<BaseCard className="expense-item">
				<ExpenseDate expenseDate={props.expenseDate} />
				<div className="expense-item__description">
					{/* 
						we can use the Opening and closing {} 
					 	the special thing about these {} between them you can run basic
					 	js expressions i.e 1+ 1 the result of this expression will be displayed
					*/}
					<h2>{props.expenseTitle}</h2>
				</div>
				<div className="expense-item__price">${props.expenseAmount}</div>
			</BaseCard>
	)
}

export default ExpenseItem;