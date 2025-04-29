import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const projects = [
    {
      name: 'Notes App',
      tech: 'React, Node.js, Express, MongoDB',
      github: 'https://github.com/abhinavtalakola/Notes-App.git',
      screenshots: ['Notes-1.png', 'Notes-2.png'],
    },
    {
      name: 'Employee Payment Management System',
      tech: 'Laravel, PHP, CSS, MySQL',
      github: 'https://github.com/abhinavtalakola/employee-payment-management-system-new.git',
      screenshots: ['EPMS-1.png', 'EPMS-2.png', 'EPMS-3.png', 'EPMS-4.png', 'EPMS-5.png'],
    },
    {
      name: 'Car Rental System',
      tech: 'JavaScript, HTML, CSS, Bootstrap',
      github: 'https://github.com/abhinavtalakola/Car-Rentals-Website.git',
      screenshots: ['Car-1.png', 'Car-2.png', 'Car-3.png', 'Car-4.png'],
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
    setFullscreenImage(null);
  };

  const openFullscreenImage = (img) => {
    setFullscreenImage(img);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-cards">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img
            src={`/images/${project.screenshots[0]}`}
            alt={`${project.name} Preview`}
            className="project-preview"
          />
          <h3>{project.name}</h3>
          <p>{project.tech}</p>
          <button className="view-details-btn" onClick={() => openModal(project)}>View Details</button>
        </div>
      ))}
      </div>

      {modalOpen && currentProject && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{currentProject.name}</h3>
            <p>{currentProject.tech}</p>
            <div className="modal-images">
              {currentProject.screenshots.map((img, i) => (
                <img
                  key={i}
                  src={`/images/${img}`}
                  alt={`Screenshot ${i + 1}`}
                  className="modal-image"
                  onClick={() => openFullscreenImage(`/images/${img}`)}
                />
              ))}
            </div>
            <a className="modal-link" href={currentProject.github} target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {fullscreenImage && (
        <div className="fullscreen-image-overlay" onClick={closeFullscreenImage}>
          <img src={fullscreenImage} alt="Fullscreen View" className="fullscreen-image" />
        </div>
      )}
    </section>
  );
};

export default Projects;
