import React from 'react'
import "./ProjectCardStyles.css"

import { NavLink } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
          <img  src= {props.imgsrc} alt="img"></img>
          <h2 className='project-title'> {props.title}</h2>
          <div className='project-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
              <NavLink to ={props.view} className ="btn"> View</NavLink>
              <NavLink to ={props.source} className ="btn"> Source</NavLink>
              
            </div>
          </div>
        </div>
  )
}

export default ProjectCard;