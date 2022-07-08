import React from "react";
// import bgImg from '../../assets/images/new bg.jpg';
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <div style={{
        // background:`url(${bgImg})`
    }} className=' px-10 py-10 w-50 '>
      <div className='text-center pb-14  bg-opacity-40 bg-gradient-to-r from-primary to-secondary min-w-min p-10 pt'>
       
         
        <h1 className='text-4xl font-bold text-text-neutral mt-4 bg-opacity-5 text-white'>Join the Power Letter</h1>
        <p className="mt-4 text-2xl text-white">Sign up here to receive our timely product and company updates. </p>
      </div>
      
       <div className='grid grid-cols-1 justify-items-center gap-5 px-5 py-5 bg-opacity-5 bg-gradient-to-r from-primary to-secondary px-7 border-0 min-w-min p-10 pt'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
     </div>
     
   
  );
};

export default Contact;


