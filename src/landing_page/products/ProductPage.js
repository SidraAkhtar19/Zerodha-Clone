import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import NavBar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function ProductPage() {
    return ( 
        <>
        <NavBar />
        <Hero />
        <LeftSection />
        <RightSection />
        <OpenAccount />
        <Footer />
        </>
     );
}

export default ProductPage;