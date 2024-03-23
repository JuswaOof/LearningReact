import React, {useState} from 'react'

function Food(){

 const [food,setFood] = useState(['apple', 'banana', 'orange'])

 function handleAddFood() {
   const inputFood = document.getElementById('inputFood').value
   document.getElementById('inputFood').value = ''

   setFood((f) => [...f, inputFood]);
 }

 function handleDeleteFood(index){

  setFood(food.filter((_, i) => i !== index));

 }

 return (
   <>
     <h1>List of Foods</h1>
     <ul>
       {food.map((item, index) => (
         <li key={index} onClick={() => handleDeleteFood(index)}>
           {item}
         </li>
       ))}
     </ul>
     <input id='inputFood' type='text' placeholder='Input food' />
     <button onClick={handleAddFood}>Add</button>
   </>
 )
}
export default Food