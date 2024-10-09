import React, { useState } from "react";
import useInput from "../hooks/useInput";

const Form = () => {
  // const [input, setInput ] = useState("")
  // const [password, setPassword ] = useState("")

  // const handleChange = (e) => {
  //   setInput(e.target.value)
  // }
  
  const emailInput = useInput();
  const passwordInput = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailInput.value, passwordInput.value);
  }

  return (
    <div>
      <h1>Form!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        {/* <input type="text" value={value} onChange={onChange} /> */}
        <input type="text" {...emailInput} />
        <label htmlFor="">Password</label>
        <input type="text" {...passwordInput} />
        <button>Submit</button>
      </form>

    </div>
  )
};

export default Form;
