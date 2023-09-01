import React from 'react'
import "./ServiceStyles.css"
import {  FaServer, FaDatabase, FaDesktop} from "react-icons/fa"
import { Link } from 'react-router-dom'


const Service = () => {
  return (
    <div className='service'>  
        <div className='card-container'>
            <div className='card'>
            <FaDesktop size={35} style={{color:"#fff", marginRight:"2rem"}}/> 
            <span className='bar'></span>
            <h1> Front-end</h1>
            <p>I have a knack for crafting responsive and user-friendly web interfaces. I'm proficient in HTML,
                CSS, and JavaScript, and I'm well-versed in modern front-end libraries
                and frameworks like React and Angular.I'm not just about code; I believe that the user experience is paramount. I have a strong foundation in user interface 
                (UI) and user experience (UX) design principles, ensuring that every pixel serves a purpose. </p>
                <Link to="contact" className='btn'>  Get in touch</Link>
                
            </div>
            <div className='card'>
            <FaServer size={35} style={{color:"#fff", marginRight:"2rem"}}/> 
            <span className='bar'></span>
            <h1> Back-end</h1>
            <p>  
                 As a Back-end developer, I specialize in crafting server-side logic for web applications, leveraging languages like Node.js and Ruby, along with frameworks such as Ruby on Rails.
                  I excel in API design, database management, and secure authentication.
                 I prioritize seamless deployment and scalability, driven to create responsive, secure, and feature-rich web applications. </p>
                <Link to="contact" className='btn'>  Get in touch</Link>
                
            </div>
            <div className='card'>
            <FaDatabase size={35} style={{color:"#fff", marginRight:"2rem"}}/> 
            <span className='bar'></span>
            <h1> DataBase</h1>
            <p>  I've gained a deep understanding of database management.
                 This skill involves data storage, retrieval, and organization, with a focus on proficient data modeling and
                 relationships. I'm adept in both SQL enabling me to 
                   optimize performance and manage backups. Continuous monitoring ensure top-tier database performance,
                guaranteeing efficient and secure data handling and superior user experiences.</p>
                <Link to="contact" className='btn'>  Get in touch</Link>
                
            </div>

        </div>
  
    </div>
  )
}

export default Service