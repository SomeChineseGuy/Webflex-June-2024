import React, { useEffect, useState } from "react";
import styled from 'styled-components'

const Styled = () => {
  const [position, setPosition ] = useState({
    x: 0,
    y:0
  })

  const PTag = styled.p`
    color: red;
    font-size: ${position.y / 5}px;
    color: rgb(0, ${position.x / 4}, ${position.y / 4});
    background: rgb(${position.x / 4}, ${position.y / 4}, 0);
    border: 10px dotted rgb(${position.x / 4},0, ${position.y / 4});
  `
  const message = position.y < 550 ? 'And Dr. Dre said...' : "Nothing you idiots! Dr. Dre is dead, he's locked in my basement! ";
  const mouseHandle = (event) => {
    setPosition({
      x: event.x,
      y: event.y
    })
  }

  useEffect(() => {
    document.addEventListener('mousemove', mouseHandle)
  }, [])


  return (
    <div>
      <h1>The Style Component</h1>
      <PTag>{message}</PTag>
    </div>
  )
};

export default Styled;
