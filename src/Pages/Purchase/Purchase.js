import React, {  useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
// import OrderModal from './OrderModal';
 import {useAuthState} from 'react-firebase-hooks/auth'
 import auth from '../../firebase.init'
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams();
    const [purchase , setPurchase] = useState({})
    const [user] =useAuthState(auth)
   
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
            price:event.target.price.value

        }
        fetch('https://sleepy-garden-61288.herokuapp.com/orders', {
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

    
    
     useEffect( ()=>{
        const url = `http://localhost:5000/part/${id}`
        fetch(url)
       .then(res => res.json())
        .then(data => setPurchase(data))
    }, [id])

   
    return (
       
       
        <div class="card lg:card-side  shadow-xl">
        <figure><img src={purchase.picture} alt="part"/></figure>
        <div class="card-body">
          <h2 class="card-title">{purchase.name}</h2>
          <h2 class="card-title">Price:{purchase.price}</h2>
          <h2 class="card-title">MinimumQuantity:{purchase.minimumQuantity}</h2>
          <h2 class="card-title">AvailavailQuantity:{purchase.availavailQuantity}</h2>
          <p>{purchase.description}</p>
        <span>{purchase._id}</span>
        
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
          <input type="number" placeholder='price' name='price' class="input w-full max-w-xs " />
          <input type="number" placeholder="TYPE THE QUANTITY" name='quantity' class="input w-full max-w-xs" />
           <input type="submit" class="btn btn primary w-full max-w-xs " />
      </form>
    
   
  </div>
</div>

        </div>
      </div>
     
     
     
    );
};

export default Purchase;