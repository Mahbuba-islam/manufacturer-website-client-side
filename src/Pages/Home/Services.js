import React from 'react';
import country from '../../assets/icons/flags3.jpg';
import projects from '../../assets/icons/project2.jpg';
import review  from '../../assets/icons/customer-revie3w.png';
import feedback from '../../assets/icons/feedback.png'


import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Countries',
            description: '722+',
            img: country
        },
        {
            _id: 2,
            name: 'Complete Projects',
            description: '535+',
             img: projects
        },
        {
            _id: 3,
            name: 'Happy Clients',
            description: '273+',
             img: review
        },
        {
            _id: 3,
            name: 'Feedbacks',
            description: '432+',
             img: feedback
        },
    ];
    return (
        <div className='mb-9 pb-5 py-12 my-9 px-9'>
            <div className='text-center pb-8 mb-5'>
                <h3 className='text-title text-4xl font-bold uppercase text-error'>Millions Business Trust Us</h3>
                <h2 className='text-2xl text-warning mt-4 text-bold'>Try to understand User Expectation</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
                {
                    services.map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;