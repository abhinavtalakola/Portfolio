import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: 'Lovely Professional University',
      degree: 'B.Tech in Computer Science and Engineering',
      year: '2022 - 2026',
      score: 'CGPA: 7.7',
      location: 'Phagwara, Punjab',
    },
    {
      institution: 'Bhashyam Junior College',
      degree: 'Senior Secondary Education (MPC)',
      year: '2020 - 2022',
      score: 'Percentage: 94%',
      location: 'Guntur, Andhra Pradesh',
    },
    {
      institution: 'Top Kids School',
      degree: 'Class X (CBSE)',
      year: '2019 - 2020',
      score: 'Percentage: 89%',
      location: 'Guntur, Andhra Pradesh',
    }
  ];

  return (
    <div className="education-full-width">
      <section className="education-section" id="education">
        <h2>Education</h2>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">{edu.icon}</div>
              <div className="timeline-content">
                <h3>{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <div className="details">
                  <p><span>📅</span> {edu.year}</p>
                  <p><span>🏆</span> {edu.score}</p>
                  <p><span>📍</span> {edu.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
