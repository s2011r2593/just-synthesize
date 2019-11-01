import styled, { keyframes } from 'styled-components';
import WaveSelector from './WaveSelector.js';
import square from './svg/backsquare.svg';
import React, { Component } from 'react';
import saw from './svg/backsawtooth.svg';
import tri from './svg/backtriangle.svg';
import sine from './svg/backsine.svg';
import fish from './svg/fish.svg';

const StyledMain = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:71%;
  background-color: #212121;
  text-align: center;
  color: white;
`;

const translate = keyframes`
  from {
    transform: translate(-60vw);
  }
  to {
    transform: translate(60vw);
  }
`;

const Translate1 = styled.div`
  display: inline-block;
  z-index: 2;
  animation: ${translate} 10s linear infinite;
  font-size: 1.2rem;
  color: #f2f2f2;
`;
const Translate2 = styled.div`
  display: inline-block;
  z-index: 2;
  animation: ${translate} 15s linear infinite;
  font-size: 1.2rem;
  color: #f2f2f2;
`;
const Translate3 = styled.div`
  display: inline-block;
  z-index: 2;
  animation: ${translate} 12s linear infinite;
  font-size: 1.2rem;
  color: #f2f2f2;
`;


const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  min-height: 100px;
  height: 20vh;
  position: fixed;
  bottom: 27%;
  left: 0;
  padding-bottom: 1%;
`;

const twave = keyframes`
  from {
    transform: translate(0vw);
  }
  to {
    transform: translate(20vw);
  }
`;

const WaveHousing = styled.div`
  position: fixed;
  display: inline-block;
  z-index: 3;
  animation: ${twave} 3s linear infinite;
  bottom: 55%;
  left: -20%;
  min-height: 150px;
  height: 20vh;
  width: 120%;
`;

const ImgHold = styled.div`
  float: left;
  width: 20vw;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

class App extends Component {
  render() {
    var waves = [];
    var w = this.props.currentwave;
    switch (w) {
      case 'sawtooth':
        w = saw;
        break;
      case 'triangle':
        w = tri;
        break;
      case 'sine':
        w = sine;
        break;
      case 'square':
        w = square;
        break;
      default:
        w = sine;
    }
    for (let i = 0; i < 6; i++) {
      waves.push(<ImgHold><StyledImg key={i} src={w} alt='>< >' width='70' height='20' /></ImgHold>)
    }

    return (
      <StyledMain>
        <WaveSelector currentwave={this.props.currentwave} wavehandler={this.props.wavehandler} />
        <WaveHousing>
          {waves}
        </WaveHousing>
        <Holder>
          <Translate1><img src={fish} alt='>< >' width='70' height='20'/></Translate1>
          <Translate2><img src={fish} alt='>< >' width='70' height='20'/></Translate2>
          <Translate3><img src={fish} alt='>< >' width='70' height='20'/></Translate3>
        </Holder>
      </StyledMain>
    );
  }
}

export default App;
