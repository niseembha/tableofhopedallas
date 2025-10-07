"use client";
import { useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Head from "next/head";
import "./page.css";
import Impact from "./impact/page.js";
import About from "./about/page.js"
import Contact from "./contact/page.js"

export default function Home() {
  const homeRef = useRef(null);
  const impactRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToImpact = () => {
    impactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hope Through Food</title>
      <Navbar scrollToImpact={scrollToImpact} scrollToHome={scrollToHome} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact}/>
      <section className="mainPage" ref={homeRef}>
        <div className="centerArea">
          <h1 className="welcomeText1">Welcome to</h1>
          <h1 className="welcomeText2">
            Table of <span className="highlightMainText">Hope</span> Dallas
          </h1>

          {/* Meals Served Counter */}
          <div className="meals-served">
            Meals Served: <span id="meals-count">180</span>
          </div>
        </div>
        <div className="bottomButtons">
          <a
            href="https://www.zeffy.com/en-US/fundraising/support-fresh-meals-for-the-homeless?fbclid=PAZXh0bgNhZW0CMTEAAabfSUh6MM6c2ovxab_l8f-nOHoG-FQkObxfwfIF06uvCDbpzxItoMZagjs_aem_ON2DJ8V0kWVKsizGFbs54A"
            className="zeffy-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
          <button className="learnMoreButton" onClick={scrollToImpact}>
            Learn more about us
          </button>
        </div>
      </section>
      <section className="impactPage" ref={impactRef}>
        <div className="impactArea">
          <Impact />
        </div>
      </section>
      <section className="aboutPage" ref={aboutRef}>
        <div className="aboutArea">
          <About />
        </div>
      </section>
      <section className="contactPage" ref={contactRef}>
        <div className="contactArea">
          <Contact />
        </div>
      </section>
      <Footer />
    </div>
  );
}
