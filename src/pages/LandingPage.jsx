import React from 'react'
import Alert from '../components/Alert';
import Cardhome from '../components/Cardhome';
import Landing from '../components/Landing';
import NavbarLOC from '../components/NavbarLOC';
import Slide1 from '../components/Slide1';

export const LandingPage = () => {
  return (
    <div>
      
    <NavbarLOC/>
    <Landing/>
    <Alert/>
    
    <Cardhome/>
    <Slide1/>
    </div>
  )
}
