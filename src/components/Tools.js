import React, { Component } from 'react';
import { H5 } from '../css/fonts.js';
import { InnerContainer } from '../css/container.js';

class Tools extends Component {
  render() {
    return (
      <div>
  {/**    <ToolCard>
      <br/><br/>
      <InnerContainer>
      <TwoCol even>
        <TwoCol>
          <H5 light><b>My Role</b></H5>
          <H5 dangerouslySetInnerHTML={{ __html: this.props.role }} />
          <H5 light><b>Tools & Skills</b></H5>
          <H5 style={{"listStyleType":"none"}} dangerouslySetInnerHTML={{ __html: this.props.skills }} />
        </TwoCol>
        <div>
          <TwoCol>
            <H5 light><b>{this.props.subtitle}</b></H5>
            <H5 dangerouslySetInnerHTML={{ __html: this.props.team }} />
          </TwoCol><br/>
          <TwoCol>
            <H5 light><b>Duration</b></H5>
            <H5 dangerouslySetInnerHTML={{ __html: this.props.duration }} />
          </TwoCol>
        </div>
      </TwoCol>

      </InnerContainer>
      <br/>
      </ToolCard>**/}
      </div>
    );
  }
}

export default Tools;
