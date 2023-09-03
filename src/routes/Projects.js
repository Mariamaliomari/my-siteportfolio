import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Service from '../components/Service'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <>
     <Navbar/>
    <HeroSection heading="MY PROJECTS" text= "Here are some of the projects I've had the privilege to work on:"/>
    <Service/>
    <ProjectCard/>
    <Footer/>
    </>
  )
}

export default Projects
