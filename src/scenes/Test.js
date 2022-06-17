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
import { device } from '../css/breakpoints.js';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import sd from '../img/logo_UCSD.png';
import uw from '../img/logo_UW.png';
import painting from '../img/home_img1.png';

const App = (props) => {
  const particlesInit = async (main) => {
      console.log(main);

      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(main);
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };

  return (
  <div>
  <Navbar/>
  <HomeContainer>
  <Intro top theme={{widthL:"50%", widthS: "100%"}}>
    <H1 center bold>Hi! I'm Yuhan Wang.</H1><br/>
    <H5 center bold>I’m a UX researcher who represents human needs and facilitates data-driven decision making to create meaningful experiences. Currently, I'm a master's student at University of Washington.</H5>
    {/**<H5 bold>I'm an aspiring UX researcher with the vision of supporting evidence-based design, advocating human emotion, and uncovering unheeded opportunities.</H5>
    <H5 bold>My background in cognitive science and web design & development cultivates my ability to empathize with people and translate research insights into actionable decisions.</H5>**/}
  </Intro>
  <Intro theme={{widthL:"55%", widthS: "100%"}}>
      {projectSummary.map(project => (
            <Card
              to={project.link}
              position={project.position}
              key={project.id}
              background={project.img}
            >

              <img src={project.img} alt={project.img} style={{"width": "150px","height":"150px"}}/>
              <div style={{"width":"70%"}}>

                <H2 bold dangerouslySetInnerHTML={{ __html: project.summary }} />
                <br/>
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
    <div>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 8,
            limit: 600
          },
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 180,
              sync: true
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "https://cdn.matteobruni.it/images/particles/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0,
              sync: false
            }
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 10,
            straight: false,
            bounce: false
          },
          size: {
            value: 100,
            random: true,
            animation: {
              enable: true,
              speed: 12,
              minimumValue: 50,
              sync: false,
              destroy: "max"
            }
          },
          links: {
            enable: false
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outMode: "destroy",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onhover: {
              enable: true,
              mode: "trail"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 0.2,
              opacity: 0.8,
              speed: 2
            },
            repulse: {
              distance: 200
            },
            remove: {
              quantity: 100
            },
            trail: {
              delay: 0.005,
              quantity: 10,
            }
          }
        },
        retina_detect: true,
          background: {
            color: "#000000",
            image: `url(${painting})`,
            position: "100% 100%",
            repeat: "no-repeat",
            size: "cover"
          },
          backgroundMask: {
            enable: true,
            cover: {
              color: "#F7F7F7"
            }
          }
      }}
    />
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
    </div>
  </div>
);
};

export default App;
