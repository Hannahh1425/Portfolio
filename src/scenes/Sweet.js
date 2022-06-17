import React, { Component } from 'react';
import { P, H1, H3, H5, Title, Subtitle, NextBtn, Highlights, Tag } from '../css/fonts.js';
import { OuterContainer, ShContainer, Roles, WholeRow, OuterFlexBox } from '../css/container.js';
import { sweetContent } from '../content.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../components/Image';
import { CgArrowLongRight } from "react-icons/cg";


class Sweet extends Component {
  render() {
    return (
      <OuterContainer>
        <ShContainer>
        <Navbar/>
        <br/><br/>
        <WholeRow>
          <H1 center>Sweet</H1>
        </WholeRow>
        <div>
          <Subtitle>PROJECT OVERVIEW</Subtitle>
          <H5>In order to understand why user purchase rate was low, I designed an end-to-end research, conducted surveys and follow-up interviews to understand user attitudes and pain points. Research revealed issues in the services we provided and suggested viable next steps.</H5>
        </div>
        <div>
          <Highlights small>Internship, Apr 2020 - Sep 2020</Highlights>
          <Highlights small dangerouslySetInnerHTML={{ __html: sweetContent.role }}/>
        </div>
        <WholeRow>
          <Title>Understanding Context</Title>
        </WholeRow>
        <div>
          <Subtitle>Business needs and problems</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: sweetContent.context }}/>
        </div>
        <Image src={sweetContent.contextimg} alt={sweetContent.contextimg} style={{"width":"100%"}}/>
        <div>
          <Subtitle>Advocate UX Research</Subtitle>
          <H5>While my team planned to launch new services based on assumption, I realized the lack of user insights. After communicating, the founder agreed to conduct UX research to understand user attitudes and pain points.</H5>
        </div>
        <Image src={sweetContent.challengeimg} alt={sweetContent.challengeimg} style={{"width":"100%","margin":"auto"}}/>
        <WholeRow>
          <Title>Define Research Objectives with Stakeholders</Title>
        </WholeRow>
        <WholeRow>
          <Subtitle>Define research goal</Subtitle>
          <H3 dangerouslySetInnerHTML={{ __html: sweetContent.goal }}/>
        </WholeRow>
        <WholeRow>
          <Subtitle>Break down the problem</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: sweetContent.questions }}/>
        </WholeRow>
        <WholeRow>
          <Subtitle>Identify target users and select methods</Subtitle>
          <OuterFlexBox>
          <Highlights  theme={{widthM:"48%", widthS: "100%"}}>
            <P dangerouslySetInnerHTML={{ __html: sweetContent.audience }}/>
          </Highlights>
          <Highlights  theme={{widthM:"48%", widthS: "100%"}}>
            <P dangerouslySetInnerHTML={{ __html: sweetContent.methods }}/>
          </Highlights>
          </OuterFlexBox>
        </WholeRow>
        <WholeRow>
          <Title>Execute Research</Title>
        </WholeRow>
        <WholeRow>
          <Subtitle>Design and distribute survey</Subtitle>
            <OuterFlexBox>
              <Highlights theme={{widthM:"24%", widthS: "100%"}}>
                <P dangerouslySetInnerHTML={{ __html: sweetContent.survey1 }}/>
              </Highlights>
              <Highlights theme={{widthM:"24%", widthS: "100%"}}>
                <P dangerouslySetInnerHTML={{ __html: sweetContent.survey2 }}/>
              </Highlights>
              <Highlights theme={{widthM:"24%", widthS: "100%"}}>
                <P dangerouslySetInnerHTML={{ __html: sweetContent.survey3 }}/>
              </Highlights>
              <Highlights theme={{widthM:"24%", widthS: "100%"}}>
                <P dangerouslySetInnerHTML={{ __html: sweetContent.survey4 }}/>
              </Highlights>
            </OuterFlexBox>
        </WholeRow>
        {/**<img src={sweetContent.processimg} alt={sweetContent.processimg} style={{"width":"100%"}}/>**/}
          <div>
            <Subtitle>Analyze data to answer research questions</Subtitle>
            <H5 dangerouslySetInnerHTML={{ __html: sweetContent.surveyresult }}/><br/>
            <Subtitle>Limitations</Subtitle>
            <H5 dangerouslySetInnerHTML={{ __html: sweetContent.surveylimitation }}/>
          </div>
          <div>
            <Subtitle center black thin>Data Analysis</Subtitle>
            <Image src={sweetContent.daimg} alt={sweetContent.daimg} style={{"width":"100%"}}/>
          </div>
          <WholeRow>
            <Subtitle>Conduct follow-up interviews</Subtitle>
            <H5 dangerouslySetInnerHTML={{ __html: sweetContent.interview }}/>
              <OuterFlexBox>
                <Highlights theme={{widthM:"30%", widthS: "100%"}}>
                  <P left dangerouslySetInnerHTML={{ __html: sweetContent.interviewgoal }}/></Highlights>
                <Highlights theme={{widthM:"30%", widthS: "100%"}}>
                  <P left dangerouslySetInnerHTML={{ __html: sweetContent.interviewaudience }}/></Highlights>
                <Highlights theme={{widthM:"30%", widthS: "100%"}}>
                  <P left dangerouslySetInnerHTML={{ __html: sweetContent.interviewquestions }}/></Highlights>
              </OuterFlexBox>
            </WholeRow>
            <WholeRow>
            <Subtitle>Findings</Subtitle>
            <H5 dangerouslySetInnerHTML={{ __html: sweetContent.interviewresult }}/><br/>
            <Subtitle>Limitations</Subtitle>
            <H5 dangerouslySetInnerHTML={{ __html: sweetContent.interviewlimitation }} /><br/>
          </WholeRow>
          {/**<div>
            <Subtitle center black thin>User Quotes</Subtitle>
            <Tag left dangerouslySetInnerHTML={{ __html: sweetContent.userquotes }}/>
          </div>**/}
          <WholeRow>
            <Title>Recommendations & Impacts</Title>
          </WholeRow>
          <WholeRow>
            <Subtitle>Provide recommendations based on research findings</Subtitle>
            <OuterFlexBox>
              <Highlights theme={{widthM:"32%", widthS: "100%"}}>
                <P left dangerouslySetInnerHTML={{ __html: sweetContent.recommend1 }}/></Highlights>
              <Highlights theme={{widthM:"32%", widthS: "100%"}}>
                <P left dangerouslySetInnerHTML={{ __html: sweetContent.recommend2 }}/></Highlights>
              <Highlights theme={{widthM:"32%", widthS: "100%"}}>
                <P left dangerouslySetInnerHTML={{ __html: sweetContent.recommend3 }}/></Highlights>
            </OuterFlexBox>
          </WholeRow>
          <WholeRow>
          <Subtitle>IMPACTS</Subtitle>
          <H5 dangerouslySetInnerHTML={{ __html: sweetContent.impact }} />
          </WholeRow>
          <br/><br/>
            <NextBtn to={sweetContent.link}>
              <CgArrowLongRight/>
            </NextBtn>
          <WholeRow><Footer/></WholeRow>
      </ShContainer>
      </OuterContainer>
    );
  }
}

export default Sweet;
