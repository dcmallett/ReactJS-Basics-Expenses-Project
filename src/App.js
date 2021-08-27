import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  //normal js code
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    //JSX Reactcode
    <div>
      <NewExpense />
      <Expenses expenseItems={expenses} />
    </div>
  );
}

export default App;

















//var managed in app
//App />  //GoalItem = "finish"

//<CourseGoalItem />
//this should output the course goal item dynamically
//<li>goalItem</li>


//pass data to the custom component by adding an attribute
//pass this into the standalone component in app js.
//<CourseGoalItem text={goalItem} />

//we then use props to get that attribute and call it in the correct component
//<li>{props.text}</li>