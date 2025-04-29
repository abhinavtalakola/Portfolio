import React, { useState } from 'react';
import './Certifications.css';

const certifications = [
  {
    title: 'Cloud Computing',
    org: 'Swayam NPTEL',
    date: "Nov'24",
    image: '/images/nptel.png',
  },
  {
    title: 'Developing Applications with Google Cloud: Foundations',
    org: 'Coursera',
    date: "Apr'25",
    image: '/images/google.png',
  },
  {
    title: 'Getting started with AI and Machine Learning',
    org: 'Linkedin Learning',
    date: "Feb'23",
    image: '/images/linkedin.png',
  },
  {
    title: 'Full-Stack Development Using MERN Stack',
    org: 'CipherSchools',
    date: "Jul'24",
    image: '/images/cipher.png',
  },
  {
    title: 'Intelligence Tools for the Digital Age',
    org: 'Coursera',
    date: "Mar'23",
    image: '/images/digital.png',
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="certifications" id="certifications">
      <h2 className="cert-title">Certifications</h2>
      <div className="cert-container">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p><strong>Issued by:</strong> {cert.org}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <button onClick={() => setSelectedCert(cert)} className="view-btn">View Details</button>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={`${process.env.PUBLIC_URL}${selectedCert.image}`}
              alt={selectedCert.title}
              className="modal-image"
            />
            <button className="close-modal-btn" onClick={() => setSelectedCert(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
