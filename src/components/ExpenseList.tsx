import { ExpenseListType } from '../App';

interface IProps {
  MyExpenseList : ExpenseListType[],
  removeFromExpenseList: (id: number) => any
}

export function ExpenseList({ MyExpenseList, removeFromExpenseList }: IProps){

  function handleClick(id:number) {
    removeFromExpenseList(id);
  }

  return (
    <>
      {console.log(MyExpenseList)}
      
        <ul>
          {MyExpenseList.map((expense, index) => {
            return (
                    <li key={index}>
                        {expense.name} - {expense.cost} <button onClick={() => handleClick(expense.id)}>x</button> 
                    </li>
                );
            })
          }
        </ul>
      
   </>
  )
}

