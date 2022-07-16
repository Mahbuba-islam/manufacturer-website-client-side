import React, {  useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
// import OrderModal from './OrderModal';
 import {useAuthState} from 'react-firebase-hooks/auth'
 import auth from '../../firebase.init'
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id} = useParams();
   
    const [purchase , setPurchase] = useState({})
    
    const [isReload , setIsReload] = useState(false)
  
    const [user] =useAuthState(auth)
   
    const [ minimumQuantity , setMinimumQuantity] = useState({})
   
    // console.log(minimumQuantity)
    
     useEffect( ()=>{
        const url = `http://localhost:5000/part/${id}`
        fetch(url)
       .then(res => res.json())
        .then(data => setPurchase(data))
    }, [id])

   
    
      
   
   
    





   


 const handleOrder = event =>{
  event.preventDefault();
  const orders = {
      orderId:purchase._id,
      orderName:purchase.name,
       orderQuantity:event.target.quantity.value,
      customerName:user.displayName,
      customerEmail:user.email,
      phone:event.target.phone.value,
      address:event.target.address.value,
      minimumQuantity:purchase.minimumQuantity,
      price:purchase.price
  }
  fetch('http://localhost:5000/orders', {
    method: 'post',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(orders)
  })
  .then(res => res.json())
  .then(data =>{
    console.log(data)
    toast('Great Job! Your order is successfully Completed')
  })
};

  
const increaseQuantity = () =>{
  const previousQuantity = parseInt(purchase.minimumQuantity)
  const minimumQuantity = previousQuantity+1 
   const updateQuantity = {minimumQuantity}
   
   
   const url=('http://localhost:5000/orders');
   fetch(url, {
       method: 'PUT',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(updateQuantity)
   })
   .then(res=> res.json())
   .then(data=>{
    setMinimumQuantity(data)
    console.log(data)
      // setIsReload(!isReload)
   } )
};

const decreaseQuantity = () =>{
  const previousQuantity = parseInt(purchase.minimumQuantity)
  const minimumQuantity = previousQuantity-1 
   const updateQuantity = {minimumQuantity}
   
   
   const url=('http://localhost:5000/orders');
   fetch(url, {
       method: 'PUT',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(updateQuantity)
   })
   .then(res=> res.json())
   .then(data=>{
    setMinimumQuantity(data)
    console.log(data)
      // setIsReload(!isReload)
   } )
};



    return (
        <div class="card lg:card-side  shadow-xl mt-24">
        <figure><img src={purchase.picture} alt="part"/></figure>
        <div class="card-body">
          <h2 class="card-title">{purchase.name}</h2>
          <h2 class="card-title">Price:{purchase.price}</h2>
          <p>{purchase.description}</p>
          <h2 class="card-title">AvailavailQuantity:{purchase.availavailQuantity}</h2>
          <h2 class="card-title">minimumQuantity:{purchase.minimumQuantity}</h2>
          <div class='flex justify-start'> 
          <button  onClick={() => increaseQuantity()}  class="btn btn-secondary mr-5">+</button>
          <button onClick={() => decreaseQuantity()}  class="btn btn-secondary">-</button>
          </div>
         
         
          <div class="card-actions justify-end">
            
            {/* <label for="order-modal" onClick={() => setOrder(purchase)} class="btn modal-button">Place Order</label> */}
           </div>

                                  {/* modal */}
                                 {/* <!-- The button to open modal --> */}
             <label for="my-modal-6" onClick={() => setPurchase(purchase)} class="btn btn w-50 secondary modal-button">placeOrder</label>

                            {/* <!-- Put this part before </body> tag --> */}
         <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle ">
              <div class="modal-box bg-accent">
              <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="font-bold text-2xl text-primary text-center">Place order For{purchase.name}</h3>
                
        <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
          <input type="text" disabled value={user?.displayName} class="input w-full max-w-xs text-primary " />
          <input type="text" disabled value={user?.email} class="input w-full max-w-xs " />
          <input type="text" placeholder='ADDRESS' name='address'  class="input w-full max-w-xs " />
         <input type="number" placeholder='PHONE NUMBER' name='phone' class="input w-full max-w-xs " />
          <input type="text" placeholder="price"  value={purchase.price} name='quantity' class="input w-full max-w-xs" />
          <input type="submit" value='complete the order' class="btn btn-secondary"/>
      </form>
    
   
  </div>
</div>

        </div>
      </div>
     
     
     
    );
};

export default Purchase;