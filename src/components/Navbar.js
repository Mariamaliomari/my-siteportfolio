import React, { useState } from 'react'
import "./NavbarStyles.css"
import { Link } from 'react-router-dom'
import {FaBars, FaGithub, FaTimes} from "react-icons/fa"
import { FaInfoCircle, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const[color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){setColor(true);
        }else{setColor(false);}
    }
    window.addEventListener("scroll", changeColor);

    const [isMobile, setIsMobile] = useState(false);
    const handleToggle = () => {
        setIsMobile(!isMobile);
      };
    


  return (
    <div className= {color ?".header header-bg":"header" }>
        <Link to="/">
            <h1>
                MyPortfolio
            </h1>
        </Link>
        <ul className={click ? "nav-menu active": "nav-menu"}>
            <li> 
                <Link to="/">Blogs </Link>
            </li>
            <li> 
                <Link to="/projects"> Projects </Link>
            </li>
            <li> 
                <Link to="/about"> About </Link>

            </li>
            <li> 
                <Link to="/contact"> Contact </Link>
            </li>
            
            
        </ul>


        <div className={`navbar ${isMobile ? 'responsive' : ''}`}>
            
            <a href="#services"><FaGithub /> </a>
            <a href="#about"><FaInfoCircle /> </a>
            <a href="#contact"><FaEnvelope /></a>
    
    
    </div>
        <div className='hamburger' onClick={handleClick}>
            {click ?(<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
            
            
        </div>
      
    </div>
  )
}

export default Navbar
