import React from "react";
import axios from "axios";

const getDogData = async () => {
  const data = await axios.get('https://dog.ceo/api/breeds/image/random')
  return data
}




const ServerRendering = async () => {
  const dogData = await getDogData();
  console.log(dogData.data);
  return (
    <div>
      <h1>Rendering</h1>
      <img src={dogData.data.message} alt="" />
    </div>
  )
};

export default ServerRendering;












/*
  app.get('/server-r', (req, res) => {
    const data = db.quer(`select * FROM users;`)


    res.render('client', templateVars)  
  })
*/
