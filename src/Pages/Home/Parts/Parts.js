import React, { useEffect, useState } from 'react';

import Part from '../Part/Part';



const Parts = () => {
    const [parts, setParts] = useState([]);
    
    useEffect( ()=>{
        fetch(' http://localhost:5000/part')
        .then(res => res.json())
        .then(data => setParts(data));
    }, [])
   

    
    return (
        <div className='mt-12 py-12 px-9 ' >
            <h1 data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='900'className='text-5xl text-center mb-5 text-secondary text-bold'>Computer Parts</h1>
            <div className='grid grid-cols md-grid-cols-2 lg:grid-cols-3 gap-3 mt-8'>
            {
                parts.map(part => <Part
                 key={part._id}
                part={part}>
                
             </Part>)
            }
            </div>
           
            
        </div>
    );
};

export default Parts;