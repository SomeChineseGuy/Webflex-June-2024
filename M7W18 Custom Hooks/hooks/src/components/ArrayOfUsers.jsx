import React, { useState } from "react";
import useInput from "../hooks/useInput";
import useArray from "../hooks/useArray";

const ArrayOfUsers = () => {
  const {items, addItem, deleteItem} = useArray(['John', 'Ben', 'Kyle', 'Anthony'])
  const addUser = useInput();

  const handleSubmit = (e) => {
    e.preventDefault()
    const username = addUser.value;
    addItem(username)
  }

  return (
    <div>
      <h1>Users: </h1>
      {items.map((user, idx) => {
        return (
          <div key={idx} onClick={() => deleteItem(idx)}>
            <h2>{user}</h2>
          </div>
        )
      })}
      <form onSubmit={handleSubmit}>
        <input type="text" {...addUser} />
        <button>Add</button>
      </form>
    </div>
  )
};

export default ArrayOfUsers;
