import OctaveIndicator from './OctaveIndicator.js';
import React, { Component } from 'react';
import styled from 'styled-components'

const StyledPiano = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 28%
`;

const Bar = styled.div`
  position: fixed;
  bottom: 25%;
  left: 0;
  width: 100%;
  height: 4%;
  padding-left: .4%;
  border-top: 1px solid #f2f2f2;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledKeyboard = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
`;

const StyledWhiteKeys = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledBlackKeys = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0;
  z-index: 1;
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Key = styled.div`
  background: ${props => props.prw ? '#3a3a3a' : '#282828' };
  width: 11%;
  height: 96.75%;
  border: 1px solid #f2f2f2;
`;

const BlackKey = styled.div`
  position: relative;
  z-index: 1;
  background: ${props => props.prb ? '#3a3a3a' : '#282828'};
  flex: 2;
  height: 60%;
  border: 1px solid #f2f2f2;
`;
const SBlack = styled.div`
  background: rgba(0,0,0,0);
  flex: 3;
`;
const BBlack = styled.div`
  background: rgba(0,0,0,0);
  flex: 2;
`;
const EBlackKey = styled.div`
  position: relative;
  z-index: 1;
  background: ${props => props.preb ? '#3a3a3a' : '#282828'};
  flex: 1;
  height: 60%;
  border: 1px solid #f2f2f2;
`;

class App extends Component {

  componentDidMount(){

  }

  keyToInt = (key) => {
    var freq = key / (2 ** this.props.oct)
    switch (freq) {
      case this.props.legend["a"]:
        freq = 0;
        break;
      case this.props.legend["w"]:
        freq = 1;
        break;
      case this.props.legend["s"]:
        freq = 2;
        break;
      case this.props.legend["e"]:
        freq = 3;
        break;
      case this.props.legend["d"]:
        freq = 4;
        break;
      case this.props.legend["f"]:
        freq = 5;
        break;
      case this.props.legend["t"]:
        freq = 6;
        break;
      case this.props.legend["g"]:
        freq = 7;
        break;
      case this.props.legend["y"]:
        freq = 8;
        break;
      case this.props.legend["h"]:
        freq = 9;
        break;
      case this.props.legend["u"]:
        freq = 10;
        break;
      case this.props.legend["j"]:
        freq = 11;
        break;
      case this.props.legend["k"]:
        freq = 12;
        break;
      case this.props.legend["o"]:
        freq = 13;
        break;
      case this.props.legend["l"]:
        freq = 14;
        break;
      case this.props.legend["p"]:
        freq = 15;
        break;
      case this.props.legend[";"]:
        freq = 16;
        break;
      default:
        console.log("Nonexistent key press.")
    }
    return freq;
  }

  wcodeToIndex = (c) => {
    switch (c) {
      case 0:
        c = 0;
        break;
      case 2:
        c = 1;
        break;
      case 4:
        c = 2;
        break;
      case 5:
        c = 3;
        break;
      case 7:
        c = 4;
        break;
      case 9:
        c = 5;
        break;
      case 11:
        c = 6;
        break;
      case 12:
        c = 7;
        break;
      case 14:
        c = 8;
        break;
      case 16:
        c = 9;
        break;
      case 17:
        c = 10;
        break;
      case 19:
        c = 11;
        break;
      case 21:
        c = 12;
        break;
      case 23:
        c = 13;
        break;
      case 24:
        c = 14;
        break;
      case 26:
        c = 15;
        break;
      default:
        console.log("Error in obtaining white key index")
    }
    return c;
  }
  bcodeToIndex = (c) => {
    switch(c) {
      case 1:
        c = 0;
        break;
      case 3:
        c = 1;
        break;
      case 6:
        c = 2;
        break;
      case 8:
        c = 3;
        break;
      case 10:
        c = 4;
        break;
      case 13:
        c = 5;
        break;
      case 15:
        c = 6;
        break;
      case 18:
        c = 7;
        break;
      case 20:
        c = 8;
        break;
      case 22:
        c = 9;
        break;
      case 25:
        c = 10;
        break;
      case 27:
        c = 11;
        break;
      default:
        console.log("Error in obtaining black key index")
    }
    return c;
  }

  render() {
    var wtest = [this.props.legend['a'] * (2 ** this.props.oct),
                 this.props.legend['s'] * (2 ** this.props.oct),
                 this.props.legend['d'] * (2 ** this.props.oct),
                 this.props.legend['f'] * (2 ** this.props.oct),
                 this.props.legend['g'] * (2 ** this.props.oct),
                 this.props.legend['h'] * (2 ** this.props.oct),
                 this.props.legend['j'] * (2 ** this.props.oct),
                 this.props.legend['k'] * (2 ** this.props.oct),
                 this.props.legend['l'] * (2 ** this.props.oct),
                 this.props.legend[';'] * (2 ** this.props.oct)];
    var wkeyz = [];
    var bkeyz = [];
    var wlitty = [];
    var blitty = [];
    for (let i = 0; i < this.props.pKeys.length; i++) {
      if (wtest.includes(this.props.pKeys[i])) {
        wlitty.push(this.keyToInt(this.props.pKeys[i]));
      } else {
        blitty.push(this.keyToInt(this.props.pKeys[i]));
      }
    }
    var wfinal = [];
    var bfinal = [];
    for (let i = 0; i < wlitty.length; i++) {
      wfinal.push(this.wcodeToIndex(wlitty[i]));
    }
    for (let i = 0; i < blitty.length; i++) {
      bfinal.push(this.bcodeToIndex(blitty[i]));
    }

    for (let i = 0; i < 16; i++) {
      if (wfinal.indexOf(i) >= 0) {
        wkeyz.push(<Key key={i} prw/>);
      } else {
        wkeyz.push(<Key key={i} />);
      }
    }
    for (let i = 0; i < 12; i ++) {
      if (bfinal[bfinal.indexOf(i)] === 11) {
        bkeyz.push(<EBlackKey key={i} preb/>);
      } else if (bfinal.indexOf(i) >= 0) {
        bkeyz.push(<BlackKey key={i} prb/>);
      } else if (i === 11) {
        bkeyz.push(<EBlackKey key={i} />);
      } else {
        bkeyz.push(<BlackKey key={i} />);
      }
    }

    return (
      <StyledPiano>
        <Bar>
          <OctaveIndicator oct={this.props.oct}/>
        </Bar>
        <StyledKeyboard>
          <StyledWhiteKeys>
            {wkeyz}
          </StyledWhiteKeys>
          <StyledBlackKeys>
            <SBlack />
            {bkeyz[0]}
            <BBlack />
            {bkeyz[1]}
            <SBlack />
            <SBlack />
            {bkeyz[2]}
            <BBlack />
            {bkeyz[3]}
            <BBlack />
            {bkeyz[4]}
            <SBlack />
            <SBlack />
            {bkeyz[5]}
            <BBlack />
            {bkeyz[6]}
            <SBlack />
            <SBlack />
            {bkeyz[7]}
            <BBlack />
            {bkeyz[8]}
            <BBlack />
            {bkeyz[9]}
            <SBlack />
            <SBlack />
            {bkeyz[10]}
            <BBlack />
            {bkeyz[11]}
          </StyledBlackKeys>
        </StyledKeyboard>
      </StyledPiano>
    );
  }
}

export default App;
