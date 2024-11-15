/*
  app.post('/api/users', (req, res) => {
    res.send({message: Hello})
  })
*/

import { NextResponse } from "next/server";
import axios from "axios";


export const GET = async (req) => {
  

  // const data = db.query(`SELECT * FROM USERS;`)
  const {data} = await axios.get('https://catfact.ninja/fact')
  console.log(data);
  return NextResponse.json({message: data.fact})
}

export const PATCH = (req) => {
  console.log(req)
}

export const PUT = (req) => {
  console.log(req)
  return NextResponse.json({message: 'Put Request'})
}

export const POST = async (req) => {
  console.log("FIREEEEEEEEEE!")
  const data = await req.json();
  console.log(data.user);
  return NextResponse.json({message: 'hello'})
}