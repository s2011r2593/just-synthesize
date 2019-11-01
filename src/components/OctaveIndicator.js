import React, { Component } from 'react';
import styled from 'styled-components'

const StyledOctaveIndicator = styled.section`
  width: 25%;
  min-width: 250px;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Light = styled.div`
  height: 2vh;
  width: 2vh;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.lit ? '#f7f7f7' : '#dbdbdb50'};
`;

class App extends Component {
  render() {
    var lights = [];
    for (let i = -4; i < 5; i++) {
      if (this.props.oct === i) {
        lights.push(<Light key={i} lit/>);
      } else {
        lights.push(<Light key={i} />);
      }
    }

    return (
      <StyledOctaveIndicator>
        {lights}
      </StyledOctaveIndicator>
    );
  }
}

export default App;
