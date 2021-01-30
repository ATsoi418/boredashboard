import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faSolarPanel,faShapes } from '@fortawesome/free-solid-svg-icons'

class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <span class="navIcon"><FontAwesomeIcon icon={faNewspaper} size="s"/></span>
                <span class="navText">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/sysmon">
                <span class="navIcon"><FontAwesomeIcon icon={faSolarPanel} size="s"/></span>
                <span class="navText">Systems Monitor</span>
              </Link>
            </li>
            <li>
              <Link to="/projmon">
                <span class="navIcon"><FontAwesomeIcon icon={faShapes} size="s"/></span>
                <span class="navText">Project Monitor</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidenav;
