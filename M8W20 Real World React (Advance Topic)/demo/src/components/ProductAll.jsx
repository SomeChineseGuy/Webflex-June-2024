import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductAll = () => {
  const params = useParams();
  const navigate = useNavigate();
  // req.params.id
  console.log(params);

  useEffect(() => {
    // setTimeout(() => {
    //   navigate('/admin')
    // }, 3000)
    
  })

  const handleClick = () => {
    navigate('/admin')
  }

  return (
    <div>
      <h1 onClick={handleClick}>This is everything that works after the /product</h1>
      <h2>You are at /product/{params.id}</h2>
    </div>
  )
};

export default ProductAll;
