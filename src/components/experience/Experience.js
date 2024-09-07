import React from "react";
import './Experience.css';


const ExperienceCard = ({ company, position, location, duration, summary }) => (
  <div className="experience-card">
    <div className="experience-header">
      <div className="experience-header-left">
        <h3 className="experience-title">{company}</h3>
        <h4 className="experience-subtitle">{position}</h4>
      </div>
      <div className="experience-header-right">
        <p className="experience-location">{location}</p>
        <p className="experience-duration">{duration}</p>
      </div>
    </div>
    <ul className="experience-details">
      {summary.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);


export const Experience = () => {

  const experiences = [
    {
      "company": "PWI Works",
      "location": "Indiana, United States",
      "position": "Software Developer",
      "duration": "July 2024 - Present",
      "summary": [
        "Developing a Vacations app with Flutter, Dart, and Firebase, centralizing leave management, eliminate reliance on external systems, and automating payroll for 200+ employees, saving HR 15+ hours monthly",
        "Utilizing Firebase and GCP services like Cloud Run, Pub/Sub, Firestore, and Cloud Functions to drive real-time scalability, automate workflows, and manage secure data processing in the leave management system"
       
      ]
  },
  {
      "company": "Stevens Institute of Technology",
      "location": "New Jersey, United States",
      "position": "Web Development Assistant",
      "duration": "Nov 2022 - May 2024",
      "summary": [
        "Optimized SQL queries to access records of over 100k students and orchestrated automated email systems, boosting communication efficiency.",
        "Collaborated with 3 cross-functional teams to implement dynamic course content on the department's website using React.js, improving UI.",
        "Continuously enhanced website functionality by identifying root causes, bug fixes, testing and updating content, achieving 0 downtime."
      ]
  },
  {
      "company": "Anuta Networks",
      "position": "Software Developer",
      "location": "Bengaluru, India",
      "duration": "July 2021 - July 2022",
      "summary": [
        "Developed device management microservice in Node.js for a network orchestration system and created scalable, customer-focused APIs supporting millions of concurrent operations with minimal latency",
        "Designed and implemented a robust CI/CD pipeline with Docker and Jenkins, increasing deployment frequency while reducing failure rates through automated testing and seamless rollbacks",
        "Optimized the network orchestration system using AWS services like ElastiCache, Lambda, and CloudWatch, enhancing performance by 10% through faster data caching, automated scaling, and proactive monitoring for reduced latency"
      ]
  },
  {
      "company": "Infosys Ltd.",
      "position": "Senior Systems Engineer",
      "location": "Bengaluru, India",
      "duration": "June 2018 - July 2021",
      "summary": [
        "Migrated a monolithic platform into a Spring Boot and React driven MVC architecture, enhancing System Modularity",
        "Designed and implemented robust data migration pipelines using Python, ensuring 99% accuracy across 2M+ product and customer records during the transition",
        "Analyzed user feedback during the SDLC, leading to UI/UX enhancements that boosted user engagement by 27% across the e-commerce platform",
        "Leveraged AWS auto-scaling to optimize application resources and migrated the system from Oracle to DynamoDB, which resulted in a 20% reduction in database related delays hence improving system performance",
        "Optimized product search using Solr, and integrated the ELK stack for real-time log analysis and monitoring, enhancing operational efficiency and accelerating issue resolution by 32% for production support team"
      ]
  }
  ];

  return (
    <section id = "experience" className="experience-section">
      <h2 className="section-title"> Professional Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};