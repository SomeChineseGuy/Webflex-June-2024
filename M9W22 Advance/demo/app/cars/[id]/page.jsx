import React from "react";

const CarsPage = async ({params}) => {
  const {id} = await params
  return (
    <div>
      <h1>All the cars page {id}</h1>
    </div>
  )
};

export default CarsPage;
/*
  app.get('/urls/:id', (req, res) => {
    req.params.id
  })

*/

