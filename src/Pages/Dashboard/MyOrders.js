
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import { useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';


const MyOrders = () => {

  const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }
}, [user])



const handleDelete = id =>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
        const url = `http://localhost:5000/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = order.filter(service => service._id !== id);
            setOrder(remaining);
        })
    }
}

    return (
        <div className='mt-12 '>
            <h2 className='text-center text-3xl text-error font-bold pb-5'>Total Orders: {order.length}</h2>
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
                            order.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.customerName}</td>
                                <td>{a.customerEmail}</td>
                                <td>{a.phone}</td>
                                <td>{a.price}</td>
                                <td>{a.price}</td>
                               
                                <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/$(_id)`}><button className='btn btn-xs btn-success text-white px-5 text-center'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
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




