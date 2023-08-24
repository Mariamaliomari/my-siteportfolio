import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left-side">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>P.O Box 00100,</p>
                        <p> Nairobi, Kenya.</p>
                    </div>
                </div>
                <div className="phone">
                <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p> +254 708844238</p>
                    

                </div>
                
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p> mamushkah001@gmail.com</p>
                </div>
                </div>
                
            
            </div>
            <div className="right-side">
                <h4>About this company</h4>
                <p> I'm Mariam Ali, I see myself as a proactive partner, eager to optimize processes,
                     enhance user satisfaction, and contribute to your company's success.</p>
                <div className="socials">
                    <FaWhatsapp size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>

                </div>
            </div>
            

        </div>
      
    </div>
  )
}

export default Footer
