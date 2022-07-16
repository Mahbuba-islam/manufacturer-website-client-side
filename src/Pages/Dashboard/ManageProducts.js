import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProducts = () =>{
const [manageProducts, setmanageProducts] = useState([])
useEffect(()=>{
    fetch(' http://localhost:5000/part')
    .then(res => res.json())
    .then(data => setmanageProducts(data))
},[])

const handleDelete = id =>{
    const proceed = toast.warn(<div><h4>Are You Sure! </h4> <strong> You really want to remove your product?</strong>
    </div>);
      if(proceed){
          const url = `http://localhost:5000/part/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount > 0){
                  console.log('deleted')
                  const remaining = manageProducts.filter(product => product._id !== id);
                  setmanageProducts(remaining);
              }
        })
    }
}
    return(
    <div className='mt-12 '>
   <h2 className='text-center text-3xl text-error font-bold pb-5'>
    manageProducts All Products:{manageProducts.length}
    </h2> 

    <div class="overflow-x-auto">
    <table class="table w-full">
  <thead>
    <tr>
    <th></th>
      <th>Name</th>
     <th>Minimum Quantity</th>
     <th>Available Quantity</th>
     <th>Price</th>
      <th>update</th>
    </tr>
  </thead>
  <tbody>
    {
      manageProducts.map( (product, index) =>
        <tr>
      <td>{index+1}</td>
      <td>{product.name}</td>
      <td>{product.minimumQuantity}</td>
      <td>{product.availavailQuantity}</td>
      <td>{product.price}</td>
      <td><button onClick={() => handleDelete(product._id)}>X</button></td>
    </tr>
      )  
    }
   
    
   
  </tbody>
</table>
    </div>
   
    </div>
  )
}

export default ManageProducts;
