import "./ContactInfo.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// import React from 'react'

const ContactInfo = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="form">
        <form>
            <label>Enter Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="email" name="user_email"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="message"/>
            <input
          type="submit"
          value="Send"
          style={{
            background: "rgb(65, 140, 238)",
            fontSize: "20px",
            color: "white",
            transition: "background 0.3s, color 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "white";
            e.target.style.color = "darkslategray";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "rgb(65, 140, 238)";
            e.target.style.color = "white";
          }}
        />

            

        </form>
      
    </div>
  )
}

export default ContactInfo


// {/* <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form> */}