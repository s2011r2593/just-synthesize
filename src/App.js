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

      atk: 0.01,
      dec: 0.6,
      sus: 1,
      rel: 0.01,
    };
    this.build = [];
    this.keys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', 'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l', 'p'];
    this.centers = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
    this.ratios = [1, this.state.m2, this.state.M2, this.state.m3, this.state.M3, this.state.P4, this.state.tt, this.state.P5, this.state.m6, this.state.M6, this.state.m7, this.state.M7, 2, 2 * this.state.m2, 2 * this.state.M2, 2 * this.state.m3, 2 * this.state.M3, 1, this.state.m2, this.state.M2, this.state.m3, this.state.M3, this.state.P4, this.state.tt, this.state.P5, this.state.m6, this.state.M6, this.state.m7, this.state.M7, 2, 2 * this.state.m2, 2 * this.state.M2, 2 * this.state.m3, 2 * this.state.M3];
    this.divider = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    this.o2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    this.offset = 0;

    this.keyToPitch = {};

    console.log(this.offset)

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

    this.build = [25/24, 9/8, 6/5, 5/4, 4/3, 45/32, 3/2, 8/5, 5/3, 9/5, 15/8];
    this.setRatio(this.build);
  }

  calibrate = (t, b) => {
    switch(t) {
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

    this.divider = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    this.o2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    for (var i = 17-this.offset; i < 17; i++) {
      this.divider[i] *= 2
      this.o2[i] -= 5
    }

    this.keyToPitch = {};
    this.keyToPitch[this.keys[0 + this.offset]] = b * this.ratios[this.o2[0]] / this.divider[0];
    this.keyToPitch[this.keys[1 + this.offset]] = b * this.ratios[this.o2[1]] / this.divider[1];
    this.keyToPitch[this.keys[2 + this.offset]] = b * this.ratios[this.o2[2]] / this.divider[2];
    this.keyToPitch[this.keys[3 + this.offset]] = b * this.ratios[this.o2[3]] / this.divider[3];
    this.keyToPitch[this.keys[4 + this.offset]] = b * this.ratios[this.o2[4]] / this.divider[4];
    this.keyToPitch[this.keys[5 + this.offset]] = b * this.ratios[this.o2[5]] / this.divider[5];
    this.keyToPitch[this.keys[6 + this.offset]] = b * this.ratios[this.o2[6]] / this.divider[6];
    this.keyToPitch[this.keys[7 + this.offset]] = b * this.ratios[this.o2[7]] / this.divider[7];
    this.keyToPitch[this.keys[8 + this.offset]] = b * this.ratios[this.o2[8]] / this.divider[8];
    this.keyToPitch[this.keys[9 + this.offset]] = b * this.ratios[this.o2[9]] / this.divider[9];
    this.keyToPitch[this.keys[10 + this.offset]] = b * this.ratios[this.o2[10]] / this.divider[10];
    this.keyToPitch[this.keys[11 + this.offset]] = b * this.ratios[this.o2[11]] / this.divider[11];
    this.keyToPitch[this.keys[12 + this.offset]] = b * this.ratios[this.o2[12]] / this.divider[12];
    this.keyToPitch[this.keys[13 + this.offset]] = b * this.ratios[this.o2[13]] / this.divider[13];
    this.keyToPitch[this.keys[14 + this.offset]] = b * this.ratios[this.o2[14]] / this.divider[14];
    this.keyToPitch[this.keys[15 + this.offset]] = b * this.ratios[this.o2[15]] / this.divider[15];
    this.keyToPitch[this.keys[16 + this.offset]] = b * this.ratios[this.o2[16]] / this.divider[16];
    console.log(this.keyToPitch)
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

  modulate = (key) => {
    this.setState({ tonic: key });
    this.calibrate(key, this.state.base);
  }

  shift = (freq) => {
    this.setState({ base: freq });
    this.calibrate(this.state.tonic, freq);
  }

  selectWave = (form) => {
    this.setState({waveform: form}, () => {
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
    });
  }

  setm2 = (f) => {
    this.build[0] = f
    this.setRatio(this.build);
  }

  setM2 = (f) => {
    this.build[1] = f
    this.setRatio(this.build);
  }

  setm3 = (f) => {
    this.build[2] = f
    this.setRatio(this.build);
  }

  setM3 = (f) => {
    this.build[3] = f
    this.setRatio(this.build);
  }

  setP4 = (f) => {
    this.build[4] = f
    this.setRatio(this.build);
  }

  settt = (f) => {
    this.build[5] = f
    this.setRatio(this.build);
  }

  setP5 = (f) => {
    this.build[6] = f
    this.setRatio(this.build);
  }

  setm6 = (f) => {
    this.build[7] = f
    this.setRatio(this.build);
  }

  setM6 = (f) => {
    this.build[8] = f
    this.setRatio(this.build);
  }

  setm7 = (f) => {
    this.build[9] = f
    this.setRatio(this.build);
  }

  setM7 = (f) => {
    this.build[10] = f
    this.setRatio(this.build);
  }

  setRatio = (t) => {
    this.setState({ m2: t[0] });
    this.setState({ M2: t[1] });
    this.setState({ m3: t[2] });
    this.setState({ M3: t[3] });
    this.setState({ P4: t[4] });
    this.setState({ tt: t[5] });
    this.setState({ P5: t[6] });
    this.setState({ m6: t[7] });
    this.setState({ M6: t[8] });
    this.setState({ m7: t[9] });
    this.setState({ M7: t[10] }, () => {
      console.log('hi')
      this.ratios = [1, this.state.m2, this.state.M2, this.state.m3, this.state.M3, this.state.P4, this.state.tt, this.state.P5, this.state.m6, this.state.M6, this.state.m7, this.state.M7, 2, 2 * this.state.m2, 2 * this.state.M2, 2 * this.state.m3, 2 * this.state.M3, 1, this.state.m2, this.state.M2, this.state.m3, this.state.M3, this.state.P4, this.state.tt, this.state.P5, this.state.m6, this.state.M6, this.state.m7, this.state.M7, 2, 2 * this.state.m2, 2 * this.state.M2, 2 * this.state.m3, 2 * this.state.M3];
      this.calibrate(this.state.tonic, this.state.base);
    });
  }

  render() {
    var main = null;
    if (this.state.page === 0) {
      main = <Info />;
    } else if (this.state.page === 1) {
      main = <Page1 sm2={this.setm2} smm2={this.setM2} sm3={this.setm3} smm3={this.setM3} sP4={this.setP4} stt={this.settt} sP5={this.setP5} sm6={this.setm6} smm6={this.setM6} sm7={this.setm7} smm7={this.setM7} rat={[this.state.m2, this.state.M2, this.state.m3, this.state.M3, this.state.P4, this.state.tt, this.state.P5, this.state.m6, this.state.M6, this.state.m7, this.state.M7]} mod={this.modulate} shift={this.shift} t={this.state.tonic} check={this.centers} b={this.state.base}/>;
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
