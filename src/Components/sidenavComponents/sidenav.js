import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft,faNewspaper,faPaperPlane,faSolarPanel,faShapes,faLightbulb,faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Sidenav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subNav:false
    };
    this.toggleSubNav=this.toggleSubNav.bind(this);
  }

  toggleSubNav(){
    this.setState({subNav:!this.state.subNav})
  }

  render() {
    const showNav=(this.props.showNav)?" showNav":" collapseNav";
    const showSubNav=(this.state.subNav)?" showSubNav":"";
    return (
      <div id="sidenav">
        <nav>
          <ul>
            <Link to="#" onClick={this.props.navToggleOnClick}>
              <li className="navToggleButton">
                <span className={"navToggleButton"+showNav}><FontAwesomeIcon icon={faAngleDoubleLeft} size="1x"/></span>
              </li>
            </Link>
            <Link to="/">
              <li>
                <span className="navIcon"><FontAwesomeIcon icon={faNewspaper} size="sm"/></span>
                <span className="navText">Dashboard</span>
              </li>
            </Link>
            <Link to="/scripter">
              <li>
                <span className="navIcon"><FontAwesomeIcon icon={faPaperPlane} size="sm"/></span>
                <span className="navText">Scripter</span>
              </li>
            </Link>
            <Link to="/sysmon">
              <li>
                <span className="navIcon"><FontAwesomeIcon icon={faSolarPanel} size="sm"/></span>
                <span className="navText">Systems Monitor</span>
              </li>
            </Link>
            <Link to="/projmon">
              <li>
                <span className="navIcon"><FontAwesomeIcon icon={faShapes} size="sm"/></span>
                <span className="navText">Project Monitor</span>
              </li>
            </Link>
            <Link to="#" onClick={ this.toggleSubNav }>
              <li>
                <span className="navIcon"><FontAwesomeIcon icon={faLightbulb} size="sm"/></span>
                <span className="navText">Solvers</span>
                <span className={"subNavToggleButton" + showSubNav}><FontAwesomeIcon icon={faChevronRight} size="sm"/></span>
              </li>
            </Link>
              <div className={"collapse" + showSubNav}>
                <ul>
                  <Link to="#"><li>Calculator</li></Link>
                  <Link to="#"><li>Texas Holdem</li></Link>
                  <Link to="#"><li>24 Points</li></Link>
                </ul>
              </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidenav;
