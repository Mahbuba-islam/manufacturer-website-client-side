import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {
    const { _id, name, picture, description, price, minimumQuantity, availavailQuantity} = part;
    const navigate = useNavigate();

    const navigateToPurchase = id =>{
        navigate(`/part/${id}`);
    }
    
    return (
        <div class="card w-80 text-center  shadow-lg py-8 ">
 <img src={picture} alt="part" />
  <div className="card-body  text-center  ">
  <h2 className="card-title text-center text-3xl ml-9 text-primary ">{name}</h2>
   <h2 className='text-2xl text-black'>Price:{price}</h2>
    <h2 className='text-black font-semibold text-1xl'>MinimumQuantity:{minimumQuantity}</h2>
    <h2 className='text-black font-semibold text-1xl'>AvailavailQuantity:{availavailQuantity}</h2>
    <p className='text-black font-semibold text-1xl'>{description}</p>
    
    <div className="card-actions justify-center text-center mt-4">
    <button onClick={() => navigateToPurchase(_id)} className='btn btn-text-white font-bold bg-gradient-to-r from-primary to-error border-0  text-center'> Purchase </button>
    
    </div>
  </div>
</div>
    );
};

export default Part;