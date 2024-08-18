import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import './Education.css';

const EducationCard = ({ institution, studyType, course, duration, gpa, courses }) => (
  <div className="experience-card">
    <h3 className="experience-title">{institution}</h3>
    <h4 className="experience-subtitle">{`${studyType}, ${course} | GPA: ${gpa}`}</h4>
    <p className="experience-duration">{duration}</p>
    <ul className="experience-details">
      {courses.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

export const Education = () => {

  const educations = [
    {
      "institution": "Stevens Institute of Technology, New Jersey",
      "course": "Computer Science",
      "studyType": "MS",
      "duration": "Sept 22 - May 24",
      "gpa": "3.8",
      "courses": ["Web Programming", "Software Design and Analysis", "Human Computer Interaction", "Data Mining"]
  },
  {
    "institution": "Shri GS Institute of Technology and Science, India",
    "course": "Computer Science",
    "studyType": "BS",
    "duration": "Aug 2014 - May 2018",
    "gpa": "3.2",
    "courses": ["Distributed Systems", "Data Structures", "Systems programming", "Object-oriented Design"]
}
    // Add more education entries as needed
  ];

  return (
    <section className="experience-section">
      <h2 className="section-title">Education</h2>
      <div className="experience-container">
        {educations.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </section>
  );
};