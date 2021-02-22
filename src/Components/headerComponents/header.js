import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faCog,faBroom } from '@fortawesome/free-solid-svg-icons'

import BinClock from './binClock';
import DateClock from './dateClock';

class Header extends Component {

  render() {
    const onOverlay=(this.props.overlay)?"onOverlay":"";
    return (
      <header>
        <div id="header-logo" className="logo">
          <Link to="#" onClick={this.props.logoOnClick}>BOREDASHBOARD</Link>
        </div>
        <div id="header-info">
          <div id="binClock" className={onOverlay}>
            <BinClock />
          </div>
          <div id="dateClock" className={onOverlay}>
            <DateClock />
          </div>
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
              <Link to="/config" onClick={this.props.configOnClick}><FontAwesomeIcon icon={faCog} className="fa-spin-hover"/></Link>
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
