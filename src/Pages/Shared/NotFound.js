import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
 
    return (
      <div class="card  shadow-xl bg-accent h-96 py-12 mt-5">
    <div class="card-body mx-auto mt-12">
    <h2 class="card-title text-red-600 text-bold text-6xl text-center">Ooh! You are Lost...</h2>
    <p className='text-warning text-bold text-2xl'>the spaceship left without you</p>
    <div class="card-actions justify-center">
    <Link to="home">Back to Home</Link>
      
    </div>
  </div>
</div>
  );
};

export default NotFound;