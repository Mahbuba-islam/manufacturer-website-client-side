import React, { useEffect, useState } from 'react';

const ManageProducts = () =>{
const [manageProducts, setManageProducts] = useState([])
useEffect(()=>{
    fetch('http://localhost:5000/part')
    .then(res => res.json())
    .then(data => setManageProducts(data))
},[])
    return(
    <div>
   <h2>
    manageProducts All Products:{manageProducts.length}
   </h2> 
   
    </div>
  )
}

export default ManageProducts;
