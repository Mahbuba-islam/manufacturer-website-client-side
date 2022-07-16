import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MakeAdmin = ()=>{
 const [users, setUsers] = useState([])
 const user = useAuthState(auth) 
 const email = user.email
 const name = user.displayName
 console.log(name)
 useEffect(()=>{
    fetch(' http://localhost:5000/users')
    .then(res=> res.json())
    .then(data =>{
        setUsers(data)
    })
 },[])
 
    return(
       
        <div className='mt-12 '>
   <h2 className='text-center text-3xl text-error font-bold pb-5'>
   All User:{users.length}
    </h2> 

    <div class="overflow-x-auto">
    <table class="table w-full">
  <thead>
    <tr>
    <th></th>
      <th>Name</th>
     <th>email</th>
     <th></th>
     <th>Price</th>
      <th>update</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=> 
        <tr>
        <td>{index+1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
     {/* <td><button onClick={() => handleAdmin(product._id)}>Make admin</button></td> */}
      </tr>)
    }   
   
</tbody>
</table>
    </div>
   
    </div>
  )
}
export default MakeAdmin;