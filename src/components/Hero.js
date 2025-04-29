import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const handleDownload = () => {
    const pdfUrl = '/Abhinav_Resume.pdf'; 

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Abhinav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Abhinav Reddy Talakola</h1>
        <h2>Full Stack Developer & UI/UX Developer</h2>
        <p>
          I specialize in building full stack web applications with clean, efficient code and intuitive user experiences. 
          Passionate about solving real-world problems with scalable and user-focused solutions.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="hero-button">Contact Me</a>
          <button 
            onClick={handleDownload}
            className="hero-button secondary"
          >
            <FaDownload /> Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
