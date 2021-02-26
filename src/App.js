import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './Assets/css/default.min.css'
import Cookies from 'universal-cookie';

// Components
import Header from './Components/headerComponents/header';
import Sidenav from './Components/sidenavComponents/sidenav';
import Homepage from './Components/pages/homeComponents/home';
import Overlay from './Components/overlayComponents/overlay';
import SysMon from './Components/pages/sysmonComponents/sysMon';
import ProjMon from './Components/pages/projmonComponents/projMon';
import MarkdownEditor from './Components/pages/scripterComponents/scripter';
import Config from './Components/pages/config';
import NotFound from './Components/pages/notfound';

const cookies = new Cookies();
cookies.set('name', 'Ash', { path: '/' });

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      overlay:true,
      nav:true,
      userName:cookies.get('name'),
      dashboard_avail:true,
      scripter_avail:true,
      sysmon_avail:true,
      projmon_avail:true,
      tfpoint_avail:true,
      featureRequest_avail:true
    };
    this.toggleOverlay=this.toggleOverlay.bind(this);
    this.closeOverlay=this.closeOverlay.bind(this);
    this.toggleNav=this.toggleNav.bind(this);
  }

  toggleOverlay(){
    this.setState({ overlay:!this.state.overlay })
  }

  closeOverlay(){
    this.setState({ overlay:false })
  }

  toggleNav(){
    this.setState({ nav:!this.state.nav })
  }

  render() {
    const onOverlay=(this.state.overlay) ? ' onOverlay' : '';
    const navState=(this.state.nav) ? ' showNav' : ' collapseNav';
    const userName=(this.state.userName);
    const dashboard_avail=(this.state.dashboard_avail);
    const scripter_avail=(this.state.scripter_avail);
    const sysmon_avail=(this.state.sysmon_avail);
    const projmon_avail=(this.state.projmon_avail);
    const tfpoint_avail=(this.state.tfpoint_avail);
    const featureRequest_avail=(this.state.featureRequest_avail);
    return (
      <Router>
          <div className="wrapper">
            <Header overlay={this.state.overlay} logoOnClick={this.toggleOverlay} configOnClick={this.closeOverlay}/>
            <Overlay overlay={this.state.overlay} userName={userName}/>
            <div className={"content"+onOverlay+navState}>
              <Sidenav 
                showNav={this.state.nav} navToggleOnClick={this.toggleNav}
                dashboard_avail={dashboard_avail}
                scripter_avail={scripter_avail}
                sysmon_avail={sysmon_avail}
                projmon_avail={projmon_avail}
                tfpoint_avail={tfpoint_avail}
                featureRequest_avail={featureRequest_avail}
                />
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/sysmon' component={SysMon} />
                <Route exact path='/projmon' component={ProjMon} />
                <Route exact path='/scripter' component={MarkdownEditor} />
                <Route exact path='/config' component={Config}/>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        
      </Router>
    );
  }
}

export default App;
