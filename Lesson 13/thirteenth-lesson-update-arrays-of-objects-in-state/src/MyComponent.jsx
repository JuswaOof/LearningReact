import React, {useState} from 'react';

function MyComponent(){

 const [car,setCar] = useState([]);
 const [carYear,setYear] = useState(new Date().getFullYear());
 const [carMake,setMake] = useState('');
 const [carModel,setModel] = useState('');

 function carAdd(){
  const newCar = {year:carYear,
                  make:carMake,
                  model:carModel}

 setCar(prevCar => [...prevCar, newCar])

 setYear(new Date().getFullYear());
 setMake('');
 setModel('');

 }
 function deleteCar(index){

  setCar(prevCar => prevCar.filter((_,i) => i !== index))

 }
 function handleYearChange(e){
  setYear(e.target.value);
 }
 function handleMakeChange(e){
  setMake(e.target.value)
 }
 function handleModelChange(e){
  setModel(e.target.value)
 }

 return (
   <div>
     <h1>List of Cars</h1>
     <ul>
       {car.map((car, index) => (
         <li onClick={() => deleteCar(index)} key={index}>
           {car.year} {car.make} {car.model}{' '}
         </li>
       ))}
     </ul>
     <input type='number' value={carYear} onChange={handleYearChange} />
     <br />
     <input
       type='text'
       value={carMake}
       placeholder='input make'
       onChange={handleMakeChange}
     />
     <br />
     <input
       type='text'
       value={carModel}
       placeholder='input model'
       onChange={handleModelChange}
     />
     <br />
     <button onClick={carAdd}>Add Car</button>
   </div>
 )
}
export default MyComponent