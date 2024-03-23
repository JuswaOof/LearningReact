// updater function = a function that passed as an argument to setState() usually
//                    ex: setYear(prevYear => prevYear + 1)
//                    Allow safe update based on the previous state
                      // Used with multiple state updates and asynchronous function
                      // Good practice to use updater function

import React, {useState} from 'react'

function Counter(){

 const [count,setCount] = useState(0);

 function decrement(){
  setCount(prevCount => prevCount - 1);
  setCount(prevCount => prevCount - 1);
  setCount(prevCount => prevCount - 1);
 }
 function reset() {
   setCount(0)
 }
 function increment() {
   setCount((prevCount) => prevCount + 1);
   setCount((prevCount) => prevCount + 1)
   setCount((prevCount) => prevCount + 1)
 }

return (
  <>
    <p>{count}</p>
    <button onClick={decrement}>
      decrement
    </button>
    <button onClick={reset}>
      reset
    </button>
    <button onClick={increment}>
      increment
    </button>
  </>
)
}

export default Counter