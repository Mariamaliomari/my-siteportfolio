import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Service from '../components/Service'

const Projects = () => {
  return (
    <>
     <Navbar/>
    <HeroSection heading="MY PROJECTS" text= "Here are some of the projects I've had the privilege to work on:"/>
    <Service/>
    <Footer/>
    </>
  )
}

export default Projects
