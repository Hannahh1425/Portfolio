import React, { Component } from 'react';
import { H1, H3, H4, H5, NextBtn } from '../css/fonts.js';
import {OuterContainer, InnerContainer } from '../css/container.js';
import { d4sdContent } from '../content.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../components/Image';
import Tools from '../components/Tools';

class D4SD extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          {/**<InnerContainer>
            <br/><br/><br/><br/>
            <br/><br/><br/>
            <H1 large center>{d4sdContent.title}</H1>
            <br/><br/><br/><br/>
            <img src={d4sdContent.header} alt={d4sdContent.header} style={{"width":"100%"}}/>
            <br/><br/><br/><br/>
            <H3>OVERVIEW</H3>
            <H5 bold dangerouslySetInnerHTML={{ __html: d4sdContent.intro }} />
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.role }} />
          </InnerContainer>
          <br/><br/>
          <Tools
              role = {d4sdContent.role}
              duration = {d4sdContent.duration}
              skills = {d4sdContent.skills}
              team = {d4sdContent.team}
              subtitle = "Team"
          />
        <OuterContainer>
          <InnerContainer>
            <br/><br/>
          
            <br/><br/><br/>
            <H3>CHALLENGE</H3>
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.challenge }} />
            <br/>

            <H3>UX Design Iterations (Homepage)</H3>
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.process_1 }} />
            <br/>
            <H4 bold>Prototype Iteration & Feedback</H4>
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.step1 }} />
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.step1_1 }} />
            <Image src={d4sdContent.img1_1} alt={d4sdContent.img1_1}/>
            <br/>
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.step1_2 }} />
            <Image src={d4sdContent.img1_2} alt={d4sdContent.img1_2}/>
            <br/>
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.step1_3 }} />
            <Image src={d4sdContent.img1_3} alt={d4sdContent.img1_3}/>
            <br/>
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.step1_4 }} />
            <Image src={d4sdContent.img1_4} alt={d4sdContent.img1_4}/>
            <br/>
            <br/>
            <H3>Team Collaboration</H3>
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.step3 }} />
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.step3_1 }} />
            <Image src={d4sdContent.img3_1} alt={d4sdContent.img3_1}/>
            <br/>
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.step3_2 }} />
            <Image src={d4sdContent.img3_2} alt={d4sdContent.img3_2}/>
            <br/>
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.step3_3 }} />
            <Image src={d4sdContent.img3_3} alt={d4sdContent.img3_3}/>
            <br/><br/>
            <H3>Results</H3>
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.results }} />
            <br/>
            <H3>Further Steps</H3>
            <H5 dangerouslySetInnerHTML={{ __html: d4sdContent.future }} />
          </InnerContainer>
        </OuterContainer>
        <NextBtn to={d4sdContent.link}>
          <div dangerouslySetInnerHTML={{ __html: d4sdContent.action }} />
        </NextBtn>**/}
          <br/><br/><br/><br/>
          <Footer/>
        </div>
    );
  }
}

export default D4SD;
