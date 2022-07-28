import React from 'react'
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query'
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51LQeYmGxqUbKWWIrEcwWcMMbZqSyrewUKWGbdm0q3ql6RVEhWgEjIA8AV3ds4e4qfRjxHxi2fNoFO3fx473tdy8x00NYQQ3tNE'
    );

const Payment = () => {
    const {id} = useParams()
    const url = `http://localhost:5000/myOrders/${id}`;
    const{data:order, isLoading} = useQuery(['orders', id], () => fetch(url, {
        method:'GET',
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    } )
    .then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    
    return(
        <div>
  
<div class="card w-100 max-w-md bg-base-100 shadow-xl my-12 mx-auto">

    
 <div class="card-body">
 <h2 className="text-black font-bold'iy0jp=]">
    Hello, <span className="text-success font-bold ">{order.customerName}</span> 
  </h2>
    <p className="text-success font-bold "> <span className='text-black'>please pay for: </span>{order.productName}</p>
    <h2 class="card-title">Quantity: {order.minimumQuantity}</h2>
     <p className='font-bold'>Price: {order.price}</p>
 </div>
 </div>

 <div class="card w-100 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
<div class="card-body">
  <Elements stripe={stripePromise}>
    <CheckoutForm/>
  </Elements>
</div>
</div>
 
    </div>
    )
}
export default Payment


