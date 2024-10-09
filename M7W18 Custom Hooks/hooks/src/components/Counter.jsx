import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const {counter, increment, decrement} = useCounter(100);

  return (
    <div>
      <h1>Counter - {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
};

export default Counter;
