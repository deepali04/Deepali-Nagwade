/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.jpeg';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}, I am a passionate full-stack web developer based in New York City, wielding the power of React, Node.js, GraphQL, and APIs to transform ideas into reality. With four years of industry experience and the continuous learning journey of a master's student, I blend theoretical knowledge with practical skills to craft seamless, scalable, and engaging web solutions. Dive into my portfolio to explore how I navigate the complexities of web development to deliver projects that stand at the intersection of creativity and technology. Let's build the future, one line of code at a time.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain', 
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h3' variant="h6">
              {greetings}
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
