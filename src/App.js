//import styled from 'styled-components';
import PageToggle from './components/PageToggle.js';
import MainCover from './components/MainCover.js';
import Keyboard from './components/Keyboard.js';
import Page1 from './components/Page1.js';
import Page3 from './components/Page3.js';
import React, { Component } from 'react';
import Info from './components/Info.js';
import Tone from 'tone';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oct: 0,
      currentKey: "(e)mc",
      press: [],
      page: 1,
      waveform: "sine",
      transit: false,

      tonic: 'C',
      base: 264,
      m2: 25/24,
      M2: 9/8,
      m3: 6/5,
      M3: 5/4,
      P4: 4/3,
      tt: 45/32,
      P5: 3/2,
      m6: 8/5,
      M6: 5/3,
      m7: 9/5,
      M7: 15/8,
      P8: 2,
      m9: 25/12,
      M9: 9/4,
      m10: 12/5,
      M10: 5/2,

      atk: 0.01,
      dec: 0.6,
      sus: 1,
      rel: 0.01,
    };
    this.keys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', 'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l', 'p'];

    this.offset = 0;
    this.keyToPitch = {};

    this.calibrate();

    Tone.Master.volume.value = -16;

    this.synth = new Tone.PolySynth(
      8,
      Tone.Synth,
      {
        oscillator: {
          type: this.state.waveform,
        },
        envelope: {
          attack: this.state.atk,
          decay: this.state.dec,
          sustain: this.state.sus,
          release: this.state.rel
        }
      }
    ).toMaster();

    this.pressed = [];
    this.pwoct = []; //pressed with octave
  }
  componentDidMount(){
    document.addEventListener('keydown', this.onAiya.bind(this))
    document.addEventListener('keyup', this.onkeyup.bind(this))
    document.addEventListener('keypress', this.onkeypress.bind(this))
  }

  calibrate = () => {
    switch(this.state.tonic) {
      case 'C':
        this.offset = 0;
        break;
      case 'C#':
        this.offset = 1;
        break;
      case 'Db':
        this.offset = 1;
        break;
      case 'D':
        this.offset = 2;
        break;
      case 'D#':
        this.offset = 3;
        break;
      case 'Eb':
        this.offset = 3;
        break;
      case 'E':
        this.offset = 4;
        break;
      case 'F':
        this.offset = 5;
        break;
      case 'F#':
        this.offset = 6;
        break;
      case 'Gb':
        this.offset = 6;
        break;
      case 'G':
        this.offset = 7;
        break;
      case 'G#':
        this.offset = 8;
        break;
      case 'Ab':
        this.offset = 8;
        break;
      case 'A':
        this.offset = 9;
        break;
      case 'A#':
        this.offset = 10;
        break;
        case 'Bb':
          this.offset = 10;
          break;
      case 'B':
        this.offset = 11;
        break;
      default:
        this.offset = 0;
    }

    this.keyToPitch = {};
    this.keyToPitch[this.keys[0 + this.offset]] = this.state.base;
    this.keyToPitch[this.keys[1 + this.offset]] = this.state.base * this.state.m2;
    this.keyToPitch[this.keys[2 + this.offset]] = this.state.base * this.state.M2;
    this.keyToPitch[this.keys[3 + this.offset]] = this.state.base * this.state.m3;
    this.keyToPitch[this.keys[4 + this.offset]] = this.state.base * this.state.M3;
    this.keyToPitch[this.keys[5 + this.offset]] = this.state.base * this.state.P4;
    this.keyToPitch[this.keys[6 + this.offset]] = this.state.base * this.state.tt;
    this.keyToPitch[this.keys[7 + this.offset]] = this.state.base * this.state.P5;
    this.keyToPitch[this.keys[8 + this.offset]] = this.state.base * this.state.m6;
    this.keyToPitch[this.keys[9 + this.offset]] = this.state.base * this.state.M6;
    this.keyToPitch[this.keys[10 + this.offset]] = this.state.base * this.state.m7;
    this.keyToPitch[this.keys[11 + this.offset]] = this.state.base * this.state.M7;
    this.keyToPitch[this.keys[12 + this.offset]] = this.state.base * this.state.P8;
    this.keyToPitch[this.keys[13 + this.offset]] = this.state.base * this.state.m9;
    this.keyToPitch[this.keys[14 + this.offset]] = this.state.base * this.state.M9;
    this.keyToPitch[this.keys[15 + this.offset]] = this.state.base * this.state.m10;
    this.keyToPitch[this.keys[16 + this.offset]] = this.state.base * this.state.M10;
  }

  onAiya = (e) => {
    if (e.key === this.state.currentKey) return;
    if (e.key in this.keyToPitch) {
      this.pressed.push(e.key);
      this.pwoct.push(this.keyToPitch[e.key] * (2 ** this.state.oct))
      this.setState({press: this.pwoct});
      this.synth.triggerAttack(this.keyToPitch[e.key] * (2 ** this.state.oct))
      this.setState({currentKey: e.key});
    }
  }
  onkeyup = (e) => {
    if (this.pressed.includes(e.key)) this.synth.triggerRelease(this.keyToPitch[e.key] * (2 ** this.state.oct));

    var indiefivehundo = this.pressed.indexOf(e.key);
    this.pressed.splice(indiefivehundo, 1);
    this.pwoct.splice(indiefivehundo, 1);
    this.setState({press: this.pwoct});

    if (this.state.currentKey === e.key) this.setState({currentKey: "(e)mc"});
  }
  onkeypress = (e) => {
    if (e.key === "z") {
      if (this.state.oct > -4) {
        this.setState({oct: this.state.oct - 1});
      }
    } else if (e.key === "x") {
      if (this.state.oct < 4) {
        this.setState({oct: this.state.oct + 1});
      }
    } else if (e.key === "c") {
      this.setState({oct: 0});
    } else if (e.key === "v") {
      this.setState({currentKey: "(e)mc"});
      this.setState({press: []});
      this.synth.releaseAll();
      this.pressed = [];
      this.pwoct = [];
      this.short = '';
    }
  }

  idk = () => {
    this.setState({ oct: this.state.oct - 1 });
  }

  toggle = (p) => {
    this.setState({ transit: true });
    setTimeout(function(){this.setState({ page: p })}.bind(this), 500);
    setTimeout(function(){this.setState({ transit: false })}.bind(this), 1000);
  }

  selectWave = (form) => {
    this.setState({waveform: form});
    this.synth = new Tone.Synth({
      oscillator: {
        type: form,
      },
      envelope: {
        attack: this.state.atk,
        decay: this.state.dec,
        sustain: this.state.sus,
        release: this.state.rel
      }
    }).toMaster();
  }

  render() {
    var main = null;
    if (this.state.page === 0) {
      main = <Info />;
    } else if (this.state.page === 1) {
      main = <Page1 t={this.state.tonic} b={this.state.base}/>;
    } else if (this.state.page === 3) {
      main = <Page3 currentwave={this.state.waveform} wavehandler={this.selectWave}/>;
    }

    return (
      <div className="App">
        <PageToggle handler={this.toggle} />
        <MainCover go={this.state.transit}/>
        {main}
        <Keyboard legend={this.keyToPitch} pKeys={this.state.press} oct={this.state.oct} />
      </div>
    );
  }
}

export default App;
