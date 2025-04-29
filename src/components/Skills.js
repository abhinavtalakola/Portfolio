import React from 'react';
import './Skills.css';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiPostman, SiFigma } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-items">
            <span><FaReact className="icon" /> React</span>
            <span><SiJavascript className="icon" /> JavaScript</span>
            <span><FaHtml5 className="icon" /> HTML</span>
            <span><FaCss3Alt className="icon" /> CSS</span>
          </div>
        </div>
        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill-items">
            <span><FaNodeJs className="icon" /> Node.js</span>
            <span><SiExpress className="icon" /> Express.js</span>
            <span><SiMongodb className="icon" /> MongoDB</span>
            <span><FaJava className="icon" /> Java</span>
          </div>
        </div>
        <div className="skill-card">
          <h3>Tools</h3>
          <div className="skill-items">
            <span><FaGitAlt className="icon" /> Git</span>
            <span><SiPostman className="icon" /> Postman</span>
            <span><SiFigma className="icon" /> Figma</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;