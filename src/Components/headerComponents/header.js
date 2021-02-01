import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faEye,faCog,faUserCircle } from '@fortawesome/free-solid-svg-icons'

import BinClock from './binClock.js';
import DateClock from './dateClock.js';

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
              <Link to="#"><FontAwesomeIcon icon={faEye}/></Link>
            </li>
            <li>
              <Link to="/config"><FontAwesomeIcon icon={faCog} className="fa-spin-hover"/></Link>
            </li>
            <li>
              <Link to="/user"><FontAwesomeIcon icon={faUserCircle}/></Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
