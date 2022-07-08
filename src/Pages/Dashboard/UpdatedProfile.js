import React, { useEffect, useState } from 'react';

const UpdatedProfile = () => {
    const [profile, setProfile] = useState([]);
        
    useEffect( ()=>{
        fetch('https://sleepy-garden-61288.herokuapp.com')
        .then(res => res.json())
        .then(data => setProfile(data));
    }, [])
   
    return (
        <div className="card lg:max-w-lg bg-base-90 border-2 border-primary drop-shadow-lg">
            <div className="card-body">
                <p>{profile.displayName}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-15 mask mask-hexagon ring-offset-base-100 mr-5">
                        <img src="https://api.lorem.space/image/face?hash=3174" alt='pic' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl text-primary'>{profile.email}</h4>
                        <p className='text-error'>{profile.address}</p>
                        <p className='text-error'>{profile.education}</p>
                        <p className='text-error'>{profile.city}</p>
                        <p className='text-error'>{profile.district}</p>
                        <p className='text-error'>{profile.phone}</p>
                        
                    </div>
                </div>
            </div>
        </div>
       
       
       
       
       
//        <div>
//             <div class="avatar">
//   <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    
//   </div>
  

    );
};

export default UpdatedProfile;