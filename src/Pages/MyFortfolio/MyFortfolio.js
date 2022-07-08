import React from 'react';
import img from '../../assets/images/fort.png'
const MyFortfolio = () => {
    return (
        <div>
            <h1 data-aos='fade-right'
          data-aos-delay='400'
          data-aos-duration='900'
          class='text-5xl font-bold px-9 text-error mx-auto text-center'>
             WElcome to MY PortFolio
         </h1>
              {/* banner */}
            <div className="hero h-screen lg:h-[60vh]  relative z-10 mt-16 px-7 rounded-lg bg-primary ">
        <div className="hero-content flex-col lg:flex-row-reverse p-8">
            <img src={img}  alt='img' />
            <div>
                <h1 data-aos='fade-right'
          data-aos-delay='400'
          data-aos-duration='900'
          class='text-5xl font-bold px-9 text-white p-8'>Hello, I'm a full-stack web-developer.</h1>
           </div>
           </div>
        </div>

        
        <div class="divider"></div>
        

              {/* about me */}
           <div className='bg-accent rounded-2xl mt-7 py-16 shadow-md px-12'>
           <h1 className ='text-4xl font-bold px-9 text-error'>About Me:</h1>

              <div class="flex flex-col w-full border-opacity-50">
             <div class="grid h-1 card bg-gradient-to-r from-error to-primary font-semibold w-20 ml-12 pl-12 mt-5 rounded-box place-items-center"></div>
        <p className='w-50 px-12 text-center mx-auto p-10 w-30 text-2xl text-primary '> My name is Mahbuba Akter from NY. I am a full-stack web developer. Even Though i'm new in this field but i've good experience of working with react JS, Node JS, MongoDB and other ecosystem. If you want to develop an interactive react JS or Node JS web from scratch or customize an existing application then i'm ready to help you according to your requirements.</p>
            </div>
            
            
            <div class="divider"></div>

         <div className='bg-base-100 rounded-md p-9 mt-12 py-12 ' >
       <h1  className='text-4xl  text-violet-800 font-bold'>I' am Specialized in the following technologies: </h1>
       <div class="flex flex-col w-full">
    </div>
<div className='grid grid-cols md-grid-cols-2 lg:grid-cols-3 gap-3 mt-8 text-primary font-semibold mx-auto shadow-xl py-7 px-7 mb-7'>
 <ul>
    <li>HTML5/CSS3</li>
    <li>CSS3</li>
    <li>Bootstrap</li>
    <li>Tailwind</li>
    <li>JavaScript</li>
    <li>Material-Ui</li>
   </ul>
  
   <ul>
    <li>React JS</li>
    <li>Git/GitHub</li>
    <li>Netlify</li>
    <li>Node JS</li>
   <li>React Router</li>
   </ul>

 <ul>
   <li>Firebase</li>
   <li>Express JS</li>
   <li>MongoDB</li> 
   <li>Git/GitHub</li>
   <li>Heroku</li>
   <li>Browser Dev Tools</li>
</ul> 
</div>

<div class="divider"></div>
      <h1 className='text-4xl font-medium mx-auto font-bold text-error ml-16'>Personal Information</h1>

               {/* divider */}
             <div class="grid h-1 card bg-gradient-to-r from-accent to-error  font-semibold w-30 ml-12 pl-12 mt-5 rounded-box place-items-center"></div>

        <div className='mt-12 bg-accent rounded-md p-7 text-black'>
        <p className='text-1xl font-semibold '> <span className='text-primary text-1xl font-semibold'> Name : </span> Mahbuba Akter </p>
        <p className='text-1xl font-semibold '> <span className='text-primary text-1xl font-semibold'> Age : </span>28</p>
           <p className='text-1xl font-semibold'> <span className='text-primary text-1xl font-semibold'>Nationality : </span>
                Bangladeshi <span className='text-warning font-bold-sm'>(Citizen of USA)</span></p> 
             <p className='text-1xl font-semibold'><span className='text-primary text-1xl font-semibold'> Gender : </span>  Female</p> 
             <p className='text-1xl font-semibold '> <span className='text-primary text-1xl font-semibold'> language : </span> Bangla, English</p>  
        </div>

        <div  className='mt-12 bg-error rounded-md p-7 bg-primary'>
      <h1 className='text-3xl font-semibold text-white mb-3'>Completed year of Education</h1>
      <p className='text-2xl font-semibold text-white ml-5'>SSC : 2013 </p>
      <p className='text-2xl font-semibold text-white ml-5'>HSC : 2015 </p>
      <p className='text-2xl font-semibold text-white ml-5'>ESL : 2019 </p>
        </div>
        <div  className='mt-12 bg-accent rounded-md p-7'>
      <h1 className='text-3xl font-semibold text-primary'>English Assessment:</h1>
      <p className='text-1xl font-semibold text-primary'>Speaking English Fluently</p>
        </div>

        <div className='mt-12 bg-error rounded-md p-7 text-white'>
            <h1 className='text-3xl font-medium text-white'>Other Skills:</h1>
            <p className='text-1xl font-semibold text-white'>Making professional Powerpoint presentation</p>
            </div>
              {/* contact */}
            <div className='mt-12 bg-accent rounded-md p-7 text-black'>
            <h1 className='text-4xl font-medium mx-auto font-bold text-error mb-5'>Contact Info:</h1>

        <p className='text-1xl font-semibold '> <span className='text-primary text-1xl font-semibold'> mahbubaislam7010@gmail.com </span> </p>
        <p className='text-1xl font-semibold '> <span className='text-primary text-1xl font-semibold'> LinkedIn : </span>28</p>
           <p className='text-1xl font-semibold'> <span className='text-primary text-1xl font-semibold'>Twitter : </span>
                Bangladeshi <span className='text-warning font-bold-sm'>(Citizen of USA)</span></p> 
             <p className='text-1xl font-semibold'><span className='text-primary text-1xl font-semibold'>Instagram : </span>  Female</p> 
               
        </div>
    </div>
    </div>
    </div>
   
//    contact
        
    );
};

export default MyFortfolio;