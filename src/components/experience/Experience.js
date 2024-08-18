import React from "react";
import { Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import './Experience.css';

const ExperienceCard = ({ company, position, duration, summary }) => (
  <div className="experience-card">
    <h3 className="experience-title">{company}</h3>
    <h4 className="experience-subtitle">{position}</h4>
    <p className="experience-duration">{duration}</p>
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
      "position": "Software Developer",
      "duration": "July 2024",
      "summary": [
        "Optimized SQL queries to access records of over 100k students and orchestrated automated email systems, boosting communication efficiency.",
        "Collaborated with 3 cross-functional teams to implement dynamic course content on the department's website using React.js, improving UI.",
        "Continuously enhanced website functionality by identifying root causes, bug fixes, testing and updating content, achieving 0 downtime."
      ]
  },
  {
      "company": "Stevens Institute of Technology",
      "position": "Web Development Assistant",
      "duration": "Nov 2022",
      "summary": [
        "Optimized SQL queries to access records of over 100k students and orchestrated automated email systems, boosting communication efficiency.",
        "Collaborated with 3 cross-functional teams to implement dynamic course content on the department's website using React.js, improving UI.",
        "Continuously enhanced website functionality by identifying root causes, bug fixes, testing and updating content, achieving 0 downtime."
      ]
  },
  {
      "company": "Anuta Networks",
      "position": "Software Developer",
      "duration": "July 2021",
      "summary": [
        "Worked on developing 3 different microservices in Node.js and created scalable, customer-focused APIs supporting millions of concurrent operations with minimal latency.",
        "Created user profile verification with OAuth integration to enhance authentication security.Engineered a robust DevOps CI/CD pipeline using Docker and Jenkins, improving deployment frequency by 40% and reducing failures",
        "Continuously enhanced website functionality by identifying root causes, bug fixes, testing and updating content, achieving 0 downtime.",
        "Proactively addressed 25+ potential hot issues by leveraging Agile practices like Scrum and Kanban",
        "Conducted in-depth Root Cause Analyses for each issue, providing detailed documentation to ensure consistent resolution strategies and enhance operational stability Enhanced application performance by 10% with Amazon ElastiCache and AWS Lambda for serverless computing, reducing operational costs"
      ]
  },
  {
      "company": "Infosys Ltd",
      "position": "Senior Systems Engineer",
      "duration": "June 2018",
      "summary": [
        "Reengineered a monolithic platform into a Spring Boot and React driven MVC architecture, enhancing System Modularity.",
        "Designed validation pipelines utilizing Python for data processing and comparison, achieving a 99% accuracy rate across 2M+ migrated records",
        "Executed automation of maintenance tasks using Python and Shell scripts, accomplishing a 37% reduction in manual task handling. Analyzed user feedback at each SDLC phase, leading to UI/UX features improvements; increased user engagement by 40%",
        "Proactively addressed 25+ potential hot issues by leveraging Agile practices like Scrum and Kanban",
        "Conducted in-depth Root Cause Analyses for each issue, providing detailed documentation to ensure consistent resolution strategies and enhance operational stability Enhanced application performance by 10% with Amazon ElastiCache and AWS Lambda for serverless computing, reducing operational costs",
        "Leveraged AWS auto-scaling to optimize application resources and migrated the system from Oracle to DynamoDB, which resulted in a 20% reduction in database related delays hence improving system performance Lowered response times by 40% by building dashboards for monitoring production metrics using Grafana and PostgreSQL"
      ]
  }
  ];

  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};