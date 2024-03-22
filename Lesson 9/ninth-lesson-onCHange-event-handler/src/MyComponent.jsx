// onCHange = event handler that is used primarily with form elements
//           ex: <input>, <textarea>, <select>, Radio
//           Triggers a function everytime the value of the input changes

import React, {useState} from 'react';

function MyComponent(){

 const [name,setName] = useState('Guest');
 const [quantity, setQuantity] = useState(0);
 const [comment, setComment] = useState('');
 const [paymentMethod, setPaymentMethod] = useState();
 const [deliveryOption, setDeliveryOption] = useState('Pickup');

 function handleChangeName(e){
  setName(e.target.value)
 }
 function handleChangeQuantity(e){
  setQuantity(e.target.value)
 }
 function handleChangeComment(e){
  setComment(e.target.value)
 }
 function handlePaymentMethod(e) {
   setPaymentMethod(e.target.value)
 }
 function handleDeliveryOption(e) {
   setDeliveryOption(e.target.value)
 }

return (
  <div>
    <input value={name} onChange={handleChangeName} />
    <p>Name: {name}</p>
    <input value={quantity} onChange={handleChangeQuantity} type='number' />
    <p>Quantity: {quantity}</p>
    <textarea
      value={comment}
      onChange={handleChangeComment}
      placeholder='Please input comment'
      name=''
      id=''
      cols='30'
      rows='10'
    ></textarea>
    <p>Comment: {comment}</p>
    <select name='' id='' value={paymentMethod} onChange={handlePaymentMethod}>
      <option value=''>Select an option</option>
      <option value='Visa'>Visa</option>
      <option value='Mastercard'>Mastercard</option>
    </select>
    <p>Payment: {paymentMethod}</p>
    <input
      type='radio'
      value='Pickup'
      checked={deliveryOption === 'Pickup'}
      onChange={handleDeliveryOption}
    />
    Pickup
    <input
      type='radio'
      value='Delivery'
      checked={deliveryOption === 'Delivery'}
      onChange={handleDeliveryOption}
    />
    Delivery
    <p>{deliveryOption}</p>
  </div>
)

}

export default MyComponent