import { FormEvent, useState } from 'react'
import {ExpenseListType} from '../App'

interface IProps {
  addToExpenseList : (arg0: ExpenseListType) => any
  userBudget: number
}

export function AddExpense({ addToExpenseList, userBudget }: IProps){


  const [inputValue, setinputValue] = useState("");
  const [inputCostValue, setinputCostValue] = useState(0);
  const [error, setError] = useState('');

 
  function handleSubmit(event : React.FormEvent<HTMLFormElement>, ) {
    event.preventDefault();
    const userCreatedExpense = {
      id: 1, name: inputValue, cost: inputCostValue
    }
    if(inputCostValue > userBudget){
      setError("Not Enough budget");
    } 
    else {
      setError('');
      addToExpenseList(userCreatedExpense);
    }
    
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input name="Expense" type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)}  />
        <input name="Cost" type="number" value={inputCostValue}  onChange={(e) => setinputCostValue(parseInt(e.target.value))} required />
        {error && <p>{error}</p>}
        <button type="submit">Add Expense</button>
     </form>
    </>
  )
}

