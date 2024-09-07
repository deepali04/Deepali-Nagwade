import React from "react";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import "./TopNavbar.css"; // Renamed back to SideNavbar.css
import ResumePDF from './../../assets/Deepali_Nagwade_SDE.pdf';

export const TopNavbar = () => { // Renamed back to SideNavbar
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className="side-navbar">
      <a href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <Typography>
          Home
        </Typography>
      </a>
      <a href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <Typography>
          Experience
        </Typography>
      </a>
      <a href="#education"
        onClick={() => setActiveNav('#education')}
        className={activeNav === '#education' ? 'active' : ''}
      >
        <Typography>
          Education
        </Typography>
      </a>
      <a href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}
      >
        <Typography>
          Projects
        </Typography>
      </a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <Typography>
          Contact
        </Typography>
      </a>
      <a 
          href={ResumePDF} 
          target="_blank" 
          rel="noopener noreferrer" 
      >
        <Typography>
          Resume
        </Typography>
      </a>
    </nav>
  );
};