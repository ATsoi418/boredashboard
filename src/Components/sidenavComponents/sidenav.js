import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper,faPaperPlane,faSolarPanel,faShapes,faLightbulb,faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Sidenav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  render() {
    const show = (this.state.menu) ? " show" : "" ;
    return (
      <div id="sidenav">
        <div className="logo">
          <Link to="/overlay">BOREDASHBOARD</Link>
        </div>
        <nav>
          <ul>
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
            <Link to="#" onClick={ this.toggleMenu }>
              <li>
                <span className="navIcon"><FontAwesomeIcon icon={faLightbulb} size="sm"/></span>
                <span className="navText">Solvers</span>
                <span className={"navToggleButton" + show}><FontAwesomeIcon icon={faChevronRight} size="sm"/></span>
                </li>
            </Link>
              <div className={"collapse" + show}>
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
