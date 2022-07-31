import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link} from 'react-router-dom';
import { toast } from 'react-toastify';
 import auth from '../../firebase.init';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faTrashCan } from '@fortawesome/free-solid-svg-icons';





const ManageOrders = () => {
 const [user] = useAuthState(auth);
const customerEmail = user.email
   
  const [orders, setOrders] = useState([]);
    
    
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    
}, [])



const handleDelete = id =>{
    const proceed = toast.warn(<div><h4>Are You Sure! </h4> <strong> You really want to remove your product?</strong>
    </div>);
      if(proceed){
          const url = `http://localhost:5000/orders/${id}`;
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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
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
                            orders.map((order) =><tr>
                             <td>{order.customerName}</td>
                                <td>{order.customerEmail}</td>
                                <td>{order.phone}</td>
                                <td>{order.address}</td>
                                 <td>{order.price}</td>
                                
                               
                                <td>
                                {(order.price && !order.paid) && <Link to={`/dashboard/payment/$(_id)`}><button className='btn btn-xs btn-success text-white px-5 text-center'>notPaid</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                       
                                        
                                    </div>}
                                </td>
                                <td><button onClick={() => handleDelete(order._id)} className='btn btn-sm btn-error'><FontAwesomeIcon icon = {faTrashCan} /></button></td>
                            </tr>)

                }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders ;




