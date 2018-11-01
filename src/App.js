import React, {Component} from 'react';
import './App.css';
import styled, {css} from 'styled-components';

const AppLayout = styled.div`
  padding: 40px;
`;
const Logo = styled.div`
  font-size: 1.5em;
`;
const ControlButton = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03;
  `}
`;
const Bar = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;
const Content = styled.div`
  
`;

const checkFirstVisit = () => {
  let cryptoDashData = localStorage.getItem('cryptoDash');
  if (!cryptoDashData) {
    return {
      firstVisit: true,
      page: 'settings'
    }
  }
};

class App extends Component {
  state = {
    page: 'dashboard',
    ...checkFirstVisit()
  };
  displayingDashboard = () => this.state.page === 'dashboard';
  displayingSettings = () => this.state.page === 'settings';
  firstVisitMessage = () => {
    if (this.state.firstVisit) {
      return <div>Welcome to CrytoDash,
        please select you favorite coins</div>
    }
  };
  confirmFavorites = () => {
    localStorage.setItem('cryptoDash', 'test');
    this.setState({
      page: 'dashboard',
      firstVisit: false
    })
  };
  settingsContent = () => {
    return <div> {this.firstVisitMessage()}
      <div onClick={this.confirmFavorites}>Confirm Favorites</div>
    </div>
  };

  render() {
    return (
      <AppLayout>
        <Bar>
          <Logo>
            CryptoDash
          </Logo>
          <div>
          </div>
          {!this.state.firstVisit && (
            <ControlButton onClick={() => {
            this.setState({page: 'dashboard'})
          }} active={this.displayingDashboard()}>
            Dashboard
          </ControlButton> )}
          {!this.state.firstVisit && (
          <ControlButton onClick={() => {
            this.setState({page: 'settings'})
          }} active={this.displayingSettings()}>
            Settings
          </ControlButton> )}
        </Bar>
        <Content>
          {this.displayingSettings() && this.settingsContent()}
        </Content>
      </AppLayout>
    );
  }
}

export default App;
