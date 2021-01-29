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
                  <FontAwesomeIcon icon={faNewspaper} size="s"/> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/sysmon">
                  <FontAwesomeIcon icon={faSolarPanel} size="s"/> Systems Monitor
              </Link>
            </li>
            <li>
              <Link to="/projmon">
                  <FontAwesomeIcon icon={faShapes} size="s"/> Project Monitor
              </Link>
            </li>
            <li>
              <Link to="/others">other</Link>
            </li>
            <li>
              <Link to="/">p3</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidenav;
