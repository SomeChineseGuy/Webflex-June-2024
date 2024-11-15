// "use client"

import React from "react";
import axios from "axios";
import Form from "@/components/Form";

const PostRequest = () => {
  // const [fact, setfact ] = useState("")
  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/users').then((res) => {
  //     setfact(res.data.message)
  //   })
  // }, [])

  return (
    <div>
      <h1>Post Request</h1>
      {/* <h2>{fact}</h2> */}
      <Form />
    </div>
  )
};

export default PostRequest;
