import React from 'react';
import Navbar from '../components/Navbar/Navbar'; // Adjust path if needed
import Footer from '../components/Footer/Footer';
import './impact.css';

export default function Impact() {
  return (
    <div className="impact-container">
      <title>Hope Through Food</title>
      <div className='allbutFooter'>
        <Navbar />

        {/* Hero Section */}
        <div className="impact-hero">
          <h1>Table of Hope in Action</h1>
          <p className='impact-hero-small-text'>
            See the difference we’ve made through
            <br /> 
            our efforts and community outreach.
            </p>
        </div>

        {/* Media Gallery */}
        <div className="impact-gallery">
          <h2>Photo & Video Gallery</h2>
          <div className="media-grid">
            <div className="media-item">
              <img src="/images/image1.PNG" alt="Serving meals" />
              <p>Serving warm meals to those in need.</p>
            </div>
            <div className="media-item">
              <img src="/images/image2.JPG" alt="Aten cooking" />
              <p>Cooking and preparing fresh food.</p>
            </div>
            <div className="media-item">
              <video autoPlay loop muted>
                <source src="/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>A glimpse into March 29's Food Drive.</p>
            </div>
            <div className="media-item">
              <img src="/images/image3.png" alt="Handing out meals" />
              <p>Distributing meals with care and connection.</p>
            </div>
            <div className="media-item">
              <video autoPlay loop muted>
                <source src="/videos/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>Showing love with a treat for a furry friend in need.</p>
            </div>
            <div className="media-item">
              <video autoPlay loop muted>
                <source src="/videos/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>Caring for our four-legged neighbors, one treat at a time.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}
