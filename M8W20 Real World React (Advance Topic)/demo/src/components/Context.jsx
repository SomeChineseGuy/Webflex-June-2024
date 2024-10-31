import React, { useState } from "react";
import Counter from "./context/Counter";
import Parent from "./context/Parent";
import CounterContext from "../Context/CounterContext";

const Context = () => {
  const [counter, setCounter ] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const values = {
    counter,
    increment,
    decrement,
    userName: 'joe'
  }

  return (
    <CounterContext.Provider value={values} >
      <div>
        <h1>This is the context hook!</h1>
        <Counter/>
        <Parent />
      </div>
    </CounterContext.Provider>
  )
};

export default Context;
