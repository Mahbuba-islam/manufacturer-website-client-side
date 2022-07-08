import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-lg border border-top-5 border-primary border-x-7 pt-3 px-12 py-5">
            <figure className="px-5 mt-5 ">
                <img  src={service.img} alt="Shoes" className="w-30" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-error">{service.name}</h2>
                <p className='text-4xl font-bold py-5 text-primary'>{service.description}</p>
            </div> 
        </div>
    );
};

export default Service;