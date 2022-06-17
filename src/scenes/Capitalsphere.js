import React, { Component } from 'react';
import { H1, H3, H5, P, Subtitle, NextBtn } from '../css/fonts.js';
import { OuterContainer } from '../css/container.js';
import { capitalsphereContent } from '../content.js';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../components/Image';

class Capitalsphere extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/**<InnerContainer>
          <br/><br/><br/><br/>
          <br/><br/><br/>
          <H1 large center>{capitalsphereContent.title}</H1>
          <br/><br/><br/>
          <img src={capitalsphereContent.header} alt={capitalsphereContent.header} style={{"width":"100%"}}/>
          <br/><br/><br/><br/><br/>

          <Subtitle>OVERVIEW</Subtitle>
          <H3>CapitalSphere is an MVP web app</H3>
          <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.intro }}/>
          <br/>
          <TwoCol>
          <P right dangerouslySetInnerHTML={{ __html: capitalsphereContent.other }}/>
          <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.role }}/>
          </TwoCol>

        </InnerContainer>

        <OuterContainer>
          <InnerContainer>
            <br/><br/><br/>


              <Subtitle>BACKGROUND</Subtitle>
              <H3>Traditional M&A transactions heavily relies on consultants </H3>
              <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.context }} />
              <img src={capitalsphereContent.challengeimg} alt={capitalsphereContent.challengeimg} style={{"width":"100%"}}/><br/><br/><br/>

              <br/><br/>
              <Transition dangerouslySetInnerHTML={{ __html: capitalsphereContent.transition }} />

              <br/><br/><br/><br/><br/>
              <Subtitle>STAKEHOLDER INTERVIEW</Subtitle>
              <H3>Understand stakeholders expectations — </H3>
              <div>
                <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.interview1 }} />
                <br/>
                <img src={capitalsphereContent.interview1_img} alt={capitalsphereContent.interview1_img} style={{"width":"100%"}}/><br/>
                <img src={capitalsphereContent.interview2_img} alt={capitalsphereContent.interview2_img} style={{"width":"100%"}}/><br/>

              </div>

              <br/>
              <H3>Set my goals — </H3>
              <div>
                <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.goal2 }} />
                <img src={capitalsphereContent.contextimg} alt={capitalsphereContent.contextimg} style={{"width":"100%"}}/>
              </div>

              <br/><br/><br/>
              <Subtitle>COMPETITIVE ANALYSIS</Subtitle>
              <H3>Learn from other consulting websites — </H3>
              <div>
                <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.ca }} />
                <img src={capitalsphereContent.caimg} alt={capitalsphereContent.caimg} style={{"width":"100%"}}/>
              </div>
              <br/><br/><br/>
              <Subtitle>DESIGN & DEVELOP</Subtitle>
              <H3>ITERATIONS & FEEDBACK</H3>
              <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.redesign3 }} />
              <img src={capitalsphereContent.landing_img1} alt={capitalsphereContent.landing_img1} style={{"width":"100%"}}/>
              <br/>
              <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.redesign4 }} />
              <Image src={capitalsphereContent.landing_img2} alt={capitalsphereContent.landing_img2} style={{"width":"100%"}}/>

              <br/><br/>

              <Subtitle>INFORMATION ARCHITECTURE</Subtitle>
              <H3>Organized information & Clarified our thoughts — </H3>
              <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.ia1 }} />
              <Image src={capitalsphereContent.iaimg1} alt={capitalsphereContent.iaimg1} style={{"width":"100%"}}/><br/><br/>
              <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.ia2 }} />
              <Image src={capitalsphereContent.iaimg2} alt={capitalsphereContent.iaimg2} style={{"width":"100%"}}/>
              <br/><br/>
              <H3>SYSTEM PAGES DESIGN</H3>
              <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.dashboard1 }} />
              <H5 bold>Prototypes of the main pages</H5>
              <Carousel>
                <div>
                    <img src={capitalsphereContent.sp0} />
                </div>
                <div>
                    <img src={capitalsphereContent.sp6} />
                </div>
                <div>
                    <img src={capitalsphereContent.sp7} />
                </div>
                <div>
                    <img src={capitalsphereContent.sp1} />
                </div>
                <div>
                    <img src={capitalsphereContent.sp2} />
                </div>
                <div>
                    <img src={capitalsphereContent.sp3} />
                </div>
                <div>
                    <img src={capitalsphereContent.sp4} />
                </div>
                <div>
                    <img src={capitalsphereContent.sp5} />
                </div>
              </Carousel>
              <br/><br/>
              <H3>RESULTS</H3>
              <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.results }} />
              <br/><br/>
              <H3>TAKEAWAYS</H3>
              <H5 dangerouslySetInnerHTML={{ __html: capitalsphereContent.takeaway1 }} />

          </InnerContainer>
        </OuterContainer>
        <NextBtn to={capitalsphereContent.link}>
          <div dangerouslySetInnerHTML={{ __html: capitalsphereContent.action }} />
        </NextBtn>**/}
        <br/><br/><br/><br/>
        <Footer/>
      </div>
    );
  }
}

export default Capitalsphere;
