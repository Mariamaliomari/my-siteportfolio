import "./HeroImageStyle.css"
import React from 'react'
import LandingImage from '../assets/landing.jpg'
import { Link } from "react-router-dom"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="landing-img" src={LandingImage} alt= "Landingimage"/>
        </div>
        <div className="content"> 
        <p>HI, I'M MARIAM ALI</p>
        <h1>Full-Stack Web Developer</h1>
        <div>
            <Link to="projects" className="btn">Projects</Link>
            <Link to="contact" className="btn btn-light">Contact</Link>
        </div>

        </div>
      
    </div>
  )
}

export default HeroImage
