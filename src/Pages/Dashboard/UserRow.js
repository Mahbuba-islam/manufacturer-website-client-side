import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Users from './Users';
import Loading from '../Shared/Loading';

const UserRow = ({ user, setUser, isLoading, refetch  }) => {
   const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        
        
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make an admin');
            }
            return res.json()})
        .then(data => {
            if (data.modifiedCount > 0){ 
                refetch();
                toast.success(`Successfully made an admin`)};
        
        })
    }

    


   const removeUser = id =>{
    const proceed = toast.warn(<div><h4>Are You Sure! </h4> <strong> You really want to remove your product?</strong>
    </div>);
      if(proceed){
          const url = `http://localhost:5000/users/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount > 0){
               
                  const remaining = user.filter(user => user._id !== id);
                 
                  setUser(remaining);
                  if (isLoading) {
                    return <Loading></Loading>
                }
              }
        })
    }
}
    

    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> : <button class="btn btn-xs">Admin</button>}</td>
            <td><button onClick={()=>removeUser(user._id)} class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;