import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import SignUp from './landing_page/signup/SignUp';
import Support from './landing_page/support/Support';
import NavBar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

import NotFound from './landing_page/NotFound';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <NavBar/>
    <Routes>

      <Route path="/" element= { <HomePage />  } />
      <Route path="/about" element= { <AboutPage />  } />
      <Route path="/pricing" element= { <PricingPage />  } />
      <Route path="/product" element= { <ProductPage /> } />
      <Route path="/signup" element= { <SignUp />  } />
      <Route path="/support" element= { <Support /> } /> 

      <Route path="*" element= { <NotFound /> } /> 

    </Routes>
    <Footer/>
  
  </BrowserRouter>

);

