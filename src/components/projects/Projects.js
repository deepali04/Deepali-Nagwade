import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './Projects.css';
import goalGlobe from '../../assets/projects/goalGlobe.jpeg';


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
  },
}));

const ProjectCard = ({ title, description, image, link }) => (
  <div className="project-card">
    <div className="project-image-container">
      <img src={image} alt={title} className="project-image" />
    </div>
    <div className="project-content">
      <h3 className="project-title">{title}</h3>
      <div className="project-details">
        <p>{description}</p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
        View Project
      </a>
    </div>
  </div>
);

export const Projects = () => {
  const classes = useStyles();
  const projects = [
    {
      title: 'All Football',
      description: `All Football is a European football live score website provides all the real-time updates on all the latest football matches and scores across the continent. You can also interact with people.`,
      image: goalGlobe,
      link: "https://example.com/all-football"
    },
    {
      title: 'YASMP: Yet Another Social Media Platform',
      description: `YASMP is React based Instagram clone that lets users establish their profile and publish their content in many genres, allowing them to share posts and interact with a group of like-minded individuals.`,
      image: '',
      link: "https://example.com/yasmp"
    },
    {
      title: 'All Football',
      description: `All Football is a European football live score website provides all the real-time updates on all the latest football matches and scores across the continent. You can also interact with people.`,
      image: goalGlobe,
      link: "https://example.com/all-football"
    },
    {
      title: 'All Football',
      description: `All Football is a European football live score website provides all the real-time updates on all the latest football matches and scores across the continent. You can also interact with people.`,
      image: goalGlobe,
      link: "https://example.com/all-football"
    },
    {
      title: 'All Football',
      description: `All Football is a European football live score website provides all the real-time updates on all the latest football matches and scores across the continent. You can also interact with people.`,
      image: goalGlobe,
      link: "https://example.com/all-football"
    },
    {
      title: 'All Football',
      description: `All Football is a European football live score website provides all the real-time updates on all the latest football matches and scores across the continent. You can also interact with people.`,
      image: goalGlobe,
      link: "https://example.com/all-football"
    }
    // ... other projects ...
  ];

  return (
    <section id="projects" className="projects-section">
      <Container component="main" className={classes.main}>
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};