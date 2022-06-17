import React, { useState, useEffect, useRef } from "react";
import { useScroll } from '@use-gesture/react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useTrail, animated } from "react-spring";
import journey from '../img/aboutme_journey.png';
import { H1, H2, H3, H4, H5, H6, Tag, P } from '../css/fonts.js';
import { Name, Card, Title, Intro, TagContainer, OuterFlexBox, RevealContainer, HomeContainer, GlassCover} from '../css/container.js';
import { projectSummary } from '../content.js';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer';
import { device } from '../css/breakpoints.js';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import sd from '../img/logo_UCSD.png';
import uw from '../img/logo_UW.png';
import painting from '../img/home_img1.png';

const App = (props) => {


  return (
  <div>
  <Navbar/>
  <HomeContainer>
  <Intro top theme={{widthL:"50%", widthS: "100%"}}>
    <H1 center bold>Hi! I'm Yuhan Wang.</H1><br/>
    <H5 center bold>I’m a UX researcher who represents human needs and facilitates data-driven decision making to create meaningful experiences. Currently, I'm pursuing a master's degree at the University of Washington.</H5>
    {/**<H5 bold>I'm an aspiring UX researcher with the vision of supporting evidence-based design, advocating human emotion, and uncovering unheeded opportunities.</H5>
    <H5 bold>My background in cognitive science and web design & development cultivates my ability to empathize with people and translate research insights into actionable decisions.</H5>**/}
  </Intro>
  <Intro theme={{widthL:"60%", widthS: "100%"}}>
      {projectSummary.map(project => (
            <Card
              to={project.link}
              position={project.position}
              key={project.id}
              background={project.img}
            >

              <img src={project.img} alt={project.img} style={{"width": "170px","height":"170px"}}/>
              <div style={{"width":"70%"}}>

                <H2 bold dangerouslySetInnerHTML={{ __html: project.summary }} />
                  <TagContainer>
                  {project.projectType.map(type => (
                      <Tag white>{type}</Tag>
                  ))}
                </TagContainer>
                <TagContainer>
                {project.skills.map(skill => (
                    <Tag>{skill}</Tag>
                ))}
              </TagContainer>
              </div>
            </Card>
        ))}
    </Intro>
    </HomeContainer>
    <br/><br/><br/>
    <Footer/>
  {/**  <div>

  <HomeContainer>
      <GlassCover>
        <P>Technology is evolving at a stunning pace, but humans don't evolve as fast.
          Sometimes I feel that I'm being pushed by everything that goes around me,
          without the time to stop and think. Even worse, when I have time, I might automatically
          swipe my phone and look for the next stimulus. I don't want to take things for granted.
          When you think of it, everything is designed. And it shapes people's behaviors without them
          being aware of it. I want to defend users.
        </P>
        <img src={sd} alt={sd} style={{"width":"10%"}}/>
        <img src={uw} alt={uw} style={{"width":"10%"}}/>
      </GlassCover>
    </HomeContainer>
    </div>**/}
  </div>
);
};

export default App;
