import React, { Component } from 'react'
import "./HeroSectionStyles.css"

class HeroSection extends Component {
    render(){
        return (
            <div className='hero-image'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1> 
                    <p>{this.props.text}</p>
        
                </div>
        
            </div>
          )
    }
  
}

export default HeroSection