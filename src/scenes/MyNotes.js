import React, { useState, useEffect, useRef } from "react";
import { useScroll } from '@use-gesture/react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useTrail, animated } from "react-spring";
import journey from '../img/aboutme_journey.png';
import { H1, H3, H4, H5, H6, Tag, P } from '../css/fonts.js';
import { Name, Title, Intro, OuterFlexBox, RevealContainer, HomeContainer, GlassCover} from '../css/container.js';
import { projectSummary } from '../content.js';
import Navbar from '../components/Navbar.js'
import { device } from '../css/breakpoints.js';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import sd from '../img/logo_UCSD.png';
import uw from '../img/logo_UW.png';
import painting from '../img/home_img1.png';

const App = (props) => {
  // const [state, setState] = useState(false);
  const [trail, setTrail] = useTrail(3, () => ({
    // to: {
    //   position: state ? "fixed":"",
    //   left: state ? "65%":"0",
    //   top: state ? "48px":"0",
    //   // transform: state ? "rotate(20deg)":"rotate(0)",
    //   // transform: i => `rotate(${i*20deg})`
    //   zIndex: "index => index*-1"
    // },
    from: {
      position: "",
      left: "0",
      top: "0",
      transform: "rotate(0)"
    },
  }));

  useEffect(() => {
    let isMounted = true;
    const cards = document.getElementById("cards");
    const sticky = cards.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      console.log("sticky"+sticky);
      console.log("scrolle"+window.pageYOffset);
      if ((window.pageYOffset+100) > sticky) {
        setTrail({
          position: "fixed",
          left: "65%",
          top: "48px"
        });
      } else {
        setTrail({
          position: "",
          left: "0",
          top: "0"
        });
      }
    });
    return () => {
      isMounted = false;
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

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
  <HomeContainer>
  <Navbar/>
  <Intro>
    <H1 center bold>Hi! I'm Yuhan (Hannah) Wang.</H1><br/>
    <H5 bold>I'm an aspiring UX researcher with the vision of supporting evidence-based design, advocating human emotion, and uncovering unheeded opportunities.</H5>
    <H5 bold>My background in cognitive science and web design & development cultivates my ability to empathize with people and translate research insights into actionable decisions.</H5>
    </Intro>
    {/**<OuterFlexBox fixed={state.position} top={state.top} id="cards">**/}
    <OuterFlexBox id="cards">
      {trail.map((props, index) => (
            <Card
              to={projectSummary[index].link}
              style={{...props
              }}

              position={projectSummary[index].position}
              key={index}
              theme={{widthM:"32%", widthS: "100%"}}
            >
              <div>
                <H3>{projectSummary[index].title}</H3>
                <P dangerouslySetInnerHTML={{ __html: projectSummary[index].projectType }} />
              </div>
              <div>
                <P bold dangerouslySetInnerHTML={{ __html: projectSummary[index].summary }} />
              </div>
              <div style={{"width": "60%","paddingTop":"24px"}}>
                <P dangerouslySetInnerHTML={{ __html: projectSummary[index].skills }} style={{"textAlign":"left"}} />
              </div>
              <img src={projectSummary[index].img} alt={projectSummary[index].img} style={{"width": "30%","paddingTop":"24px"}}/>
            </Card>
        ))}
    </OuterFlexBox>
    </HomeContainer>
    <div>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {enable: false},
        fpsLimit: 60,
        particles: {
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20,
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
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 0.1,
              opacity_min: 0.1,
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
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
            bounce: false
          },
          size: {
            value: 100,
            random: true,
            animation: {
              enable: true,
              speed: 3,
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
            random: false,
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
              duration: 2,
              opacity: 0.8,
              speed: 2
            },
            repulse: {
              distance: 200
            },
            remove: {
              quantity: 2
            },
            trail: {
              delay: 0.005,
              quantity: 10
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
        <H1>Hi! I'm Yuhan Wang</H1>
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

export const Card = styled(animated(Link)) `
    position: relative;
    // background-image: linear-gradient(to right bottom, #4081f8, #7dd2f9);
    // background: #A57CE4;
    background-color #aee1f9;
background-image linear-gradient(315deg, #aee1f9 0%, #f6ebe6 74%);

    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    text-align: center;
    border-radius: 20px;
    padding: 1.5em 3em 1.5em 3em;
    // background: #F7F7F7;
    // transform: translatey(0px);
  	// animation: float 4s ease-in-out infinite;
    // animation-name: float;
    // box-shadow: 2px 2px 8px 0px rgb(0,0,0,0.4);
    z-index: 10;
    box-shadow: 0 0 45px 5px rgba(0, 0, 0, .2);
    &:after {
      content: '';
      position: absolute;
      top: -10px;
      right: 10px;
      width: 100.5%;
      height: 99.5%;
      z-index: -10;
      //Glassmorphism
      border-radius: 15px;
      background: rgba( 255, 255, 255, 0.25 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 3.5px );
      -webkit-backdrop-filter: blur( 3.5px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );
      }
    &:hover {
      text-decoration: none;
      /* border: 1px solid #798897; */
      /* box-shadow: 3px 2px 10px 5px #95B0B4; */
      box-shadow: 4px 4px 10px 1px rgb(0,0,0,0.5);
      /* background-color: rgb(0,0,0,0.2); */
    }
    @media ${device.mobileS} {
        padding: ${props => props.theme.paddingS}!important;
        width: ${props => props.theme.widthS}!important;
    }
    @media ${device.tablet} {
        padding: ${props => props.theme.paddingM}!important;
        width: ${props => props.theme.widthM}!important;
    }
    @media ${device.laptopL} {
        padding: ${props => props.theme.paddingL}!important;
    }

  @keyframes float {
  	0% {
  		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  		transform: translatey(0px);
  	}
  	50% {
  		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.2);
  		transform: translatey(-5px);
  	}
  	100% {
  		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  		transform: translatey(0px);
  	}
}
`
export default App;
