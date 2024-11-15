"use client"

import React, { useRef } from "react";
import axios from "axios";

const Form = () => {

  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    axios.post('/api/users', {user:inputRef.current.value}).then(res => {
      console.log(res);
    })
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text"  ref={inputRef} />
        <button>Submit!!</button>
      </form>
    </div>
  )
};

export default Form;
