"use client";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Head from 'next/head';

export default function Home() {

  return (
    <div>
      <title>Hope Through Food</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <Navbar />
      <section>
        <h1>Welcome to Table of Hope Dallas</h1>
        <p className='smallerMainText'>
          We're here to make a difference in our community.
        </p>
        {/* Meals Served Counter */}
        <p className="meals-served">
        Meals Served So Far: <span id="meals-count">36+</span>
        </p>
        <a 
          href="https://www.zeffy.com/en-US/fundraising/support-fresh-meals-for-the-homeless?fbclid=PAZXh0bgNhZW0CMTEAAabfSUh6MM6c2ovxab_l8f-nOHoG-FQkObxfwfIF06uvCDbpzxItoMZagjs_aem_ON2DJ8V0kWVKsizGFbs54A" 
          className="zeffy-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Donate</p>
        </a>
      </section>
      <Footer />
    </div>
  );
}
