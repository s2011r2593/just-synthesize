import triangleicon from './svg/Triangle.svg';
import squareicon from './svg/Square.svg';
import React, { Component } from 'react';
import styled from 'styled-components';
import sineicon from './svg/Sine.svg';
import sawicon from './svg/Saw.svg';

const StyledOptionHolder = styled.section`
  position: fixed;
  z-index: 9999;
  bottom: 29%;
  left: 0;
  width: 100px;
  height: 150px;
  border: 1px dashed #f2f2f2;
  text-align: center;
  color: white;
  display: flex;
`;

const Buttons = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Icons = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  padding-left: 20%;
`;

const Boxes = styled.div`
  margin-left: 10px;
  width: 10px;
  height: 10px;
  cursor: pointer;
  background-color: ${props => props.select ? '#f2f2f2' : ''};
  border-color: #f2f2f2;
  border-width: 1px;
  border-style: solid;
`;
const Leeway = styled.div`
  flex: 1
`;

class App extends Component {
  constructor(props) {
    super(props)
    this.w = this.props.currentwave;
    this.state = {
      wave: this.w
    }
  }

  setWave = (index) => {
    this.setState({wave: index});
    this.props.wavehandler(index);
  }

  render() {

    return (
      <StyledOptionHolder>
        <Buttons>
          <Leeway />
          <Boxes onClick={() => this.setWave("sawtooth")} select={this.state.wave === "sawtooth"}/>
          <Leeway />
          <Boxes onClick={() => this.setWave("triangle")} select={this.state.wave === "triangle"}/>
          <Leeway />
          <Boxes onClick={() => this.setWave("sine")} select={this.state.wave === "sine"}/>
          <Leeway />
          <Boxes onClick={() => this.setWave("square")} select={this.state.wave === "square"}/>
          <Leeway />
        </Buttons>
        <Icons>
          <img src={sawicon} alt='/|/|' width="35" height="35" />
          <img src={triangleicon} alt='^v^v' width="35" height="35" />
          <img src={sineicon} alt='~~~~' width="35" height="35" />
          <img src={squareicon} alt='¯|_|' width="35" height="35" />
        </Icons>
      </StyledOptionHolder>
    );
  }
}

export default App;
