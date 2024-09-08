import { useState, useEffect } from 'react'

interface IProps {
      updateBudget : (arg0: number) => any
}

export function SetBudget({ updateBudget}: IProps){
 
      const [value, setValue] = useState(0); 

      
      useEffect(() => {
            updateBudget(value);
      }, [value]);

      return (
      <>
            <input name="budget" type="text" value={value} onChange={(e) => setValue(parseInt(e.target.value))}  />
      </>
      )
}

