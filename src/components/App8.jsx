import React from 'react'
import{useState} from 'react'
export default function App8() {
    const [count,setCount] = useState(0);
    const increment = () =>{
        setCount(count + 1);
    }; 
    const decrement = () =>{
        setCount(count - 1);
    }; 
  return (
    <><div>App8</div>
    <h2> useState Revision</h2>
    <p>
        <button onClick={decrement}>-</button> <h3>{count}</h3><button onClick={increment}>+</button> 
    </p>

    </>
  )
}
