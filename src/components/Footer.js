import React, { Component } from 'react';
import { P } from '../css/fonts.js';

class Footer extends Component {
  render() {
    return (
      <div>
        <P bold center style={{"paddingBottom":"10px"}}>Designed and developed by Yuhan (Hannah) Wang.</P>
        <div className="footer-icon">
          <a href="https://www.linkedin.com/in/yuhan-wang-hannah/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
          <a href="mailto:yuw431@gmail.com"><i class="fas fa-envelope"></i></a>
        </div>

      </div>
    );
  }
}

export default Footer;
