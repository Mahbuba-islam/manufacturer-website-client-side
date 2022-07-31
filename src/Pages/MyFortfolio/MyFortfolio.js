import React from 'react';

const MyFortfolio = () => {
    return (
        <div>
            {/* about me */}
           <div className=' rounded-2xl  py-16 shadow-md px-12'>
           <h1 className ='text-4xl font-bold px-9 text-primary text-center'>Hello, I'm a full-stack web-developer.</h1>

              <div className="flex flex-col w-full border-opacity-50">
             
        <p className='w-50 px-12 text-center mx-auto p-10 w-30 text-2xl  '> My name is Mahbuba Akter from NY. I am a full-stack web developer. Even Though i'm new in this field but i've good experience of working with react JS, Node JS, MongoDB etc. If you want to develop an interactive react JS or Node JS web then i'm ready to help you according to your requirements.</p>
            </div>
            
            
            <div className="divider"></div>

         <div className='bg-base-100 rounded-md ' >
       <h1  className='text-3xl font-bold '>I' am Specialized in the following technologies: </h1>
       <div className="flex flex-col w-full">
    </div>
<div className='grid grid-cols md-grid-cols-2 lg:grid-cols-3 gap-3 mt-8 font-semibold mx-auto shadow-sm py-7 px-7 mb-7'>
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

<div className="divider"></div>
      
        <div className=' rounded-md   '>
        <h1 className='text-4xl font-medium mx-auto  pt-5'>Personal Information</h1>
       <p className='text-1xl font-semibold mt-4'> <span className='text-primary text-1xl font-semibold'> Name : </span> Mahbuba Akter </p>
        <p className='text-1xl font-semibold '> <span className='text-primary text-1xl font-semibold'> Age : </span>28</p>
           <p className='text-1xl font-semibold'> <span className='text-primary text-1xl font-semibold'>Nationality : </span>
                Bangladeshi <span className='text-warning font-bold-sm'>(Citizen of USA)</span></p> 
             <p className='text-1xl font-semibold'><span className='text-primary text-1xl font-semibold'> Gender : </span>  Female</p> 
             <p className='text-1xl font-semibold '> <span className='text-primary text-1xl font-semibold'> language : </span> Bengali & English</p>  
        </div>

        <div  className=' rounded-md mt-12'>
      <h1 className='text-3xl font-semibold  mb-3'>Completed year of Education</h1>
      <p className='text-2xl font-semibold  ml-5'>SSC : 2013 </p>
      <p className='text-2xl font-semibold  ml-5'>HSC : 2015 </p>
      </div>
       

        <div className=' rounded-md mt-12'>
            <h1 className='text-3xl font-medium '>Other Skills:</h1>
            <p className='text-1xl font-semibold '>Making professional Powerpoint presentation</p>
            </div>
              {/* contact */}
            <div className=' rounded-md mt-12 '>
            <h1 className='text-4xl font-medium mx-auto   mb-5'>Contact Info:</h1>

        <p className='text-1xl font-semibold '> <span className='text-primary text-1xl font-semibold'> mahbubaislam7010@gmail.com </span> </p>
        <p className='text-1xl font-semibold '> <span className='text-primary text-1xl font-semibold'> LinkedIn : </span></p>
           <p className='text-1xl font-semibold'> <span className='text-primary text-1xl font-semibold'>Twitter :  </span>
                Bangladeshi <span className='text-warning font-bold-sm'>(Citizen of USA)</span></p> 
             <p className='text-1xl font-semibold'><span className='text-primary text-1xl font-semibold'>Instagram : mahbubaIslam</span>  </p> 
               
        </div>
    </div>
    </div>
    </div>
   
//    contact
        
    );
};

export default MyFortfolio;