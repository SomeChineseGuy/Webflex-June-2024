import { useState } from "react";

const useCounter = (initalNum) => {
  const [counter, setCounter ] = useState(initalNum);

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const resetCounter = () => {
    setCounter(initalNum)
  }

  return {
    counter,
    increment,
    decrement,
    resetCounter
  }
}


export default useCounter;