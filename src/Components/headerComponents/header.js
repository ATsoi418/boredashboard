import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faEye,faCog,faBroom } from '@fortawesome/free-solid-svg-icons'

import BinClock from './binClock';
import DateClock from './dateClock';

class Header extends Component {
  render() {
    return (
      <header>
        <div id="binClock">
          <BinClock />
        </div>
        <div id="dateClock">
          <DateClock />
        </div>
        <nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={faSearch} className="moveLeft-hover"/>
            </li>
            <li>|</li>
            <li>
              <input type="checkbox" className="ViewToggle"/>
            </li>
            <li>
              <Link to="/config"><FontAwesomeIcon icon={faCog} className="fa-spin-hover"/></Link>
            </li>
            <li>
              <Link to="/start"><FontAwesomeIcon icon={faBroom} className="fa-waddle-hover"/></Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
