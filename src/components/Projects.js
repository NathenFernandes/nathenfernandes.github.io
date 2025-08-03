import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "truechamp",
      tech: ["react native", "node.js", "mongodb", "gemini api"],
      github: "https://github.com/NathenFernandes/TrueChamp",
      live: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <div className="project-title">{project.title}</div>
                <div className="project-links">
                  <a href={project.github}>github</a>
                  <a href={project.live}>live</a>
                </div>
              </div>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
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

export default Projects;