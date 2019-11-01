import styled, { keyframes } from 'styled-components';
import React, { Component } from 'react';
import Right from './svg/RightSheet.png';
import Left from './svg/LeftSheet.png';

const CoverHolder = styled.section`
  position: fixed;
  display: ${props => (props.intransit === true) ? 'initial' : 'none' };
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height:71%;
`;

const Fatten = keyframes`
  0% { width: 0% }
  50% { width: 100%; }
  100% { width: 0% }
`;

const ImgL = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  height: 71%;
  width: 0%;
  animation: ${Fatten} 1s cubic-bezier(0.5, 1.0, 0.5, 1.0) infinite;
`;

const ImgR = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  height: 71%;
  width: 0%;
  animation: ${Fatten} 1s cubic-bezier(0.5, 1.0, 0.5, 1.0) infinite;
`;

class App extends Component {
  render() {
    return (
      <CoverHolder intransit={this.props.go} >
        <ImgL src={Left} width='70' height='20' />
        <ImgR src={Right} width='70' height='400' />
      </CoverHolder>
    );
  }
}

export default App;
