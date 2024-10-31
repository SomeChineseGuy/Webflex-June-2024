import React, { useRef, useState } from "react";

const Ref = () => {
  const [value, setValue ] = useState("");
  const inputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    console.log(inputRef.current.value);
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <h1>Ref Component</h1>
      <form action="/" onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <input type="text" ref={inputRef} />
        <button type="submit">Click me!</button>
      </form>
    </div>
  )
};

export default Ref;
