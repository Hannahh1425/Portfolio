import React, { Component } from 'react';
import { Img } from '../css/container.js';


class Modal extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }
  onClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <div>
        <Img
          src={this.props.src}
          alt={this.props.alt}
          theme={{width:"100%"}}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default Modal;
