import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { H1, H4, A, Large } from '../css/fonts.js';
import { OuterContainer, InnerContainer } from '../css/container.js';
import Footer from '../components/Footer';

import './style.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <OuterContainer>
          <InnerContainer>
            <br/><br/><br/><br/><br/><br/>
            <H1>Actively looking for internships as a UX researcher.</H1>
            <br/>
            <H4>phone: (206) 466 - 8393</H4>
            <H4>email: <A href="mailto:yuw431@gmail.com">yuw431@gmail.com</A></H4>
            <H4>linkedin: <A href="https://www.linkedin.com/in/yuhan-wang-hannah/">https://www.linkedin.com/in/yuhan-wang-hannah/</A></H4>
            <br/>
            <Large>THANK YOU :)</Large>
          </InnerContainer>
        </OuterContainer>
        <br/><br/><br/>
        <Footer/>
      </div>
    );
  }
}

export default Contact;
