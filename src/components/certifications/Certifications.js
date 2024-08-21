import React from 'react';
import './Certifications.css';
import hackerrank from '../../assets/projects/hackerranklogo.png';
import udemy from '../../assets/projects/udemylogo.png';
import coursera from '../../assets/projects/coursera_logo.png';
import meta from '../../assets/projects/meta-logo.png';



const CertificationCard = ({ name, issuer, date, imageUrl, link }) => (
  <div className="certification-card">
    <div className="certification-header">
      <h3 className="certification-title">{name}</h3>
    </div>
    <div className="certification-details">
      <img src={imageUrl} alt={name} className="certification-image" />
      <a href={link} target="_blank" rel="noopener noreferrer" className="certification-link">
        View Certification
      </a>
    </div>
  </div>
);

export const Certifications = () => {
  const certifications = [
    {
      name: "SQL Develoepr Intermediate",
      issuer: "HackerRank",
      imageUrl: hackerrank,
      link: "https://www.hackerrank.com/certificates/c81c1dba21e0"
    },
    {
      name: "Fullstack Java Developer",
      issuer: "Udemy",
      imageUrl: udemy,
      link: "https://www.udemy.com/certificate/UC-d5372459-763a-4a2c-b78f-fa6b3462ebc7/"
    },
    {
      name: "AWS Certified Solution Architect",
      issuer: "Udemy",
      imageUrl: udemy,
      link: "https://www.udemy.com/certificate/UC-e4e365cb-6f6f-4dcf-967e-eaa69c58f5a4/"
    },
    {
      name: "Nodejs Developer Associate",
      issuer: "Hackerrank",
      imageUrl: hackerrank,
      link: "https://www.hackerrank.com/certificates/6f19988cd6df"
    },
    {
      name: "Introduction to Front-end Development",
      issuer: "Meta",
      imageUrl: meta,
      link: "https://www.coursera.org/account/accomplishments/certificate/SH7QY897FZZG"
    },
    {
      name: "Software Design Patterns",
      issuer: "Coursera",
      imageUrl: coursera,
      link: "https://www.coursera.org/account/accomplishments/certificate/4PVK55JF9HKM"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
