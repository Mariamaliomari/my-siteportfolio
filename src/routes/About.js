import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <>
    <Navbar/>
    <HeroSection heading="ABOUT ME." text="I'm a Versatile Full-Stack Wed Developer"/>
    <AboutContent/>
    

    <Footer/>
    </>
      
    
  )
}

export default About
