


import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit , reset} = useForm();
    const imageStorageKey = 'ff4c938471ffc70932bc22ba56c54e31'
    
    const onSubmit = data => {
        console.log(data);
        const image = data.picture[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const picture = result.data.url;
                console.log(picture)
                const reviews = {
                    name:data.name,
                    email: data.email,
                    description:data.description,
                    rating:data.rating,
                    picture: picture
                }
       
        
       fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            reset()
            toast('OaWWW! Your review is successfully added')
        } )
    }
        
})
       }

return (
        <div className='bg-accent py-7 mt-8'>
            <h2 className='text-center text-3xl font-bold text-error'>Please add Review</h2>
            <form className='grid grid-cols-1 gap-3 justify-items-center mt-5 shadow-sm' onSubmit={handleSubmit(onSubmit)}>
                <input class="input w-full max-w-xs text-primary " placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea class="input w-full max-w-xs " placeholder='add review' {...register("description")} />
                <input class="input w-full max-w-xs " placeholder='rating' type="number" {...register("rating")} />
                <input class="input w-full max-w-xs " placeholder='Photo URL' type="file" {...register("picture")} />
                <input className='btn btn-primary mt-3' type="submit" value="Add review" />
            </form>
        </div>
    );
};

export default AddReview;