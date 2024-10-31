import React, {useContext} from "react";
import CounterContext from "../../Context/CounterContext";

const Counter = () => {

  const {counter} = useContext(CounterContext)

  
  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  )
};

export default Counter;
