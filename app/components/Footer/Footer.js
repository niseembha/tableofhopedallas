import React from 'react'
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  return (
    <div className='footer'>
      <div className="col-2">
        <p>
          18170 Dallas Parkway, Ste. 101 
          <br />
          Dallas, TX 75287
        </p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <a href="https://www.instagram.com/tableofhope.dtx/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.tiktok.com/@tableofhopedallas" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>
    </div>
  );
}
