import "./ContactInfo.css"

import React from 'react'

const ContactInfo = () => {
  return (
    <div className="form">
        <form>
            <label>Enter Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"/>
            <button className="btn">Submit</button>

        </form>
      
    </div>
  )
}

export default ContactInfo
