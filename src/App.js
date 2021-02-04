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
import Dashboard from './Components/pages/dashboardComponents/dashboard';
import SysMon from './Components/pages/sysmonComponents/sysMon';
import ProjMon from './Components/pages/projmonComponents/projMon';
import MarkdownEditor from './Components/pages/scripterComponents/scripter';
import Config from './Components/pages/config';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Sidenav />
          <div id="content">
            <Header />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/dashboard' component={Dashboard} />
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
