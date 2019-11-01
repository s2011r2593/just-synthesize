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
`;

const Sub2 = styled.div`
  margin-left: 10px;
  flex: 3
  border: 2px solid #e6f5f1;
  border-radius: 5px;
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
  margin-left: 18px;
  margin-top: 16px;
`;

const Descriptor = styled.p`
  font-family: 'Lucida Console', 'Futura';
  font-size: 14px;
  text-decoration: underline overline;
  color: #f0f0f0;
  margin-left: 16px;
  margin-top: 12px;
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
    }

    this.dslash = '//'
    this.space = ' '
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
              <StyledTitle>
                {this.props.t} = {this.props.b} Hz
              </StyledTitle>
            </TonicInd>
          </Sub1>
          <Sub2>
          </Sub2>
        </Panel>
      </StyledMain>
    );
  }
}

export default App;
