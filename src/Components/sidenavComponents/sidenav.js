import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faSolarPanel,faShapes,faLightbulb } from '@fortawesome/free-solid-svg-icons'

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

    const show = (this.state.menu) ? "show" : "" ;
    
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
            <li>
              <Link to="/" className="dropdown-toggle">
                <span className="navIcon"><FontAwesomeIcon icon={faLightbulb} size="sm"/></span>
                <span className="navText">Solvers</span>
              </Link>
              <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={"collapse navbar-collapse " + show}>
                <ul className="navbar-nav">
                  <li><Link to="/" className="">Home</Link></li>
                  <li><Link to="/" className="">Features</Link></li>
                  <li><Link to="/" className="">Pricing</Link></li>
                  <li><Link to="/" className="">logout</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidenav;
