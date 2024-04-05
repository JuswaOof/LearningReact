import React, { useState, useEffect } from 'react'

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');

  function handleAdd() {
    setCount((prevCount) => prevCount + 1)
  }
  function handleSub() {
    setCount((prevCount) => prevCount - 1)
  }
  function handleColor() {
    setColor(prevColor => prevColor === 'green' ? 'red' : 'green')
  }

  useEffect(() => {
    document.title = `count: ${count} ${color}`
  }, [count, color])
  return (
    <>
      <p style={{color : color}} >Count: {count} </p>
      <p>Color: {color}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleColor}>ChangeColor</button>
    </>
  )
}
export default MyComponent
