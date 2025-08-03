import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">nathen fernandes</h1>
        <h2 className="hero-subtitle">software engineer</h2>
        <p className="hero-description">building ai solutions</p>
        
        <div className="hero-links">
          <a href="mailto:nferna62@uwo.ca">email</a>
          <a href="https://github.com/NathenFernandes">github</a>
          <a href="https://www.linkedin.com/in/nathen-fernandes-544105175/">linkedin</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;