/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'All Football', 
      description: `All Football is a European football live score website provides all the real-time updates on all the latest football matches and scores across the continent. You can also interact with people.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'YASMP: Yet Another Social Media Platform', 
      description: `YASMP is React based Instagram clone that lets users establish their profile and publish their content in many genres, allowing them to share posts and interact with a group of like-minded individuals.`,
      alter: 'VeriTru Project',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'Efficient-Search-Engine', 
      description: `This project develops an efficient search engine designed to provide relevant search results. Leveraging advanced algorithms, it indexes web content meticulously, prioritizes high-quality results`,
      alter: 'LoFo Project',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'AURA: Australian Rainfall Prediction', 
      description: `This project employs applying data analysis techniques on weather observation data to accurately predict the occurrence of rainfall in Australia, delineating predictions into binary `,
      alter: 'Startup Project',
      image: `${Lacalle}`,
    },
    { 
      id: 5,
      title: 'Automated Call Routing System', 
      description: `A simplified version of mobile phone tracking system was implemented to handle queries for adding mobile phones over local exchange areas, changing their location and finding lowest routing path to establish a connection between two  `,
      alter: 'Startup Project',
      image: `${Lacalle}`,
    },
    { 
      id: 6,
      title: 'Trivia Pulse: A Quiz website', 
      description: `This platform has been meticulously crafted to provide users with an engaging and intellectually stimulating experience. Whether you're a quiz enthusiast or just looking for a unique way to challenge yourself, our trivia  `,
      alter: 'Startup Project',
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                {project.title}
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
