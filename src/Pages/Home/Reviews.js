import React, { useEffect, useState } from 'react';
import Review from './Review';
const Reviews = () => {
    
        const [reviews, setReview] = useState([]);
        
        useEffect( ()=>{
            fetch(' https://sleepy-garden-61288.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data));
        }, [])
       
    
   //


   
    // const reviews = [
    //     {
    //         "name": "Pisan Herr",
    //         "location": "New York",
    //        "picture": "https://i.ibb.co/xGcP3KC/people1.png",
    //        "review": "Industrially sound hardware … and a quick response with the information we needed.",
    //        "rating" : "4"
    //       },
    //     {
    //         "name": "Winston Henry",
    //         "location": "New York",
    //      "picture": "https://i.ibb.co/f9jsph1/people2.png",
    //        "review": "Good and reliable equipment and service. You always came through one hundred percent.You’re a fantastic vendor to have.",
    //        "rating" : "4.5"
    //       },
    //     {
    //         "name": "Clinton Herby",
    //         "location": "california",
    //        "picture": "https://i.ibb.co/MnCzP4S/people3.png",
    //        "review": "We have used your products for years and are very happy with the performance",
    //        "rating" : "5"
    //       }]
        
        
    return (
        <section className='my-28 px-9'>
            <div>
                <div>
                    <h4 className="text-xl text-primary font-bold text-center mb-5">Our lovely Client Review</h4>
                    <h2 className='text-3xl text-center mb-9 text-error'>What our Clients say</h2>
                </div>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};


export default Reviews;