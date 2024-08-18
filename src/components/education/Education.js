import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import './Education.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
}));

export const Education = () => {
  const classes = useStyles();
  const greetings = "My education.";

  const educations = [
    {
      school: "University 1",
      degree: "Degree 1",
      duration: "Duration 1",
      description: "Description 1",
    },
    {
      school: "University 2",
      degree: "Degree 2",
      duration: "Duration 2",
      description: "Description 2",
    },
    // Add more education entries as needed
  ];

  return (
    <section id="education">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="education-container">
          {educations.map((edu, index) => (
            <div key={index} className="education">
              <div className="_form_wrapper">
                <h3>{edu.school}</h3>
                <h4>{edu.degree}</h4>
                <p>{edu.duration}</p>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};