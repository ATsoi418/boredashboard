import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Assets/css/default.min.css'

// Components
import Header from './Components/headerComponents/header';
import Sidenav from './Components/sidenavComponents/sidenav';
import Homepage from './Components/pages/homeComponents/home';
import Overlay from './Components/overlayComponents/overlay';
import SysMon from './Components/pages/sysmonComponents/sysMon';
import ProjMon from './Components/pages/projmonComponents/projMon';
import MarkdownEditor from './Components/pages/scripterComponents/scripter';
import Config from './Components/pages/config';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      overlay: true
    };
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay(){
    this.setState({ overlay: !this.state.overlay })
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header overlay={this.state.overlay} onClick={this.toggleOverlay} />
          <Overlay overlay={this.state.overlay} />
          <div className={`content ${this.state.overlay ? 'onOverlay' : ''}`}>
            <Sidenav />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/sysmon' component={SysMon} />
            <Route exact path='/projmon' component={ProjMon} />
            <Route exact path='/scripter' component={MarkdownEditor} />
            <Route exact path='/config' component={Config} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
