import React from "react";
import { Typography, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";
import profile from './../../assets/profile.jpeg';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(4),
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  nameWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(4),
  },
  name: {
    fontSize: '5rem',
    "@media (max-width: 768px)": {
      fontSize: '3.5rem',
    },
  },
  job: {
    fontSize: '2rem',
    marginTop: theme.spacing(0.2), // Add some margin to push it up slightly
    "@media (max-width: 768px)": {
      fontSize: '1.5rem',
    },
  },  
  about: {
    fontSize: '1rem',
    maxWidth: '500px',
    marginTop: theme.spacing(2),
  },
  imageWrapper: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <Box className={classes.contentWrapper}>
        <Box className={classes.textContent}>
          <Box className={classes.nameWrapper}>
            <Typography variant="h1" component="h1" className={classes.name}>
              <TextDecrypt text={`${FirstName} ${LastName}`} />
            </Typography>
            <Box className={classes.imageWrapper}>
              <img src={profile} alt="Profile" className={classes.image} />
            </Box>
          </Box>
          <Typography variant="h2" component="h2" className={classes.job}>
            <TextDecrypt text={`I am a ${Resume.basics.job1}`} />
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};