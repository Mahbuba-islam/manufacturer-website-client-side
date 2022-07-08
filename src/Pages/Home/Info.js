import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='bg-accent rounded-2xl p-6 my-12 py-6'>
            <div >
         <h1 data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='900'
              class='text-4xl font-bold px-9 text-primary-focus'>Our Support</h1>
              <div class="flex flex-col w-full border-opacity-50">
             <div class="grid h-1 card bg-gradient-to-r from-error to-primary w-20 ml-12 pl-12 mt-5 rounded-box place-items-center"></div>
              <p className='w-50 px-12 text-center mx-auto p-10 w-30 text-2xl '>Our standard support turnaround time for a system repair once we receive it is 3-5 business days. However, we realize that sometimes a faster turnaround is required. If you have a time sensitive support or repair request, we can offer expedited support for $75. This expedited support fee will prioritize your support ticket. If you have specific upgrade needs, you can send your system to us to have the work done. We will charge time, components and return shipping to perform this work.</p>
            </div>

     </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-6 h-full px-9'>
            <InfoCard cardTitle="Opening Hours" carddetails='We open 24 hours. Our support standred time Mon-fri. ' bgClass="bg-gradient-to-r from-primary to-success" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" carddetails='430 W Merrick Rd, Valley Stream, NY 11580 · ~9 mi' bgClass="bg-error" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us"  carddetails='Call +1 802 210 1535 between 8.30am - 6.00pm (ET), Mon - Fri.' bgClass="bg-gradient-to-r from-error to-secondary" img={phone}></InfoCard>
        </div>
        </div>
       
        
    );
};

export default Info;