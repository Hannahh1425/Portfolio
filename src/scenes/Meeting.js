import React, { Component } from 'react';
import { H1, H3, H5, P, Subtitle, NextBtn } from '../css/fonts.js';
import { OuterContainer } from '../css/container.js';
import { meetingContent } from '../content.js';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../components/Image';

class Meeting extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          {/**<InnerContainer>
            <br/><br/><br/><br/>
            <br/><br/><br/>
            <H1 large center>{meetingContent.title}</H1>
            <br/><br/><br/><br/>
            <img src={meetingContent.header} alt={meetingContent.header} style={{"width":"100%"}}/>
            <br/><br/><br/><br/><br/>
            <Subtitle>OVERVIEW</Subtitle>
            <H3>Meeting APPropriately is a personal project about participant engagement in meetings — </H3>

            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.intro }} />
            <br/>
            <TwoCol>
              <P dangerouslySetInnerHTML={{ __html: meetingContent.other }} />
              <H5 dangerouslySetInnerHTML={{ __html: meetingContent.role }} />
            </TwoCol>
          </InnerContainer>
        <OuterContainer>
          <InnerContainer>

            <br/><br/><br/><br/><br/>
            <Transition dangerouslySetInnerHTML={{ __html: meetingContent.transition }} />

            <br/><br/><br/><br/><br/>
            <Subtitle>DESK RESEARCH</Subtitle>
            <H3>Learn what's already known about meeting engagement — </H3>
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.step1 }} />
            <br/>
            <Image src={meetingContent.img1_2} alt={meetingContent.img1_2}/>
            <br/><br/>
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.step1_2 }} />
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.step1_1 }} />

            <br/><br/>
            <Subtitle>USER INTERVIEWS</Subtitle>
            <H3>Extending research to learn from people around me — </H3>
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.step2 }} />
            <br/>
            <Image src={meetingContent.img2_2} alt={meetingContent.img2_2}/>
            <br/>
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.step1_2 }} />
            <br/>
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.step2_1 }} />
            <br/><br/>
            <Subtitle>AHA MOMENT!</Subtitle>
            <H3>Lack of transparency is an important factor — </H3>
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.step3 }} />
            <br/><br/>

            <Subtitle>PROBLEM REDEFINITION</Subtitle>
            <H3>How to facilitate transparency among meeting members in meetings?</H3>
            <br/><br/><br/><br/>
            <Transition dangerouslySetInnerHTML={{ __html: meetingContent.transition2 }} />
            <br/><br/><br/><br/>
            <Subtitle>COMPETITIVE ANALYSIS</Subtitle>
            <H3>Understand current technology in faciliating meetings — </H3>
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.step5 }} />
            <Image src={meetingContent.img5} alt={meetingContent.img5}/>

            <br/><br/><br/>
            <Subtitle>brAINSTORMING</Subtitle>
            <H3>brainstorm key features and possible use cases — </H3>
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.step6 }} />
            <TwoCol even>
              <Image src={meetingContent.img6} alt={meetingContent.img6}/>
              <Image src={meetingContent.img6_1} alt={meetingContent.img6_1}/>
            </TwoCol>
            <br/><br/><br/>
            <Subtitle>RAPID PROTOTYPING</Subtitle>
            <H3>Sketch alternative designs quickly — </H3>
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.step7 }} />
            <TwoCol even>
              <Image src={meetingContent.img7_1} alt={meetingContent.img7_1}/>
              <Image src={meetingContent.img7_2} alt={meetingContent.img7_2}/>
            </TwoCol>
            <br/><br/><br/>
            <Subtitle>LOW-FI PROTOTYPE</Subtitle>
            <H3>Create low-fi prototypes —</H3>
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.step8 }} />
            <Image src={meetingContent.img8} alt={meetingContent.img8}/>
            <br/><br/><br/>
            <H3>CURRENT STATE</H3>
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.results }} /><br/>
            <img src={meetingContent.result} alt={meetingContent.result} style={{"width":"100%"}}/>
              <br/><br/><br/>
              <H3>TAKEAWAYS</H3>
              <H5 dangerouslySetInnerHTML={{ __html: meetingContent.takeaway }} />
            <br/><br/>
            <H3>FURTHER STEPS</H3>
            <H5 dangerouslySetInnerHTML={{ __html: meetingContent.future }} />
          </InnerContainer>
        </OuterContainer>
        <NextBtn to={meetingContent.link}>
          <div dangerouslySetInnerHTML={{ __html: meetingContent.action }} />
        </NextBtn>
        <br/><br/><br/><br/>**/}
        <Footer/>
      </div>
    );
  }
}

export default Meeting;
