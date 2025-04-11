import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import NavBar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function PricingPage() {
    return ( 
        <>
        <NavBar />
        <Brokerage />
        <Hero />
        <OpenAccount />
        <Footer />
        </>
     );
}

export default PricingPage;