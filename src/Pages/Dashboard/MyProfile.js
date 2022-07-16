
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";








const MyProfile = () => {
  const { register, handleSubmit, reset } = useForm();
    
    const [user] =useAuthState(auth)
   
        
    const onSubmit = data =>{
       console.log(data)
       const url = 'http://localhost:5000/users';
      fetch(url, {
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
            body:JSON.stringify(data)
            
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            reset()
            toast('Great Job! Your profile is successfully updated')
          })
       };
   
      
   
   
    return (
      <div className="card  w-50 shadow-lg border-0 container" >
   <div className="card-body flex flex-col justify-start mb-60 ">
    <div className='bg-primary shadow-lg py-6 rounded-full font-bold ml-14 text-2xl text-white text-center ' style={{ textAlign:"center" , width: '79px', height: '80px'}}> {user.displayName?.slice(0,1).toUpperCase()}</div>
    <h5 className="card-title text-black text-center text-capitalize ml-16 ">{user?.displayName}</h5>
    <p className="card-text ml-16 ">{user?.email}</p>
    <h2 className='text-center text-error text-3xl font-bold mb-5'>Update Your Profile</h2>
   
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 ml-80 mb-80'>
  <input type="text" placeholder='address' name='address'  class="input w-full max-w-xs " {...register("address", { required: true, maxLength: 20 })}/>
  <input type="number" placeholder='phone number' name='phone' class="input w-full max-w-xs " {...register("phone", { required: true, maxLength: 20 })}/>
 <input type="text" placeholder="Education" name='education' class="input w-full max-w-xs" {...register("education", { required: true, maxLength: 20 })}/>
 <input type="text" placeholder="City" name='city' class="input w-full max-w-xs" {...register("city", { required: true, maxLength: 20 })}/>

 <input type="text" placeholder="LinkedInLink" name='linkedInLink' class="input w-full max-w-xs" {...register("linkedInLink", { required: true, maxLength: 20 })}/>
  <input type="submit" class="btn btn error w-full max-w-xs " />
  </form>
  </div>
  </div>
          
 
 
 
         
 
    );
};

export default MyProfile;