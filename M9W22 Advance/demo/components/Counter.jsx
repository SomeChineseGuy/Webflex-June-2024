"use client"

import React, {useState} from "react";

const Counter = () => {
  const [counter, setcounter ] = useState(0)

  const increment = () => {
    setcounter(counter + 1)
  }

  const decrement = () => {
    setcounter(counter - 1)
  }
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}> Decrement</button>
      
    </div>
  )
};

export default Counter;
