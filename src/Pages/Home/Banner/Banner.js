import React from 'react';
import BannerPic from '../../../assets/images/pexels-sergei-starostin-6636476 (1).jpg'
// import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero h-screen lg:h-[60vh] bg-accent relative z-10 mt-16 px-7 rounded-lg py-11'">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerPic}  alt='banner' />
                <div>
                    <h1 data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='900'
              class='text-5xl font-bold px-9 text-primary-focus'>Computer Manufacturing Industry</h1>
                    <p  data-aos='fade-right'
              data-aos-delay='600'
              data-aos-duration='800'
              class='py-6 max-w-xl px-6'> CP Technologies, a business unit of CP North America, designs and manufactures rugged computers, displays, and more. With over 20 years of experience in building high-performance rugged computing systems and devices, CP Technologies’ Combat Proven designs have been used all over the world in a variety of industrial, commercial, and defense related applications. </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;