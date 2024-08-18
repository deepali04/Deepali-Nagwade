import React from "react";
import { Typography, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";
import profile from '../../assets/profile.jpeg';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(6),
    "@media (max-width: 768px)": {
      flexDirection: 'column',
    },
  },
  imageWrapper: {
    width: '300px',
    height: '400px',
    flexShrink: 0,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  name: {
    fontSize: '4rem',
    "@media (max-width: 768px)": {
      fontSize: '3rem',
    },
  },
  job: {
    fontSize: '2rem',
    "@media (max-width: 768px)": {
      fontSize: '1.5rem',
    },
  },
  about: {
    fontSize: '1rem',
    maxWidth: '500px',
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <Box className={classes.contentWrapper}>
        <Box className={classes.imageWrapper}>
          <img src={profile} alt="Profile" className={classes.image} />
        </Box>
        <Box className={classes.textContent}>
          <Typography variant="h1" component="h1" className={classes.name}>
            <TextDecrypt text={`${FirstName} ${LastName}`} />
          </Typography>
          <Typography variant="h2" component="h2" className={classes.job}>
            <TextDecrypt text={`${Resume.basics.job1}`} />
          </Typography>
          <Typography variant="body1" component="p" className={classes.about}>
            {Resume.basics.summary || "A brief description about yourself goes here. You can customize this in your resume.json file."}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};