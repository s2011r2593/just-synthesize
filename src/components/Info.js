import styled from 'styled-components';
import React, { Component } from 'react';

const StyledMain = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:71%;
  background-color: #212121;
  overflow-y: scroll;
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

const Author = styled.p`
  margin-left: 5%;
  font-size: 18px;
`;

class App extends Component {
  render() {
    return (
      <StyledMain>
        <Title>What is JustSynth?</Title>
        <Info>
<<<<<<< HEAD
          The "just" in JustSynth comes from just intonation. JustSynth allows users to enter ratios to define intervals. This is opposed to typical Western tuning which implements 12-TET (built with irrational ratios) resulting in slight harmonic imperfections across all intervals (save the octave). Using just intonation, users can make certain intervals more harmonious (although it will be at the expense of certain other intervals). Hopefully obviously, the "synth" part of JustSynth comes from the fact that JustSynth is a rudimentary synthesizer. To change the waveform that is generated, you can click "2" in the page navigator in the top left corner, but only the sine wave sounds decent since the wave generator being used isn't so great.
        </Info>
        <Title>Tips</Title>
        <Info>
          You can play using the keyboard. Keys "a" through ";" (and also "w", "e", "t", "y", "u", "o", and 'p') correspond to a C major scale. Use "z" and "x" to change octaves. "c" will take you back to the middle octave range. "v" will kill all sound (there are some bug issues, so you might need that)
=======
          The "just" in JustSynth comes from just intonation. JustSynth allows users to enter ratios to define intervals. This is opposed to the typical implementation of 12-TET which uses irrational ratios resulting in slight imperfections in the intervals (save the octave). Using just intonation, users can make certain intervals more harmonious (admittedly at the expense of other <br/><br/>
          intervals). Hopefully obviously, the "synth" part of JustSynth comes from the fact that JustSynth is a rudimentary synthesizer. To change the waveform that is generated, click "2" in the page navigator in the top left corner; however, it is suggested to stick to the sinewave.
        </Info>
        <Title>Tips</Title>
        <Info>
          You can play using the keyboard. Keys "a" through ";"" (and w, e, t, y, u, o, and p) correspond to a C major scale. Use "z" and "x" to change octaves. "c" will take you back to the middle octave range. "v" will kill all sound (there are some bug issues, so you might need that)
>>>>>>> fdf31f48548c92cd49f53e61adae1ee1a2b6dd34
        </Info>
        <Author><br/><br/>Built by Sean Rhee</Author>
        <Info><br/><br/><br/><br/><br/></Info>
      </StyledMain>
    );
  }
}

export default App;
