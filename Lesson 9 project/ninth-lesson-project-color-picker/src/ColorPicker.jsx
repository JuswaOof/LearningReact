import React, {useState} from 'react';

function ColorPicker(){

 const [color, setColor] = useState('#000000')

 function handleChangeColor(e){
  setColor(e.target.value)
 }

return (
  <div className='container' style={{ backgroundColor: color }}>
    <div className='contentContainer'>
      <h1>Color Picker App</h1>
      <div className='controllerContainer'>
        <p>Selected Color: {color}</p>
        <input value={color} type='color' onChange={handleChangeColor} />
      </div>
    </div>
  </div>
)
}

export default ColorPicker