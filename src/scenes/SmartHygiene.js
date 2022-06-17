import React, { Component } from 'react';
import { H1, H3, H5, P, Subtitle, NextBtn, Highlights, Tag, Title} from '../css/fonts.js';
import { OuterContainer, ShContainer, WholeRow, OuterFlexBox} from '../css/container.js';
import { shContent } from '../content.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../components/Image';
import { CgArrowLongRight } from "react-icons/cg";


class SmartHygiene extends Component {
  render() {
    return (
      <div>
      <OuterContainer>
        <ShContainer>
        <Navbar/>
        <br/><br/>
        <WholeRow>
          <H1 center>Smart Hygiene</H1>
        </WholeRow>
        <div>
          <Subtitle>Context</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: shContent.context }}/>          
        </div>
        <div>
          <Highlights small>Class Project, Sep 2021 - Dec 2020</Highlights>
          <Highlights small>Team: Ruihan Bao, Yimeng Wang</Highlights>
          <Highlights small dangerouslySetInnerHTML={{ __html: shContent.role }}/>
        </div>
        <WholeRow>
          <Title>Exploratory Research</Title>
        </WholeRow>
        <div>
          <Subtitle>Define the project boundary</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: shContent.sd }}/>
        </div>
        <Image src={shContent.sdimg} alt={shContent.sdimg} style={{"width":"100%"}}/>
        <div>
          <Subtitle>Identify current research gap</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: shContent.deskresearch }}/>
        </div>
        <Image src={shContent.drimg} alt={shContent.drimg} style={{"width":"100%"}}/>
        <div>
          <Subtitle>Narrow down the project scope</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: shContent.sdrefine }}/>
        </div>
        <Image src={shContent.rsdimg} alt={shContent.rsdimg} style={{"width":"100%"}}/>
        <div>
          <Subtitle>Gain in-depth understanding</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: shContent.contextual_inquiry }}/>
        </div>
        <Image src={shContent.ciplanimg} alt={shContent.ciplanimg} style={{"width":"100%"}}/>
        <div>
          <Subtitle>Generate insights from observations</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: shContent.cifinding }}/>
        </div>
        <Image src={shContent.ciimg3} alt={shContent.ciimg3} style={{"width":"100%"}}/>
        <WholeRow>
          <Title>Identify and break down problems</Title>
        </WholeRow>
        <WholeRow>
          <Subtitle>Define the problem statement</Subtitle>
          <H3 dangerouslySetInnerHTML={{ __html: shContent.problem }}/>
        </WholeRow>
        <WholeRow>
          <Subtitle>Break down the problem and ask design questions</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: shContent.hypothesis }}/>
          <OuterFlexBox>
            <Highlights theme={{widthM:"30%", widthS: "100%"}}>
              <P dangerouslySetInnerHTML={{ __html: shContent.question1 }}/>
            </Highlights>
            <Highlights theme={{widthM:"30%", widthS: "100%"}}>
              <P dangerouslySetInnerHTML={{ __html: shContent.question2 }}/>
            </Highlights>
            <Highlights theme={{widthM:"30%", widthS: "100%"}}>
              <P dangerouslySetInnerHTML={{ __html: shContent.question3 }}/>
            </Highlights>
          </OuterFlexBox>
        </WholeRow>
        <WholeRow>
          <Title>Design ideas and prototype</Title>
        </WholeRow>
        <WholeRow>
          <Subtitle>Design idea and hypothesis</Subtitle>
          <H3>We hypothesizes that by making the invisible bacteria visible, the strong visual impact
          will push students to improve cleaning behaviors.</H3>
        </WholeRow>
        <WholeRow>
          <Subtitle>Brainstorm and Low-fidelity prototype</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: shContent.solution }}/>
            <OuterFlexBox>
              <Highlights theme={{widthM:"30%", widthS: "100%"}}>
                <P dangerouslySetInnerHTML={{ __html: shContent.feature1 }}/>
              </Highlights>
              <Highlights theme={{widthM:"30%", widthS: "100%"}}>
                <P dangerouslySetInnerHTML={{ __html: shContent.feature2 }}/>
              </Highlights>
              <Highlights theme={{widthM:"30%", widthS: "100%"}}>
                <P dangerouslySetInnerHTML={{ __html: shContent.feature3 }}/>
              </Highlights>
            </OuterFlexBox>
        </WholeRow>
        <WholeRow>
          <Image src={shContent.pocpimg1} alt={shContent.pocpimg1} style={{"width":"100%"}}/>
        </WholeRow>
        <WholeRow>
          <Title>Evaluate the design idea</Title>
        </WholeRow>
        <div>
          <Subtitle>Define testing objectives</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: shContent.utgoal }}/>
        </div>
        <img src={shContent.pocpimg} alt={shContent.pocpimg} style={{"width":"100%"}}/>
        <WholeRow>
          <Subtitle>Draft the test plan and recruit participants</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: shContent.utgoal }}/>
        </WholeRow>
        <WholeRow>
        <OuterFlexBox>
          <Highlights theme={{widthM:"30%", widthS: "100%"}}>
            <P dangerouslySetInnerHTML={{ __html: shContent.ut_methods}}/>
          </Highlights>
          <Highlights theme={{widthM:"30%", widthS: "100%"}}>
            <P dangerouslySetInnerHTML={{ __html: shContent.ut_participant }}/>
          </Highlights>
          <Highlights theme={{widthM:"30%", widthS: "100%"}}>
            <P bold>Use the iPhone magnifier to mimic the effect of bacteria sensor.</P>
            <img src={shContent.magnifier} alt={shContent.magnifier} style={{"width":"100%"}}/>
          </Highlights>
        </OuterFlexBox>
        </WholeRow>
        <WholeRow>
          <Subtitle>Findings</Subtitle>
          <OuterFlexBox>
            <Highlights theme={{widthM:"30%", widthS: "100%"}}>
              <P dangerouslySetInnerHTML={{ __html: shContent.finding1 }}/>
            </Highlights>
            <Highlights theme={{widthM:"30%", widthS: "100%"}}>
              <P dangerouslySetInnerHTML={{ __html: shContent.finding2 }}/>
            </Highlights>
            <Highlights theme={{widthM:"30%", widthS: "100%"}}>
              <P dangerouslySetInnerHTML={{ __html: shContent.finding3 }}/>
            </Highlights>
          </OuterFlexBox>
        </WholeRow>
        <WholeRow>
          <Subtitle>Reflections</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: shContent.learnings }}/>
        </WholeRow>
        <br/><br/>
        <WholeRow><Footer/></WholeRow>
          <NextBtn to={shContent.link}>
            <CgArrowLongRight/>
          </NextBtn>
      </ShContainer>

      </OuterContainer>
      </div>
    );
  }
}

export default SmartHygiene;
