import React, {useState} from 'react'

function MyComponent(){

 const [car,setCar] = useState({year:2024,
                                make: 'Ford',
                                model: 'Mustang'})
 function handleNumberChange(e){
  setCar(prevCar => ({ ...prevCar, year: e.target.value }))
 }
 function handleMakeChange(e) {
  setCar(prevCar => ({ ...prevCar, make: e.target.value }))
 }
 function handleModelChange(e) {
  setCar(prevCar => ({ ...prevCar, model: e.target.value }))
 }

return (
  <>
    <p>
      My Favorite Car is: {car.year} {car.make} {car.model}
    </p>
    <input type='number' value={car.year} onChange={handleNumberChange} />{' '}
    <br />
    <input type='text' value={car.make} onChange={handleMakeChange} /> <br />
    <input type='text' value={car.model} onChange={handleModelChange} /> <br />
  </>
)
}

export default MyComponent