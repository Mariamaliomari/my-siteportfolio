import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left-side">
                <div className="location">
                    <FaHome size={25} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>P.O Box 00100, Nairobi, Kenya</p>
                       
                    </div>
                </div>
                <div className="phone">
                    <FaPhone size={25} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p> +254 708844238</p>
                        
                    </div>
                
                </div>
                <div className="email">
                    <FaMailBulk size={25} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p> mamushkah001@gmail.com</p>
                    </div>
                </div>
                
            
            </div>
            <div className="right-side">
                <h4>About </h4>
                <p> I'm Mariam Ali, I see myself as a proactive partner, eager to optimize processes,
                     enhance user satisfaction, and contribute to your company's success.</p>
                <div className="socials" style={{padding:"20px"}}> 
                    <FaWhatsapp size={40} style={{color:"green", marginRight:"1rem"}}/>
                    <FaTwitter size={40} style={{color:"lightblue", marginRight:"1rem"}}/>
                    <a href="https://www.linkedin.com/in/mariam-omari/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={40} style={{ color: "blue", marginRight: "1rem" }} />
                    </a>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
