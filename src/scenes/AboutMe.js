import React, { Component } from 'react';
import { H1, H2, H5, Highlights } from '../css/fonts.js';
import { OuterContainer, SweetContainer, WholeRow } from '../css/container.js';
import { meContent } from '../content.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class AboutMe extends Component {
  handleClick = e => {
    const target = document.getElementById(e.target.title);
    target.scrollIntoView();
  }
  render() {
    return (
      <div>
          <OuterContainer>
            <SweetContainer>
              <Navbar/>
              <br/><br/>
              <div>
                <H1>Hi! I'm Yuhan (Hannah)</H1><br/>
                <Highlights left dangerouslySetInnerHTML={{ __html: meContent.quote }} />
                <H5 dangerouslySetInnerHTML={{ __html: meContent.intro1 }} />
              </div>
              <img src={meContent.img} alt={meContent.img} style={{width:"100%"}}/>


              <div>
                <H5 dangerouslySetInnerHTML={{ __html: meContent.intro2 }} />
              </div>
              <img src={meContent.books} alt={meContent.books} style={{width:"100%"}}/>
<WholeRow>
            <img src={meContent.journeyimg} alt={meContent.journeyimg} style={{"width":"100%"}}/>
</WholeRow>

            </SweetContainer>
          </OuterContainer>
        <br/><br/><br/><br/>
        <Footer/>
      </div>
    );
  }
}

export default AboutMe;
