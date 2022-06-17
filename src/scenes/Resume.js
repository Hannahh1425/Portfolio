import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';
import resume from '../img/YuhanWang_Resume.pdf';
import './style.css';

class Resume extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <div id="resume">
          {/**<embed src={resume} className="w-100 vh-100" />**/}
          <a href={resume} target="_blank" rel="noopener noreferrer"></a>
        </div>
        <br/><br/><br/><br/>
        <Footer/>
      </div>
    );
  }
}

export default Resume;
