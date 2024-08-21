import React from 'react';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { TopNavbar } from '../components/nav/TopNavbar';
import { Projects } from '../components/projects/Projects';
import { Contact } from '../components/contact/Contact';
import { Experience } from '../components/experience/Experience';
import { Education } from '../components/education/Education';
import { Certifications } from  '../components/certifications/Certifications';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <TopNavbar />
      <div className={classes.root} id="home">
        <DisplacementSphere />
        <Content />
        <ThemeToggle />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
      </div>
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
};