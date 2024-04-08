import React,{useState, useRef, useEffect} from "react";

function StopWatch(){

 const [isRunning,setIsRunning] = useState(false);
 const [elapsedTime,setElapsedTime] = useState(0);
 const intervalIdRef = useRef(null);
 const startTimeRef = useRef(0);

 useEffect(()=>{

   if(isRunning){
     intervalIdRef.current = setInterval(() => {
       setElapsedTime(Date.now() - startTimeRef.current)
     }, 10)
   }
   return ()=> {
    clearInterval(intervalIdRef.current)
   }
 },[isRunning]);

 function start(){
  setIsRunning(true);
  startTimeRef.current = Date.now() - elapsedTime;

  // let hour = Math.floor(elapsedTime / (1000 * 60 * 60))
  // let min = Math.floor((elapsedTime / (1000 * 60)) % 60)
  // let sec = Math.floor((elapsedTime / 1000) % 60)
  // let milliSec = Math.floor((elapsedTime % 1000) / 10)

  // console.log(elapsedTime)
 }
 function stop() {
  setIsRunning(false);
 }
 function reset() {
  setElapsedTime(0);
  setIsRunning(false)
 }



 function formatTime(){
  let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
  let min = Math.floor(elapsedTime / (1000 *60) % 60);
  let sec = Math.floor(elapsedTime / (1000) % 60);
  let milliSec = Math.floor((elapsedTime % 1000) / 10);


  hour = String(hour).padStart(2,"0");
  min = String(min).padStart(2, '0')
  sec = String(sec).padStart(2, '0')
  milliSec = String(milliSec).padStart(2, '0')
  return `${hour}:${min}:${sec}:${milliSec}`

 }
 return (
   <div className='stopWatchContainer'>
     <span className='timeDisplay'>{formatTime()}</span>
     <div className='buttonContainer'>
       <button className='start' onClick={start} >Start</button>
       <button className='stop' onClick={stop} >Stop</button>
       <button className='reset' onClick={reset} >Reset</button>
     </div>
   </div>
 )
}

export default StopWatch