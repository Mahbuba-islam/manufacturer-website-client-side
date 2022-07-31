import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-90 border-2 border-primary drop-shadow-lg">
            <div className="card-body">
                <p>{review.description}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="mask mask-hexagon mr-5">
                            <img  src={review.picture} alt=""/>
                        </div>
                    </div>
                   <div>
                  
                   <h4 className='text-xl text-primary'>{review.name}</h4>
                       <p className='text-error'>{review.location}</p>
                        <p className='text-primary text-1xl font-semibold'> rating: <span className='text-error text-1xl font-bold'>{review.rating} </span>  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;