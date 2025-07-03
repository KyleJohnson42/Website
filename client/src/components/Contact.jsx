import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from './PageHeader.jsx';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChange = e => {
    if (e.target.id == 'yourname') {
      setName(e.target.value);
    } else if (e.target.id == 'youremail') {
      setEmail(e.target.value);
    } else if (e.target.id == 'yourmessage') {
      setMessage(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true);

    // const result = await axios.post('/api/sendEmail', {
    //   name: name,
    //   email: email,
    //   message: message
    // });

    // setIsSubmitting(false);
    setName('');
    setEmail('');
    setMessage('');
    setHasSubmitted(true);
  }

  return <div className='page contactPage'>
    <PageHeader content="Contact Me" />
    <p className="contactText">I'd be happy to work together with you on your next project!<br />Feel free to send me a message with any questions.</p>
    <div className="contactFormContainer">
      <form className="contactForm" onSubmit={handleSubmit}>
        <input id="yourname" className="contactFormInput" type="text" placeholder="Your name" value={name} onChange={handleChange} />
        <input id="youremail" className="contactFormInput" type="email" placeholder="Your email" value={email} onChange={handleChange} />
        <textarea id="yourmessage" className="contactFormInput largeInput" type="text" placeholder="Your message" value={message} onChange={handleChange} />
        <input className="contactFormButton" type="submit" value={isSubmitting ? 'Sending...' : hasSubmitted ? 'Thank you!' : 'Submit'}/>
      </form>
    </div>
    <div className="contactLinks">
      <a href="https://github.com/KyleJohnson42" target="_blank">
        <img src="./assets/github_icon.png" alt="GitHub icon" width="30" height="30" />
      </a>
      <a href="mailto:kylejohnson@mailfence.com" target="_blank">
        <img src="./assets/email_icon.png" alt="Email icon" width="30" height="30" />
      </a>
      <a href="https://www.linkedin.com/in/kylejohnson42" target="_blank">
        <img src="./assets/linkedin_icon.png" alt="LinkedIn icon" width="30.5" height="30.5" />
      </a>
    </div>
  </div>
};

export default Contact;