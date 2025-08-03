import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "profai",
      role: "co-founder & software engineer",
      description: "ai platform turning lecture slides into narrated videos and study materials",
      period: "2025 - present",
      tech: ["react native", "node.js", "mongodb", "gemini api", "aws"],
      image: "https://profaidatabase.s3.ca-central-1.amazonaws.com/assets/image+(2).png",
      link: "https://profai.io"
    },
    {
      title: "truechamp",
      role: "ai-powered group streak tracker",
      description: "mobile app for tracking group challenges and building habits together",
      period: "2024",
      tech: ["react native", "node.js", "mongodb", "gemini api"],
      image: "https://www.truechamp.io/logo.png",
      link: "https://truechamp.io"
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-content">
        <h2>experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="exp-header">
                <div className="exp-left">
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    <img src={exp.image} alt={exp.title} className="exp-image" />
                  </a>
                  <div className="exp-info">
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-description">{exp.description}</div>
                  </div>
                </div>
                <div className="exp-period">{exp.period}</div>
              </div>
              <div className="exp-tech">
                {exp.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;