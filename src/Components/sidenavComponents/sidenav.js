import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faSolarPanel,faShapes } from '@fortawesome/free-solid-svg-icons'

class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav">
        <div className="logo">
          <Link to="/">BOREDASHBOARD</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">
                <span className="navIcon"><FontAwesomeIcon icon={faNewspaper} size="sm"/></span>
                <span className="navText">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/sysmon">
                <span className="navIcon"><FontAwesomeIcon icon={faSolarPanel} size="sm"/></span>
                <span className="navText">Systems Monitor</span>
              </Link>
            </li>
            <li>
              <Link to="/projmon">
                <span className="navIcon"><FontAwesomeIcon icon={faShapes} size="sm"/></span>
                <span className="navText">Project Monitor</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidenav;
