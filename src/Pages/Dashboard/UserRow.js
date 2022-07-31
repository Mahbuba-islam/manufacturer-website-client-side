import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const UserRow = ({ user, setDeletingUser, isLoading, refetch , index }) => {
   const { email, role} = user;
  
   if (isLoading) {
    return <Loading></Loading>
}
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

    
    

    return (
        <tr>
             <th>{index+1}</th>
              <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> : <button class="btn btn-xs">Admin</button>}</td>
            <label onClick={()=> setDeletingUser(user)} for="delete-confirm-model" class="btn modal-button btn-error "><FontAwesomeIcon icon = {faTrashCan} /></label>

           
        </tr>
    );
};

export default UserRow;