import MyComponentB from "./MyComponentB";
import React, {useState, createContext} from 'react';

export const userContext = createContext();

function MyComponentA(){

 const [user, setUser] = useState('Guest');

 return (
   <div className='box'>
     <h1>Component A</h1>
     <h2>{`Hello ${user}`}</h2>
     <userContext.Provider value={user}>
       <MyComponentB></MyComponentB>
     </userContext.Provider>
   </div>
 )
}

export default MyComponentA