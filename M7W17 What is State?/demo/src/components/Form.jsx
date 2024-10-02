import React, { useState } from "react";
import './Form.css'
import axios from "axios";

const Form = () => {
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError ] = useState(false);

  const handleChange = (e) => {
    setUsename(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.length < 6) {
      setPasswordError(true)
      return;
    }
    setPasswordError(false)
    if(username.length < 6) {
      setUsernameError(true)
      return
    }

    setUsernameError(false)

    
  }
  
  return (
    <div>
      <h1>Form!</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" value={username} onChange={handleChange} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value) } />
        <button >Submit!</button>
      </form>
      {passwordError && <h3 className="alert-message">Your Password needs to be OVER 6 characters❌</h3>}
      {usernameError &&  <h3 className="alert-message">Your Username needs to be OVER 6 Characters❌</h3> }
    </div>
  )
};

export default Form;
