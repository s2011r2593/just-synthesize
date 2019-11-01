import React, { Component } from 'react';
import styled from 'styled-components'

const Menu = styled.section`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100px;
  height: 30px;
  background-color: #282828;
  border: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  borderRadius: 45%;
  cursor: pointer;
  -webkit-border-radius: 45%;
  -mox-border-radius: 45%;
  border-width: 1px;
  border-style: solid;
  border-color: #f2f2f2;
  text-align: center;
  background-color: ${props => props.sel ? '#f2f2f2' : ''};
  color: ${props => props.sel ? '#424242' : '#f2f2f2'};
  font-family: 'Lucida Console', 'Futura';
  font-size: 10px;
`;

const Box = styled.div`
  width: 15px;
  height: 15px;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: #f2f2f2
  text-align: center;
  background-color: ${props => props.sel ? '#f2f2f2' : ''};
  color: ${props => props.sel ? '#424242' : '#f2f2f2'};
  font-family: 'Lucida Console', 'Futura';
  font-size: 10px;
`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 1
    }
  }
  setIndex = (index) => {
    this.setState({selected: index});
    this.props.handler(index);
  }
  render() {
    return (
      <Menu>
        <Circle onClick={() => this.setIndex(0)} sel={this.state.selected === 0}>i</Circle>
        <Box onClick={() => this.setIndex(1)} sel={this.state.selected === 1}>1</Box>
        <Box onClick={() => this.setIndex(3)} sel={this.state.selected === 3}>2</Box>
      </Menu>
    );
  }
}

export default App;
