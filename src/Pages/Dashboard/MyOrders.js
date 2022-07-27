
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
// import { signOut } from 'firebase/auth';


const MyOrders = () => {
   
    
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const email = user.email
  const navigate = useNavigate()
    
    
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myOrders?customerEmail=${email}`,{
                method:'GET',
                headers:{
               'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            } )
            
            .then(res =>{
               if(res.status === 401 || res.status===403){
                signOut(auth);
                localStorage.removeItem('accessToken')
                navigate('/')  
               }
              return res.json()
               
            })
            .then(data => setOrders(data));
    }
}, [user])



const handleDelete = id =>{
    const proceed = toast.warn(<div><h4>Are You Sure! </h4> <strong> You really want to remove your product?</strong>
    </div>);
      if(proceed){
          const url = `http://localhost:5000/myOrders/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount > 0){
                  console.log('deleted')
                  const remaining = orders.filter(order => order._id !== id);
                  setOrders(remaining);
              }
        })
    }
}

    return (
        <div className='mt-12 '>
            <h2 className='text-center text-3xl text-error font-bold pb-5'>Total Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{order.customerName}</td>
                                <td>{order.customerEmail}</td>
                                <td>{order.phone}</td>
                                <td>{order.address}</td>
                                 <td>{order.price}</td>
                               
                                <td>
                                {(order.price && !order.paid) && <Link to={`/dashboard/payment/$(_id)`}><button className='btn btn-xs btn-success text-white px-5 text-center'>pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        
                                    </div>}
                                </td>
                                <td><button onClick={() => handleDelete(order._id)}>X</button></td>
                            </tr>)

                }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;




