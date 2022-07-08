import React from 'react';

import Contact from '../Contact';
import Footer from '../../Shared/Footer';
import Info from '../Info';
import Parts from '../Parts/Parts';
import Banner from '../Banner/Banner';
import Services from '../Services';
import Reviews from '../Reviews';


const Home = () => {
   return (
        <div >
             <Banner></Banner>
             <Parts></Parts>
             <Services></Services>
             <Reviews></Reviews>
            <Info></Info>
            <Contact></Contact>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;