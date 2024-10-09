import {useState} from 'react'
import useToggle from '../hooks/useToggle';

const Toggle = () => {
  // const [toggle, setToggle ] = useState(true)
  // const handleClick = () => {
  //   setToggle(!toggle)
  // }

  const [toggle, handleClick] = useToggle();
  const [toggle2, handleClick2] = useToggle();

  return (
    <div>
      <h1>Toggle</h1>
      {toggle ? <h2>🌞</h2> : <h2>🌝</h2>}
      <button onClick={handleClick}>On or Off</button>
      {toggle2 ? <h2>✅</h2> : <h2>🛑</h2>}
      <button onClick={handleClick2}>On or Off</button>
    </div>
    
  )
}

export default Toggle;