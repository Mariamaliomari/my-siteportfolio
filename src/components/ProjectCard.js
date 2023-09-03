import React from 'react'
import "./ProjectCardStyles.css"
import portfolio1 from "../assets/portfolio.png"
import { NavLink } from 'react-router-dom'

const ProjectCard = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        <div className='project-card'>
          <img  src= {portfolio1} alt="img"></img>
          <h2 className='project-title'> Project title</h2>
          <div className='project-details'>
            <p>this is my paragraph</p>
            <div className='pro-btns'>
              <NavLink to ="url.com" className ="btn"> View</NavLink>
              <NavLink to ="url.com" className ="btn"> Source</NavLink>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard