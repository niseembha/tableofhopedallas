import React from 'react';
import Navbar from '../components/Navbar/Navbar'; // Adjust path if needed
import Footer from '../components/Footer/Footer';
import './about.css';


export default function About() {
  return (

    <div className="about-container">
      <div className='allbutFooter'>
        <Navbar />

        {/* Hero Section */}
        <div className="about-hero">
          <h1>About Table of Hope Dallas</h1>
        </div>

        {/* Founders Section */}
        <div className="about-founders">
          <h2 className='meetText'>Meet the Founders</h2>
          <div className="founders">
            <div className="founder-card">
              <img src="/images/atenpfp.png" alt="Aten Biswas" />
              <h3>Aten Biswas</h3>
              <p>Hey everyone, I'm Aten! I'm a sophomore at Shepton High School and I enjoy playing basketball and golf. I have a deep passion for cooking and helping others, so I started Table of Hope with my friend. We can't wait to see the difference you help us make!</p>
            </div>
            <div className="founder-card">
              <img src="/images/niseempfp.png" alt="Niseem Bhattacharya"/>
              <h4>Niseem Bhattacharya</h4>
              <p>Hi, I’m Niseem! I'm a sophomore at Greenhill School and some of my interests are playing video games, coding, and basketball with my friends. My friend and I started this nonprofit because we love cooking and wanted to use that passion to help others!</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className='missionStatement'>
          <h2 className='missionStatementhead'>Our Mission</h2>
          <div className="about-mission">
            <p>
            Born out of a love for cooking and helping others, Table of Hope Dallas is committed to feeding the homeless with fresh meals that provide nourishment, restore dignity, and inspire hope in our community.
            </p>
          </div>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}
