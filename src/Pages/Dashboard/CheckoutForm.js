import React, { useEffect, useState } from 'react'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';




const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const {price, customerName, customerEmail} = order;

    console.log(clientSecret)

    useEffect(()=>{
      fetch('http://localhost:5000/create-payment-intent',{
        method:'POST',
        headers:{
          'content-type': 'application/json',
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({price})
      })
      .then(res=>res.json())
      .then(data => {
        console.log(data)
        if(data?.clientSecret){
          setClientSecret(data.clientSecret)
        }
      }
       )

    },[price])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }
        
          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }
        
      


      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
     
        setCardError( error?.message || '');
        setSuccess('')

    // confirm card payment
    const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
            email: customerEmail,
            
          },
        },
      },
    );

    if(intentError){
      setCardError(intentError?.message)
      
    }
    else{
      setCardError('')
      console.log(paymentIntent)
      setSuccess('congragats! your payment is successfully completed')
    }
  }
    return(
        <div>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-success btn-xs mt-4' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
   
{
  cardError && <p className='text-danger'>{cardError}</p>
  
}

{
  success && <p className='text-primary'>{success}</p>
}

        </div>
    )
   



}

export default CheckoutForm;



