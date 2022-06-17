import React, { Component } from 'react';
import { Img, Modal, ModalImg, ImgWrapper } from '../css/container.js';


class Image extends Component {
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
        <ImgWrapper>
          <Img
            src={this.props.src}
            alt={this.props.alt}
            theme={{width:"100%"}}
            onClick={this.onClick}
          />
        </ImgWrapper>

        <Modal clicked={!this.state.clicked} onClick={this.onClick}>
          <ModalImg
            src={this.props.src}
            alt={this.props.alt}
            onClick={this.onClick}
            clicked={!this.state.clicked}
          />
        </Modal>

      </div>
    );
  }
}

export default Image;
