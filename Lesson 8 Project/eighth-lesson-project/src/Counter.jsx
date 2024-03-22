import React, {useState} from 'react';

function Counter() {

 const [counter, setCounter] = useState(0);

 const decrease = () => {
  setCounter(counter-1);
 }
 const reset = () => {
   setCounter(0);
 }
 const increase = () => {
   setCounter(counter+1);
 }

 return (
   <div className='container'>
     <div className='contentContainer'>
       <p>{counter}</p>
       <div className='buttonsContainer'>
         <button onClick={decrease}>decrease</button>
         <button onClick={reset}>reset</button>
         <button onClick={increase}>increase</button>
       </div>
     </div>
   </div>
 )
}
export default Counter