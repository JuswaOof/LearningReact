import React, {useState, useEffect} from "react";

function MyComponent(){

 const[height, setHeight] = useState(window.innerHeight);
 const[width, setWidth] = useState(window.innerWidth);

 useEffect(() => {
window.addEventListener('resize', handleResize);
 console.log('added event listner');

 return () => {
  window.removeEventListener('resize', handleResize);
  console.log('removed event listner')
 }
}, [])

useEffect(() => {
 document.title = `size ${height} x ${width}`;
}, [height, width])

function handleResize(){
 setWidth(window.innerWidth);
 setHeight(window.innerHeight)
}

 return(
  <>
  <p>Window Height: {height}</p>
  <p>Window Width: {width}</p>
  </>
 )
}

export default MyComponent