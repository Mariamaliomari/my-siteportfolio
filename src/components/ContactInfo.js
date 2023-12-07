import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactInfo.css";

const ContactInfo = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8e0mpc6', 'template_mx3j84j', form.current, 'qEifGzjy0HQvfZMDX')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        setIsSuccess(true);
        resetForm();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    <div className="form">
      {isSuccess && <div className="success-message">Message sent successfully!</div>}
      <form ref={form} onSubmit={sendEmail}>
        <label>Enter Name</label>
        <input type="text" name="user_name" />

        <label>Email</label>
        <input type="email" name="user_email" />

        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" name="message" />

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
  );
};

export default ContactInfo;




// 
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactInfo = () => {
//   const form = useRef();
//   const [isSuccess, setIsSuccess] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_8e0mpc6', 'template_mx3j84j', form.current, 'qEifGzjy0HQvfZMDX')
//       .then((result) => {
//         console.log(result.text);
//         console.log("message sent");
//         setIsSuccess(true);
//         resetForm();


//       })
//       .catch((error) => {
//         console.log(error.text);

//       })
//       const resetForm = () => {
//              form.current.reset();}

      

      
//   };
  

//   return (
//     <div className="form">
//       {isSuccess && <div className="success-message">Message sent successfully!</div>}
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Enter Name</label>
//         <input type="text" name="user_name" />

//         <label>Email</label>
//         <input type="email" name="user_email" />

//         <label>Message</label>
//         <textarea rows="6" placeholder="Type your message here" name="message" />

//         <input
//           type="submit"
//           value="Send"
//           style={{
//             background: "rgb(65, 140, 238)",
//             fontSize: "20px",
//             color: "white",
//             transition: "background 0.3s, color 0.3s",
//           }}
//           onMouseOver={(e) => {
//             e.target.style.background = "white";
//             e.target.style.color = "darkslategray";
//           }}
//           onMouseOut={(e) => {
//             e.target.style.background = "rgb(65, 140, 238)";
//             e.target.style.color = "white";
//           }}
//         />
//       </form>
//     </div>
//   );
// };

// export default ContactInfo;





// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactInfo = () => {
//   const form = useRef();
//   const [isSuccess, setIsSuccess] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_8e0mpc6', 'template_mx3j84j', form.current, 'qEifGzjy0HQvfZMDX')
//       .then((result) => {
//         console.log(result.text);
//         console.log("message sent");
//         setIsSuccess(true);
//         resetForm();
//       })
//       .catch((error) => {
//         console.log(error.text);
//       });
//   };

//   const resetForm = () => {
//     form.current.reset();
//   };

//   return (
//     <div className="form">
//       {isSuccess && <div className="success-message">Message sent successfully!</div>}
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Enter Name</label>
//         <input type="text" name="user_name" />

//         <label>Email</label>
//         <input type="email" name="user_email" />

//         <label>Message</label>
//         <textarea rows="6" placeholder="Type your message here" name="message" />

//         <input
//           type="submit"
//           value="Send"
//           style={{
//             background: "rgb(65, 140, 238)",
//             fontSize: "20px",
//             color: "white",
//             transition: "background 0.3s, color 0.3s",
//           }}
//           onMouseOver={(e) => {
//             e.target.style.background = "white";
//             e.target.style.color = "darkslategray";
//           }}
//           onMouseOut={(e) => {
//             e.target.style.background = "rgb(65, 140, 238)";
//             e.target.style.color = "white";
//           }}
//         />
//       </form>
//     </div>
//   );
// };

// export default ContactInfo;
