import React, { Component } from 'react';
import { H1, H3, H5, P, NextBtn } from '../css/fonts.js';
import { OuterContainer, InnerContainer, ThreeCol, TwoCol } from '../css/container.js';
import { litonailContent } from '../content.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../components/Image';

class LitoNail extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/**<InnerContainer>
          <br/><br/><br/><br/>
          <br/><br/><br/>
          <H1 large center>{litonailContent.title}</H1>
          <br/><br/><br/><br/>
          <img src={litonailContent.demo} alt={litonailContent.demo} style={{"width":"100%"}}/>
          <br/><br/><br/><br/><br/>
          <H3>OVERVIEW</H3>
          <H5 bold dangerouslySetInnerHTML={{ __html: litonailContent.intro }} />
          <br/><br/>
          <TwoCol>
            <P right dangerouslySetInnerHTML={{ __html: litonailContent.other }}/>
            <H5 dangerouslySetInnerHTML={{ __html: litonailContent.role }}/>
          </TwoCol>

        </InnerContainer>
        <OuterContainer>
          <InnerContainer>
            <br/><br/>
            <H3>CHALLENGE</H3>
            <H5 dangerouslySetInnerHTML={{ __html: litonailContent.challenge }} />
            <br/><br/>

            <H3>USER INTERVIEWS</H3>
            <H5 dangerouslySetInnerHTML={{ __html: litonailContent.step1 }} />
            <br/><br/>
            <H3>PROBLEM REDEFINITION</H3>
            <H5 dangerouslySetInnerHTML={{ __html: litonailContent.step2 }} />
            <br/><br/>
            <H3>COMPETITIVE ANALYSIS</H3>
              <H5 dangerouslySetInnerHTML={{ __html: litonailContent.step3 }} />
              <Image src={litonailContent.img3_1} alt={litonailContent.img3_1}/>
            <br/><br/><br/>
            <H3>SITE ARCHITECTURE</H3>
            <H5 dangerouslySetInnerHTML={{ __html: litonailContent.step4 }} />
            <Image src={litonailContent.img4_1} alt={litonailContent.img4_1}/>
            <br/><br/><br/>
            <H3>PAPER PROTOTYPE</H3>
            <H5 dangerouslySetInnerHTML={{ __html: litonailContent.step6 }} />
            <Image src={litonailContent.img6_1} alt={litonailContent.img6_1}/>
            <br/><br/><br/>
            <H3>MOODBOARD</H3>
            <H5 dangerouslySetInnerHTML={{ __html: litonailContent.step5 }} />
            <Image src={litonailContent.img5_1} alt={litonailContent.img5_1}/>
            <br/><br/><br/>
            <H3>ITERATION 1 & 2</H3>
            <H5 dangerouslySetInnerHTML={{ __html: litonailContent.step7 }} />
            <ThreeCol even>
              <Image src={litonailContent.img7_1} alt={litonailContent.img7_1}/>
              <Image src={litonailContent.img7_2} alt={litonailContent.img7_2}/>
              <Image columnSpan="2" src={litonailContent.img7_3} alt={litonailContent.img7_3}/>
            </ThreeCol>
            <br/><br/><br/>
            <H3>CLIENT FEEDBACK</H3>
            <H5 dangerouslySetInnerHTML={{ __html: litonailContent.step8 }} />
            <br/><br/>
            <H3>FINAL PROTOTYPE</H3>
            <H5 dangerouslySetInnerHTML={{ __html: litonailContent.step9 }} />
            <Image src={litonailContent.img9} alt={litonailContent.img9_1}/>
            <br/><br/><br/>
            <H3>FURTHER STEPS</H3>
            <H5 dangerouslySetInnerHTML={{ __html: litonailContent.future }} />
          </InnerContainer>
        </OuterContainer>
        <NextBtn to={litonailContent.link}>
          <div dangerouslySetInnerHTML={{ __html: litonailContent.action }} />
        </NextBtn>**/}
        <br/><br/><br/><br/>
        <Footer/>
      </div>
    );
  }
}

export default LitoNail;
