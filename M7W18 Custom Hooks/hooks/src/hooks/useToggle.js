import { useState } from "react"


// it's just a function
const useToggle = () => {
  const [toggle, setToggle ] = useState(true)
  const handleClick = () => {
    setToggle(!toggle)
  }

  // return {
  //   toggle,
  //   handleClick
  // }
  return [toggle, handleClick];
}

export default useToggle;

/*
  return {
    value,
    setValue
  }

  const {value: counter, setValue: setCounter}
  const [counter, setCounter] = useState(0)
*/