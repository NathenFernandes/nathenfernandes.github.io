import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaCloud, FaTools, FaBrain, FaMobile } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 80 },
        { name: "PowerShell", level: 75 },
        { name: "Bash", level: 70 },
        { name: "C/C++", level: 75 },
        { name: "HTML/CSS", level: 85 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaServer />,
      skills: [
        { name: "React", level: 90 },
        { name: "React Native", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Flask", level: 75 },
        { name: "Bootstrap", level: 80 },
        { name: "Bulma", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Material UI", level: 80 }
      ]
    },
    {
      title: "AI/ML Tools",
      icon: <FaBrain />,
      skills: [
        { name: "PyTorch", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "scikit-learn", level: 80 },
        { name: "pandas", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Matplotlib", level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      skills: [
        { name: "AWS (S3, EC2)", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Google Cloud (TTS, Gemini)", level: 85 },
        { name: "Render", level: 75 },
        { name: "GitHub Actions", level: 80 }
      ]
    },
    {
      title: "Developer Tools",
      icon: <FaTools />,
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "PyCharm", level: 80 },
        { name: "IntelliJ", level: 75 },
        { name: "Jupyter Notebook", level: 85 },
        { name: "Google Colab", level: 80 },
        { name: "Bitbucket", level: 75 },
        { name: "Jira", level: 80 },
        { name: "Postman", level: 85 }
      ]
    },
    {
      title: "Tools & Monitoring",
      icon: <FaMobile />,
      skills: [
        { name: "Kibana", level: 75 },
        { name: "Dynatrace", level: 70 },
        { name: "ServiceNow", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "PagerDuty", level: 75 }
      ]
    }
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-grid" ref={ref}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 + idx * 0.05 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 