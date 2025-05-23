"use client";

import "./Navbar.css";

const Navbar = ({ scrollToImpact, scrollToHome, scrollToAbout, scrollToContact }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <button className="nav-link" onClick={scrollToHome}>
            Home
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={scrollToImpact}>
            Impact
          </button>
        </li>
        <img
          src="/images/logo.png"
          alt="Table of Hope Logo"
          className="logo"
          width={48}
          height={48}
        />
        <li>
          <button className="nav-link" onClick={scrollToAbout}>
            About
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={scrollToContact}>
            Contact
          </button>
        </li>
      </ul>
      <div className="donateButton">
        <a
          href="https://www.zeffy.com/en-US/fundraising/support-fresh-meals-for-the-homeless?fbclid=PAZXh0bgNhZW0CMTEAAabfSUh6MM6c2ovxab_l8f-nOHoG-FQkObxfwfIF06uvCDbpzxItoMZagjs_aem_ON2DJ8V0kWVKsizGFbs54A"
          className="navbarDonateButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Donate</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
