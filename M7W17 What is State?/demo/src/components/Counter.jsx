import axios from "axios";
import React, {useEffect, useState} from "react";

const Counter = () => {
  // Hook useState or State Hook
  const [counter, setCounter] = useState(30);
  const [dogImage, setDogImage ] = useState("");

  const increment = () => {
    setCounter(counter + 1)
    axios.get('https://dog.ceo/api/breeds/image/random').then(({data}) => {
      setDogImage(data.message)
    })
    
  }

  return (
    <div>
      <h1 onClick={increment}>Counter</h1>
      <p >Counter: {counter}</p>
  
      <button onClick={increment} className="increment">Increment</button>
      <img src={dogImage} alt="" />    
    </div>
  )
};

export default Counter;
