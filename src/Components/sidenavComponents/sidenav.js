import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight,faNewspaper,faTools,faPaperPlane,faSolarPanel,faShapes,faCalculator,faChevronRight,faTachometerAlt,faLightbulb,faBug } from '@fortawesome/free-solid-svg-icons';

class Sidenav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subFeatureRequest:false
    };
    this.toggleSubFeatureRequest=this.toggleSubFeatureRequest.bind(this);
  }

  toggleSubFeatureRequest(){
    this.setState({ subFeatureRequest:!this.state.subFeatureRequest })
  }

  render() {
    const showNav=(this.props.showNav) ? " showNav" : " collapseNav";
    const showSubFeatureRequest=(this.state.subFeatureRequest) ? " showSubFeatureRequest" : " collapseSubFeatureRequest";
    
    const dashboard_unavail=(this.props.dashboard_avail) ? "" : " dashboard_unavail";
    const utils_unavail=(this.props.utils_avail) ? "" : " utils_unavail";
    const scripter_unavail=(this.props.scripter_avail) ? "" : " scripter_unavail";
    const sysmon_unavail=(this.props.sysmon_avail) ? "" : " sysmon_unavail";
    const projmon_unavail=(this.props.projmon_avail) ? "" : " projmon_unavail";
    const tfpoints_unavail=(this.props.tfpoints_avail) ? "" : " tfpoints_unavail";
    const featureRequest_unavail=(this.props.featureRequest_avail) ? "" : " featureRequest_unavail";
    
    return (
      <div id="sidenav">
        <nav>
          <ul>
            <div className="navToggleButton">
              <Link to="#" onClick={this.props.navToggleOnClick}>
                <span className={showNav}><FontAwesomeIcon icon={faAngleDoubleRight} size="1x"/></span>
              </Link>
            </div>
            <li className={dashboard_unavail}>
              <Link to="/">
                <span className="navIcon"><FontAwesomeIcon icon={faNewspaper} size="sm"/></span>
                <span className={"navText"+showNav}>Dashboard</span>
                <span className={"navIcon-right"+showNav}></span>
              </Link>
            </li>
            <li className={utils_unavail}>
              <Link to="/utils">
                <span className="navIcon"><FontAwesomeIcon icon={faTools} size="sm"/></span>
                <span className={"navText"+showNav}>Utilities</span>
                <span className={"navIcon-right"+showNav}></span>
              </Link>
            </li>
            <li className={scripter_unavail}>
              <Link to="/scripter">
                <span className="navIcon"><FontAwesomeIcon icon={faPaperPlane} size="sm"/></span>
                <span className={"navText"+showNav}>Scripter</span>
                <span className={"navIcon-right"+showNav}></span>           
              </Link>
            </li>
            <li className={sysmon_unavail}>
              <Link to="/sysmon">
                <span className="navIcon"><FontAwesomeIcon icon={faSolarPanel} size="sm"/></span>
                <span className={"navText"+showNav}>Systems Monitor</span>
                <span className={"navIcon-right"+showNav}></span>
              </Link>  
            </li>
            <li className={projmon_unavail}>
              <Link to="/projmon">
                <span className="navIcon"><FontAwesomeIcon icon={faShapes} size="sm"/></span>
                <span className={"navText"+showNav}>Project Monitor</span>
                <span className={"navIcon-right"+showNav}></span>
              </Link>
            </li>
            <li className={tfpoints_unavail}>
              <Link to="/tfpoints">
                <span className="navIcon"><FontAwesomeIcon icon={faCalculator} size="sm"/></span>
                <span className={"navText"+showNav}>24 Points Solver</span>
                <span className={"navIcon-right"+showNav}></span>
              </Link>
            </li>
            
            <li className={featureRequest_unavail}>
              <Link to="#" onClick={this.toggleSubFeatureRequest} className={showSubFeatureRequest}>
                <span className={"navIcon subFeatureRequestToggleButton"+showSubFeatureRequest}><FontAwesomeIcon icon={faChevronRight} size="sm"/></span>
                <span className={"navText subFeatureRequestToggleButton"+showNav}>Feature Request</span>
                <span className={"navIcon-right"+showNav}></span>
              </Link>
            </li>
            <li className={"subFeatureRequest"+showSubFeatureRequest+featureRequest_unavail}>
              <span className={"navIcon"+showNav}></span>
              <Link to="/featureRequest">
                <span className={"navText"+showNav}>Request Status</span>
                <span className="navIcon-right"><FontAwesomeIcon icon={faTachometerAlt} size="sm"/></span>
              </Link>
            </li>
            <li className={"subFeatureRequest"+showSubFeatureRequest+featureRequest_unavail}>
              <span className={"navIcon"+showNav}></span>
              <Link to="#">
                <span className={"navText"+showNav}>Propose Enhancement</span>
                <span className="navIcon-right"><FontAwesomeIcon icon={faLightbulb} size="sm"/></span>
              </Link>
            </li>
            <li className={"subFeatureRequest"+showSubFeatureRequest+featureRequest_unavail}>
              <span className={"navIcon"+showNav}></span>
              <Link to="#">
                <span className={"navText"+showNav}>Report Bug!</span>
                <span className="navIcon-right"><FontAwesomeIcon icon={faBug} size="sm"/></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidenav;
