import React from "react";
import "./impact.css";

export default function Impact() {
  return (
    <div className="impact-container">
      <title>Hope Through Food</title>

      <div className="impact-left">
        <div className="impact-left-header">
          <h1 className="impact-head">TABLE OF HOPE IN ACTION</h1>
          <h2 className="impact-mission">Our Mission</h2>
        </div>
        <p className="impact-mission-text">
          Born out of a love for cooking and helping others, Table of Hope
          Dallas is committed to feeding the homeless with fresh meals that
          provide nourishment, restore dignity, and inspire hope in our
          community.
        </p>
        <a
          href="https://www.zeffy.com/en-US/fundraising/support-fresh-meals-for-the-homeless?fbclid=PAZXh0bgNhZW0CMTEAAabfSUh6MM6c2ovxab_l8f-nOHoG-FQkObxfwfIF06uvCDbpzxItoMZagjs_aem_ON2DJ8V0kWVKsizGFbs54A"
          className="impact-zeffy-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate Now
        </a>
      </div>

      <div className="impact-right">
        <div className="media-item">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="#F6C0A5" />
            <circle cx="24" cy="24" r="12" fill="#D66C38" />
          </svg>
          <p>Baking our signature cookies for the unhoused.</p>
          <img src="/images/image4.jpg" alt="Handing out meals" />
        </div>
        <div className="media-item">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="#BCF6A5" />
            <circle cx="24" cy="24" r="12" fill="#55D638" />
          </svg>
          <p>Caring for our four-legged neighbors, one treat at a time.</p>
          <video autoPlay loop muted>
            <source src="/videos/video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="media-item">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="#A5E2F6" />
            <circle cx="24" cy="24" r="12" fill="#38C4D6" />
          </svg>
          <p>A glimpse into March 29's Food Drive.</p>
          <video autoPlay loop muted>
            <source src="/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="media-item">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="#F6A5A5" />
            <circle cx="24" cy="24" r="12" fill="#D63838" />
          </svg>

          <p>Distributing meals with care and connection.</p>
          <img src="/images/image3.png" alt="Handing out meals" />
        </div>
      </div>
    </div>
  );
}
