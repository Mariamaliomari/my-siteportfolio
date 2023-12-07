import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ContactInfo from '../components/ContactInfo'


const Contact = () => {
  return (
    <>
    <Navbar/>
    <HeroSection heading ="CONTACT ME." text= "Hey there, let's have a chat" />
    <ContactInfo/>
    
    <Footer/>
    </>
      

  )
}

export default Contact
