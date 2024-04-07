import React, {useEffect, useRef} from 'react'

function MyComponent(){

 const inputRef1 = useRef(null);
 const inputRef2 = useRef(null);
 const inputRef3 = useRef(null);

 useEffect(()=>{
  console.log('Rendered')
 }, [])

 function handleClick1() {
 inputRef1.current.focus();
 inputRef1.current.style.background = 'red';
 inputRef2.current.style.background = '';
 inputRef3.current.style.background = '';
 }
 function handleClick2() {
   inputRef2.current.focus()
   inputRef1.current.style.background = '';
   inputRef2.current.style.background = 'red';
   inputRef3.current.style.background = '';
 }
 function handleClick3() {
   inputRef3.current.focus()
   inputRef1.current.style.background = '';
   inputRef2.current.style.background = '';
   inputRef3.current.style.background = 'red';
 }
 return (
   <div>
     <button onClick={handleClick1}>click me</button>
     <input ref={inputRef1} type='text' /> <br /> <br />
     <button onClick={handleClick2}>click me</button>
     <input ref={inputRef2} type='text' /> <br /> <br />
     <button onClick={handleClick3}>click me</button>
     <input ref={inputRef3} type='text' />
   </div>
 )

}

export default MyComponent