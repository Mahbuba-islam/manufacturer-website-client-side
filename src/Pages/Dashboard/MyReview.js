


import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const MyReviews = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = 'https://sleepy-garden-61288.herokuapp.com/review';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            toast('OaWWW! Your review is successfully added')
        } )
    };


    return (
        <div className='bg-accent py-7 mt-8'>
            <h2 className='text-center text-3xl font-bold text-error'>Please add Review</h2>
            <form className='grid grid-cols-1 gap-3 justify-items-center mt-5 shadow-sm' onSubmit={handleSubmit(onSubmit)}>
                <input class="input w-full max-w-xs text-primary " placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea class="input w-full max-w-xs " placeholder='add review' {...register("description")} />
                <input class="input w-full max-w-xs " placeholder='rating' type="number" {...register("rating")} />
                <input class="input w-full max-w-xs " placeholder='Photo URL' type="text" {...register("picture")} />
                <input className='btn btn-primary mt-3' type="submit" value="Add review" />
            </form>
        </div>
    );
};

export default MyReviews;