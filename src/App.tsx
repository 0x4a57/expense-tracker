import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AddExpense } from  './components/AddExpense'
import { ExpenseList } from './components/ExpenseList'
import { ExpenseValues } from './components/ExpenseValues'
import { SetBudget } from './components/setBudget'
import './App.css'


export interface ExpenseListType {
  id: number,
  name: string,
  cost: number
}

export function App() {
   
  const [expenses, setExpense] = useState([{id: 0, name: '', cost: 0}])
  const [userBudget, setBudget] = useState(0);
  const [error, setError] = useState('');
  const maxExpenses = 5;

  function addToExpenseList(userCreatedExpense: ExpenseListType){
    if(expenses.length <= maxExpenses){
      setError('');
      setExpense(prevState => [...prevState, {id: prevState.length + userCreatedExpense.id , name: userCreatedExpense.name, cost: userCreatedExpense.cost}]);
    } else {
      setError('Maximum expenses added to the list');
    }
  }

  function removeFromExpenseList(id:number) {
    const index = expenses.findIndex(item => item.id === id);
    if (index !== -1) {
      const newExpensesArray = [...expenses.slice(0, index), ...expenses.slice(index + 1)];
      setExpense(newExpensesArray);
    }
  }

  function updateBudget(userBudget: number){
    setBudget(userBudget)
  }


  return (
    <>

      <SetBudget updateBudget={updateBudget} />

      <AddExpense addToExpenseList={addToExpenseList} userBudget={userBudget} />

      {error && <p>{error}</p>}

      <ExpenseList MyExpenseList={expenses.slice(1)} removeFromExpenseList={removeFromExpenseList} />

      <ExpenseValues MyExpenseList={expenses.slice(1)} userBudget={userBudget} />
    </>
  )

}


