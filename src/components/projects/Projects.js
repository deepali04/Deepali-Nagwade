import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './Projects.css';
import goalGlobe from '../../assets/projects/goalGlobe.jpeg';
import callRouting from '../../assets/projects/callrouting.jpeg';
import efficientSearch from '../../assets/projects/efficientSearch.jpeg';
import trivia from '../../assets/projects/trivia.jpeg';
import yasmp from '../../assets/projects/yasmp.jpeg';
import aura from '../../assets/projects/aura.jpeg';
import streaming from '../../assets/projects/streaming.jpeg'


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
      title: 'Streamlytics: Content Streaming and Analytics',
      description: `Developed a Netflix-like content streaming platform on AWS using Spring Boot and GraphQL, tested with simulated traffic to handle real-time personalized recommendations and process 1M+ user interactions daily. Leveraged Apache Kafka for streaming and AWS Lambda for automated content ingestion, achieving 40% faster content delivery`,
      image: streaming,
      link: "https://github.com/deepali04/AllFootball"
    },
    {
      title: 'All Football',
      description: `All Football is a European football live score website provides all the real-time updates on all the latest football matches and scores across the continent. You can also interact with people.`,
      image: goalGlobe,
      link: "https://github.com/deepali04/AllFootball"
    },
    {
      title: 'YASMP: Yet Another Social Media Platform',
      description: `YASMP is React based Instagram clone that lets users establish their profile and publish their content in many genres, allowing them to share posts and interact with a group of like-minded individuals.`,
      image: yasmp,
      link: "https://github.com/deepali04/YASMP"
    },
    {
      title: 'Efficient Search Engine',
      description: `The project develops an efficient search engine designed to provide relevant search results. Leveraging advanced algorithms, it indexes web content meticulously, prioritizes high-quality information, and optimizes responses to user queries, offering an unparalleled browsing experience.`,
      image: efficientSearch,
      link: "https://github.com/deepali04/Efficient-Search-Engine"
    },
    {
      title: 'AURA: Australian Rainfall Prediction',
      description: `The project employs applying data analysis techniques on weather observation data to accurately predict the occurrence of rainfall in Australia, delineating predictions into binary outcomes: '1' indicating the anticipation of rain, and '0' signifying dry conditions.`,
      image: aura,
      link: "https://github.com/deepali04/AustralianRainfallPrediction"
    },
    {
      title: 'Automated-Call-Routing-System',
      description: `A simplified version of mobile phone tracking system was implemented to handle queries for adding mobile phones over local exchange areas, changing their location and finding lowest routing path to establish a connection between two mobile phones.`,
      image: callRouting,
      link: "https://github.com/deepali04/Automated-Call-Routing-System"
    },
    {
      title: 'Trivia Pulse: A Quiz website',
      description: `This platform has been meticulously crafted to provide users with an engaging and intellectually stimulating experience. Whether you're a quiz enthusiast or just looking for a unique way to challenge yourself, our trivia website offers a diverse range of categories and features`,
      image: trivia,
      link: "https://github.com/deepali04/Trivia-Pulse"
    }
    // ... other projects ...
  ];

  return (
    <section id="projects" className="projects-section">
      <Container component="main" className={classes.main}>
        <h2 className="section-title"> Personal Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};