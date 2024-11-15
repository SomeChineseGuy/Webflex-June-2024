import Button from "@/components/Button";
import Counter from "@/components/Counter";
import React from "react";

const Client = () => {
  return (
    <div>
      <h1>Welcome to the Client Page!</h1>
      <Button />
      <Counter />
    </div>
  )
};

export default Client;

/*
  app.get('/client', (req, res) => {
    res.render('client')  
  })
*/
