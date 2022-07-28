import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const DeleteConfirmModal = ({deletingUser,setDeletingUser, refetch,  isLoading}) => {
  const {email} = deletingUser;
 if(isLoading){
    <Loading></Loading>
 }
  const removeUser = () =>{
    fetch(`http://localhost:5000/users/${email}`, {
        method: 'DELETE' 
    })
    .then(res => res.json())
              .then(data => {
                  if(data.deletedCount){
              toast.success(`${email} is deleted`)
              setDeletingUser(null);
              refetch()
                  }
})

}
    return(
        <div>
  {/* // <!-- The button to open modal --> */}

{/* // <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="delete-confirm-model" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg text-error">Are You sure? you want to delete <span className='text-primary'>{email}</span> !</h3>
    <p class="py-4">if you delete once,you will never find the user anymore</p>
    <div class="modal-action">
      <label for="delete-confirm-model" class="btn btn-xs">cancel</label>
      <td><button onClick={()=>removeUser(email)} class="btn btn-xs">Delete</button></td>
    </div>
  </div>
</div>
        </div>
      
    )
}

export default DeleteConfirmModal;