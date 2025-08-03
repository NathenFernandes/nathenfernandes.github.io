import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>about</h2>
          <p>cs student at western ontario. building profai.</p>
          <p>interested in ai, full-stack development, and solving real problems.</p>
        </div>
        
        <div className="tech-stack">
          <h3>tech</h3>
          <div className="tech-grid">
            <span>javascript</span>
            <span>python</span>
            <span>react</span>
            <span>node.js</span>
            <span>mongodb</span>
            <span>aws</span>
            <span>pytorch</span>
            <span>express</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;