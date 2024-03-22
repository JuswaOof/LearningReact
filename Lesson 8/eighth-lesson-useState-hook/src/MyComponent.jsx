import React, {useState} from 'react';

function MyComponent(){

 const [name, setName] = useState("Guest");
 const [age, setAge] = useState(0);
 const [status, setStatus] = useState(false);

 const updateName = () => {
  setName("Spongebob");
 }
 const updateAge = () => {
   setAge(age+1);
 }
 const toggleEmployedStatus = () => {
   setStatus(!status);
 }
 

return (
  <>
    <p>Name: {name}</p>
    <button onClick={updateName}>updateName</button>

    <p>Age: {age}</p>
    <button onClick={updateAge}>increase Age</button>

    <p>Employed: {status ? 'Yes' : 'No'}</p>
    <button onClick={toggleEmployedStatus}>toggle status</button>
  </>
)
}

export default MyComponent