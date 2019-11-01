import styled from 'styled-components';
import React, { Component } from 'react';

const StyledMain = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:71%;
  background-color: #212121;
  overflow: scroll;
  color: white;
  font-family: 'Lucida Console', 'Futura';
`;

const Title = styled.h1`
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 1%;
  margin-right: 10%
  font-size: 32px;
`;
const Info = styled.p`
  margin-left: 8%;
  margin-right: 10%;
  font-size: 18px;
`;

class App extends Component {
  render() {
    return (
      <StyledMain>
        <Title>What is Nth Sy?</Title>
        <Info>
          Nth Sy is just a mono synth but with the first two letters of synth moved to the back. <br/><br/>
          Nth Sy was designed for full-screen, half-screen, and quarter-screen (aspect ratios from 16:9 to around 8:9 should be fine).
          Obviously it'll look okay in most situations, but use weird screen sizes at your own risk! (it won't break, but it might look funky)
        </Info>
        <Title>Features</Title>
        <Info>
          There are three pages where you can adjust the synth's parameters.
          Page 3 lets you adjust the synth's waveform to sawtooth, triangle,
          sine, or square.
        </Info>
        <Title>Keymapping</Title>
        <Info>
          You can play the virtual keyboard with your computer keyboard.
          The note "C" is mapped to the key 'a' and hopefully the rest is pretty
          self explanatory. <br/><br/>
          You can shift octaves with 'z' and 'x' (down and up respectively)
          and 'c' will reset the octave register to 4.
        </Info>
        <Title>Known bugs that I'm too lazy to fix (for now)</Title>
        <Info>
          Sometimes the synth will just stop making noise. If that happens,
          just press 'v'. <br/><br/>
          Please just don't switch synth sounds as you're playing notes.
        </Info>
        <Info><br/><br/><br/><br/><br/></Info>
      </StyledMain>
    );
  }
}

export default App;
