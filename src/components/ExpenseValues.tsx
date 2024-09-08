import { useState } from 'react'
import { ExpenseListType } from '../App';

interface IProps {
  MyExpenseList : ExpenseListType[],
  userBudget: number
}

export function ExpenseValues({ MyExpenseList, userBudget }: IProps){

      let TotalExpensesValues = 0;
      let TotalBudget = userBudget;
      {MyExpenseList.map((expense) => 
            {
                  TotalExpensesValues = TotalExpensesValues + expense.cost
                  TotalBudget = TotalBudget - expense.cost
            })
      }

      return (
      <>
            <div>Total Of Expenses: {TotalExpensesValues} </div>
            <div>buget remaining: {TotalBudget} </div>
      </>
  )
}

