import React, { Component } from 'react';
import { Li } from '../css/container.js';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }

  render() {
    return (
      <div>
        {this.props.sidebar.map(sidebar => (
          <React.Fragment>
            <Li title value={sidebar.title}>{sidebar.title}</Li>
            {sidebar.subtitle.map( subtitle => (
              <Li value={subtitle}>{subtitle}</Li>
            ))}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Sidebar;
