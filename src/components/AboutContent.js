import React from 'react'
import "./AboutContent.css"
import { Link } from 'react-router-dom'
import Resume from '../assets/MariamCV.pdf';


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>I am Mariam Ali, a Full-Stack Wed Developer but also a Data enthusiast, A teacher and like paricipating in community development project.
          I create responsive website applications that are user friendly for my clients.Apart from Coding, I enjoy Dancing, outdoor activities and 
          watching movies. This is my personal portfolio, 
          Please feel free to explore my personal portfolio and blog where I share my thoughts and insights. </p>
        <Link to="/contact">
          <button className='btn'>Contact</button>
        </Link>
      
      </div>
      
      <div className='bio'>
        <div className='content'>
          <h1>My Bio</h1>
          <p>Mariam Ali is a skilled FullStack Developer with expertise in UI technologies including HTML, CSS, JavaScript, and React. I am 
              With 3+ years of experience, I excel ,Software development, Web Development , Data entry , Research  and Annotation includimg LiDAR, Video, Image data, Data Research, Digital Marketing, and Chat Operations.Among notable accomplishments, 
             <br></br><br></br>I have successfully led and executed Data Annotation projects, demonstrating meticulous attention to detail and a commitment to delivering high-quality results. Proficiency in harnessing cutting-edge technologies has significantly contributed to the success of Digital Marketing strategies, leading to enhanced brand visibility and engagement.

           <br></br>  <br></br> As I looks ahead, I aspire to continuously excel in FullStack Development and Data Science. Leveraging my skills, I aim to create innovative solutions that drive efficiency, elevate user experiences, and contribute positively to the tech industry.</p>

        </div>
        <div className='buttons'>
        <a
              href={Resume}
              download="Example-PDF-document"
              target="_blank"
              rel="noreferrer"
            >
              < button className="btn">Download Resume</button>
            </a>
       
            <Link to="/contact"> Contact </Link>


        </div>

      </div>


      
    </div>
  )
}

export default AboutContent
