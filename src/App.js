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
import ProjMon from './Components/pages/projMon';
import Config from './Components/pages/config';
// import Footer from './Components/footerComponents/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            {/* <Route exact path='/user' component={User} /> */}
            <Sidenav />
            <div className="content">
              <Route exact path='/' component={Homepage} />
              <Route exact path='/config' component={Config} />
              <Route exact path='/projmon' component={ProjMon} />
              {/* <Route exact path='/others' component={Others} /> */}
            </div>
            {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
