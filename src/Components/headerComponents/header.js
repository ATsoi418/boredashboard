import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faEye,faCog,faUserCircle } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/">BOREDASHBOARD</Link>
        </div>
        {/* <div className="dt"> */}
          {/* var options = { weekday: 'short', year: 'numeric', month: 'long', day: '2-digit' }; */}
          {/* var today  = new Date(); */}
          {/* {Date()} */}
        {/* </div> */}
        <nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={faSearch}/>
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
