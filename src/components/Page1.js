import styled, { keyframes } from 'styled-components';
import React, { Component } from 'react';

const StyledMain = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 71%;
  background-color: #212121;
  padding-top: 62px;
  padding-bottom: 30px;
`;

const Panel = styled.div`
  width: 92%;
  min-height: 77%;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border: 4px dashed #f2f2f2;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const Sub1 = styled.div`
  flex: 2;
  border: 2px solid #e6f5f1;
  border-radius: 5px;
`;

const TonicInd = styled.div`
  border: 1px solid #e6f5f1;
  border-radius: 5px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8%;
  height: 60%;
  padding-right: 18px;
`;

const Sub2 = styled.div`
  margin-left: 10px;
  display: flex;
  flex: 3;
  border: 2px solid #e6f5f1;
  border-radius: 5px;
  flex-direction: column;
`;

const Vert = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  width: 94%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const Mid = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  width: 94%;
  margin-left: auto;
  margin-right: auto;
`;

const Interval = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1%;
  margin-right: 1%;
  flex: 1;
  display: flex;
  height: 90%;
  border: 1px solid #e6f5f1;
  border-radius: 5px;
  font-family: 'Lucida Console', 'Futura';
  font-size: 18px;
  color: #f0f0f0;
  align-items: center;
  padding-left: 16px;
`;

const StyledTitle = styled.p`
  font-family: 'Lucida Console', 'Futura';
  font-size: 36px;
  font-style: italic;
  color: #f0f0f0;
  background-image: repeating-linear-gradient(to left, #fffb96,#ff6ad5,#c774e8,#ad8cff,#e2fcde,#8795e8,#ffefc9,#94d0ff,#fff0fd,#10d7ae);
  -webkit-background-clip: text;
  background-size: 20%;
  animation: ${Rain} 1s linear infinite alternate;
  margin-top: 16px;
  margin-left: 18px;
`;

const StyledExplain = styled.p`
  font-family: 'Lucida Console', 'Futura';
  font-size: 18px;
  color: #f0f0f0;
  background-image: repeating-linear-gradient(to left, #fffb96,#ff6ad5,#c774e8,#ad8cff,#e2fcde,#8795e8,#ffefc9,#94d0ff,#fff0fd,#10d7ae);
  -webkit-background-clip: text;
  background-size: 20%;
  animation: ${Rain} 1s linear infinite alternate;
  margin-top: -10px;
  margin-left: 18px;
`;

const Descriptor = styled.p`
  font-family: 'Lucida Console', 'Futura';
  font-size: 14px;
  text-decoration: underline overline;
  color: #e6f5f1;
  margin-left: 16px;
  margin-top: 12px;
`;

const TonicSel = styled.input`
  margin-left: 16px;
  margin-bottom: 16px;
  width: 66px;
  height: 42px;
  font-style: italic;
  box-sizing: border-box;
  font-size: 40px;
  text-transform: uppercase;
  border: none;
  border-bottom: 1px solid #f0f0f080;
  background-color: transparent;
  color: #f0f0f0;
  -webkit-transition: border 0.1s ease-in-out;
  transition: border 0.1s ease-in-out;
  :focus {
    border-bottom: 3px solid #e6f5f1;
  }
`;

const FreqSet = styled.input`
  margin-left: 16px;
  margin-bottom: 16px;
  width: 115px;
  height: 42px;
  font-style: italic;
  box-sizing: border-box;
  font-size: 40px;
  text-transform: uppercase;
  border: none;
  border-bottom: 1px solid #f0f0f080;
  background-color: transparent;
  color: #f0f0f0;
  -webkit-transition: border 0.1s ease-in-out;
  transition: border 0.1s ease-in-out;
  :focus {
    border-bottom: 3px solid #e6f5f1;
  }
`;

const ISet = styled.input`
  width: 60%;
  font-style: italic;
  box-sizing: border-box;
  margin-left: 10px;
  font-size: 11px;
  text-transform: uppercase;
  border: none;
  border-bottom: 1px solid #f0f0f080;
  background-color: transparent;
  color: #f0f0f0;
  -webkit-transition: border 0.1s ease-in-out;
  transition: border 0.1s ease-in-out;
  :focus {
    border-bottom: 3px solid #e6f5f1;
  }
`;

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Rain = keyframes`
  0% { background-position: 0% }
  100% { background-position: 100% }
`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      how: true,
      tonique: this.props.t,
      bfreq: this.props.b,

      t2: this.props.rat[0],
      T2: this.props.rat[1],
      t3: this.props.rat[2],
      T3: this.props.rat[3],
      t4: this.props.rat[4],
      tr: this.props.rat[5],
      t5: this.props.rat[6],
      t6: this.props.rat[7],
      T6: this.props.rat[8],
      t7: this.props.rat[9],
      T7: this.props.rat[10],
    }

    this.dslash = '//'
  }

  componentDidMount() {
    window.addEventListener("resize", this.determineWindowSize);
  }

  determineWindowSize = () => {
    if ( window.innerWidth < window.innerHeight ) {
      this.setState({ how: false });
    } else {
      this.setState({ how: true });
    }
  }

  updateTonic = (event) => {
    if (event.target.value === '') {

    } else if (!(this.props.check.includes(event.target.value))) {
      alert('Please enter a valid key (capitalize. # for sharp, b for flat)')
    } else {
      this.setState({ tonique: event.target.value }, () => {
        this.props.mod(this.state.tonique);
      })
    }
  }

  updateBase = (event) => {
    if (event.target.value === '') {

    } else {
      this.setState({ bfreq: event.target.value }, () => {
        this.props.shift(this.state.bfreq)
      })
    }
  }

  upm2 = (event) => {
    try {
      console.log(eval(event.target.value))
      if (event.target.value.length < 1 || isNaN(eval(event.target.value))) {

      } else {
        this.setState({ t2: eval(event.target.value) }, () => {
          this.props.sm2(this.state.t2)
        })
      }
    }
    catch(error) {
      console.error(error);
    }

  }
  upM2 = (event) => {
    try {
      if (event.target.value.length < 1 || isNaN(eval(event.target.value))) {

      } else {
        this.setState({ T2: eval(event.target.value) }, () => {
          this.props.smm2(this.state.T2)
        })
      }
    }
    catch(error) {
      console.error(error);
    }

  }
  upm3 = (event) => {
    try {
      if (event.target.value.length < 1 || isNaN(eval(event.target.value))) {

      } else {
        this.setState({ t3: eval(event.target.value) }, () => {
          this.props.sm3(this.state.t3)
        })
      }
    }
    catch(error) {
      console.error(error);
    }

  }
  upM3 = (event) => {
    try {
      if (event.target.value.length < 1 || isNaN(eval(event.target.value))) {

      } else {
        this.setState({ T3: eval(event.target.value) }, () => {
          this.props.smm3(this.state.T3)
        })
      }
    }
    catch(error) {
      console.error(error);
    }

  }
  upP4 = (event) => {
    try {
      if (event.target.value.length < 1 || isNaN(eval(event.target.value))) {

      } else {
        this.setState({ t4: eval(event.target.value) }, () => {
          this.props.sP4(this.state.t4)
        })
      }
    }
    catch(error) {
      console.error(error);
    }

  }
  uptt = (event) => {
    try {
      if (event.target.value.length < 1 || isNaN(eval(event.target.value))) {

      } else {
        this.setState({ tr: eval(event.target.value) }, () => {
          this.props.stt(this.state.tr)
        })
      }
    }
    catch(error) {
      console.error(error);
    }

  }
  upP5 = (event) => {
    try {
      if (event.target.value.length < 1 || isNaN(eval(event.target.value))) {

      } else {
        this.setState({ t5: eval(event.target.value) }, () => {
          this.props.sP5(this.state.t5)
        })
      }
    }
    catch(error) {
      console.error(error);
    }

  }
  upm6 = (event) => {
    try {
      if (event.target.value.length < 1 || isNaN(eval(event.target.value))) {

      } else {
        this.setState({ t6: eval(event.target.value) }, () => {
          this.props.sm6(this.state.t6)
        })
      }
    }
    catch(error) {
      console.error(error);
    }

  }
  upM6 = (event) => {
    try {
      if (event.target.value.length < 1 || isNaN(eval(event.target.value))) {

      } else {
        this.setState({ M6: eval(event.target.value) }, () => {
          this.props.smm6(this.state.M6)
        })
      }
    }
    catch(error) {
      console.error(error);
    }

  }
  upm7 = (event) => {
    try {
      if (event.target.value.length < 1 || isNaN(eval(event.target.value))) {

      } else {
        this.setState({ t7: eval(event.target.value) }, () => {
          this.props.sm7(this.state.t7)
        })
      }
    }
    catch(error) {
      console.error(error);
    }

  }
  upM7 = (event) => {
    try {
      if (event.target.value.length < 1 || isNaN(eval(event.target.value))) {

      } else {
        this.setState({ T7: eval(event.target.value) }, () => {
          this.props.smm7(this.state.T7)
        })
      }
    }
    catch(error) {
      console.error(error);
    }

  }

  render() {
    return (
      <StyledMain>
        <Panel>
          <Sub1>
            <StyledTitle>
              {this.dslash} JustSynth
            </StyledTitle>
            <TonicInd>
              <Descriptor>
                = Tonic Freq =
              </Descriptor>
              <Holder>
                <TonicSel
                  type='text'
                  onChange={this.updateTonic}
                  placeholder={this.state.tonique}
                />
                <StyledTitle>
                  =
                </StyledTitle>
                <FreqSet
                  type='number'
                  min='80'
                  max='1000'
                  onChange={this.updateBase}
                  placeholder={this.state.bfreq}
                />
                <StyledTitle>
                  Hz
                </StyledTitle>
              </Holder>
              <StyledExplain>
                Change the key centeroff of which to base build intervals
              </StyledExplain>
            </TonicInd>
          </Sub1>
          <Sub2>
            <Vert>
              <Interval>
                m2:
                <ISet
                  type='text'
                  onChange={this.upm2}
                  placeholder={this.state.t2}
                />
              </Interval>
              <Interval>
                M2:
                <ISet
                  type='text'
                  onChange={this.upM2}
                  placeholder={this.state.T2}
                />
              </Interval>
              <Interval>
                m3:
                <ISet
                  type='text'
                  onChange={this.upm3}
                  placeholder={this.state.t3}
                />
              </Interval>
              <Interval>
                M3:
                <ISet
                  type='text'
                  onChange={this.upM3}
                  placeholder={this.state.T3}
                />
              </Interval>
            </Vert>
            <Mid>
              <Interval>
                P4:
                <ISet
                  type='text'
                  onChange={this.upP4}
                  placeholder={this.state.t4}
                />
              </Interval>
              <Interval>
                tri:
                <ISet
                  type='text'
                  onChange={this.uptt}
                  placeholder={this.state.tr}
                />
              </Interval>
              <Interval>
                P5:
                <ISet
                  type='text'
                  onChange={this.upP5}
                  placeholder={this.state.t5}
                />
              </Interval>
            </Mid>
            <Vert>
              <Interval>
                m6:
                <ISet
                  type='text'
                  onChange={this.upm6}
                  placeholder={this.state.t6}
                />
              </Interval>
              <Interval>
                M6:
                <ISet
                  type='text'
                  onChange={this.upM6}
                  placeholder={this.state.T6}
                />
              </Interval>
              <Interval>
                m7:
                <ISet
                  type='text'
                  onChange={this.upm7}
                  placeholder={this.state.t7}
                />
              </Interval>
              <Interval>
                M7:
                <ISet
                  type='text'
                  onChange={this.upM7}
                  placeholder={this.state.T7}
                />
              </Interval>
            </Vert>
          </Sub2>
        </Panel>
      </StyledMain>
    );
  }
}

export default App;
