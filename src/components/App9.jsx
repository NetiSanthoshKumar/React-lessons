import React from 'react'
import{useState} from 'react'
export default function App9() {
    const [count,setCount] = useState(10);
    const increment = () =>{
        setCount(count + 1);
    };
    const decrement = () =>{
        setCount(count - 1);
    };
  return (
    <div>
    <div>App9</div>
    <h2> useState Revision</h2>
    <p>
      <button onClick={decrement}>-</button>  {count}  <button onClick={increment}>+</button> 
    </p>

    </div>
  )
}
