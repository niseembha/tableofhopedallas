'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar'; // Adjust path if needed
import Footer from '../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mgvopnna");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Check if the fields are empty
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!email || !message) {
      setErrorMessage("Please fill out both fields before submitting.");
    } else {
      // Proceed with form submission if both fields are filled
      handleSubmit(e);
    }
  };

  if (state.succeeded) {
    return <p className="success-message">We'll get back to you soon! Thanks!</p>;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="email"></label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder='type email here...'
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      
      <label htmlFor="message"></label>
      <textarea
        id="message"
        name="message"
        placeholder='type your message here...'
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}


function Contact() {
  return (
    <div className='contact-container'>
      <title>Hope Through Food</title>
      <div className='allbutFooter'>
        <h1>CONTACT</h1>
        <Navbar />
        <h2>Send us a message!</h2>
        <ContactForm />
         {/* Social Media Icons */}
         <h2>Social Medias:</h2>
          <div className="social-icons-contact">
            {/* <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook}/>
            </a> */}
            <a href="https://www.instagram.com/tableofhope.dtx/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.tiktok.com/@tableofhopedallas" aria-label="TikTok" target="_blank" rel="noopener noreferrer"> 
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
      </div>
      <Footer />
    </div>

  );
}


export default Contact;