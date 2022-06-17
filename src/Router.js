import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';

import Home from './scenes/Home.js';
import AboutMe from './scenes/AboutMe.js';
import Contact from './scenes/Contact.js';
import Capitalsphere from './scenes/Capitalsphere.js';
import SmartHygiene from './scenes/SmartHygiene.js';
import ScatteringResources from './scenes/ScatteringResources.js';
import Sweet from './scenes/Sweet.js';
import D4SD from './scenes/D4SD.js';
import Meeting from './scenes/Meeting.js';
import LitoNail from './scenes/LitoNail.js';
import MyNotes from './scenes/MyNotes.js';
import Resume from './scenes/Resume.js';
import Test from './scenes/Test.js';

import ReactGA from 'react-ga';

export default class Router extends Component<{}> {
  setGA = () => {
    ReactGA.initialize('UA-218239888-1');
    ReactGA.pageview('Init page view');
  };
  componentDidMount(){
    this.setGA();
  }
  render() {
    console.log("publicurl");
    console.log(process.env.PUBLIC_URL);
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={AboutMe}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/capitalsphere' component={Capitalsphere}/>
          <Route exact path='/smarthygiene' component={SmartHygiene}/>
          <Route exact path='/scatteringresources' component={ScatteringResources}/>
          <Route exact path='/sweet' component={Sweet}/>
          <Route exact path='/lito_nail' component={LitoNail}/>
          <Route exact path='/d4sd' component={D4SD}/>
          <Route exact path='/meeting' component={Meeting}/>
          <Route exact path='/notes' component={MyNotes}/>
          <Route exact path='/resume' component={Resume}/>
          <Route exact path='/test' component={Test}/>
        </Switch>
      </main>
    );
  }
}
