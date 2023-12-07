import React from 'react'
import "./AboutContent.css"
import { Link } from 'react-router-dom'
import React1 from"../assets/img1.jpeg"
import React2 from "../assets/img4.jpeg"


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>I am a Full-Stack Wed Developer.I create responsive website applications that are user friendly for my clients. </p>
        <Link to="/contact">
          <button className='btn'>Contact</button>
        </Link>
      
      </div>
      <div className="right">
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={React1} className="image" alt='true'/>
          </div>
          <div className='img-stack bottom'>
            <img src={React2} className="image" alt='true'/>
          </div>
        </div>
      </div>
      <div className='bio'>
        <div className='content'>
          <h1>My Bio</h1>
          <p>Mariam Ali is a skilled FullStack Developer with expertise in UI technologies including HTML, CSS, JavaScript, and React. She's proficient in SQL
            , Ruby, Figma, Sinatra, MySQL, and Ruby on Rails.
              With 3+ years of experience, Mariam excels in Data Annotation, LiDAR, Video, Image data, Data Research, Digital Marketing, and Chat Operations.Among notable accomplishments, 
             <br></br><br></br>Mariam has successfull
            y led and executed Data Annotation projects, demonstrating meticulous attention to detail and a commitment to delivering high-quality results. Proficiency in harnessing cutting-edge technologies has significantly contributed to the success of Digital Marketing strategies, leading to enhanced brand visibility and engagement.

           <br></br>  <br></br> As she looks ahead, she aspires to continuously excel in FullStack Development and Data Science. Leveraging her skills, she aims to create innovative solutions that drive efficiency, elevate user experiences, and contribute positively to the tech industry.</p>

        </div>
        <div className='buttons'>
        <button className="btn">Download CV</button>
        <button className="btn">Hit Me Up</button>


        </div>

      </div>


      
    </div>
  )
}

export default AboutContent
