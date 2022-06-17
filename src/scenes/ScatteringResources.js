import React, { Component } from 'react';
import { H1, H3, H5, P, Subtitle, NextBtn, Highlights, Tag, Important, Title } from '../css/fonts.js';
import { WholeRow, OuterContainer, SweetContainer, OuterFlexBox } from '../css/container.js';
import { srContent } from '../content.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../components/Image';
import { CgArrowLongRight } from "react-icons/cg";


class ScatteringResources extends Component {
  render() {
    return (
      <OuterContainer>
        <SweetContainer>
        <Navbar/>
        <br/><br/>
        <WholeRow>
          <H1 center>Scattering Resources</H1>
        </WholeRow>
        <div>
          <Subtitle>Meet the client</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: srContent.context }}/>
          <img src={srContent.contextimg} alt={srContent.contextimg} style={{"width":"100%"}}/>
        </div>
        <div>
          <Highlights small>Volunteer Project, Nov 2021 - Feb 2022</Highlights>
          <Highlights small>2 PMs, 2 UX Designers, 1 Developer</Highlights>
          <Highlights small dangerouslySetInnerHTML={{ __html: srContent.role }}/>
        </div>
        <WholeRow>
          <Title>Project timeline and research objectives</Title>
        </WholeRow>
        <div>
          <Subtitle>Understand client's problems and goals</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: srContent.client_goal }}/>
        </div>
        <div>
          <Subtitle>Define research goal</Subtitle>
          <H3 dangerouslySetInnerHTML={{ __html: srContent.goal }}/>
        </div>
        <WholeRow>
          <img src={srContent.planimg} alt={srContent.planimg} style={{"width":"100%"}}/>
        </WholeRow>
        <WholeRow>
          <Title>Research process and recommendation</Title>
        </WholeRow>
        <div>
          <Subtitle>User interview insights</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: srContent.insight }}/>
        </div>
        <img src={srContent.interviewimg} alt={srContent.interviewimg} style={{"width":"100%"}}/>
        <div>
          <Subtitle>Design recommendation</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: srContent.design1 }}/>
        </div>
        <img src={srContent.design1img} alt={srContent.design1img} style={{"width":"100%"}}/>
        <div>
          <Subtitle>Usability testing insights</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: srContent.utissue }}/>
        </div>
        <img src={srContent.utdataimg} alt={srContent.utdataimg} style={{"width":"100%"}}/>
        <WholeRow>
          <Subtitle>IMPACTS</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: srContent.impact }} />
        </WholeRow>
        <br/><br/>

          <NextBtn to={srContent.link}>
          <CgArrowLongRight/>
          </NextBtn>
        <WholeRow><Footer/></WholeRow>
      </SweetContainer>
      </OuterContainer>
    );
  }
}

export default ScatteringResources;
