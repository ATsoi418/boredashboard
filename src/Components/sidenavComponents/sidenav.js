import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight,faNewspaper,faPaperPlane,faSolarPanel,faShapes,faLightbulb,faChevronRight,faCalculator,faDice,faPuzzlePiece,faToiletPaperSlash,faConciergeBell } from '@fortawesome/free-solid-svg-icons';

class Sidenav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subNav:false
    };
    this.toggleSubNav=this.toggleSubNav.bind(this);
  }

  toggleSubNav(){
    this.setState({ subNav:!this.state.subNav })
  }

  render() {
    const showNav=(this.props.showNav) ? " showNav" : " collapseNav";
    const showSubNav=(this.state.subNav) ? " showSubNav" : " collapseSubNav";
    return (
      <div id="sidenav">
        <nav>
          <ul>
            <div className="navToggleButton">
              <Link to="#" onClick={this.props.navToggleOnClick}>
                <span className={showNav}><FontAwesomeIcon icon={faAngleDoubleRight} size="1x"/></span>
              </Link>
            </div>
            <li>
              <Link to="/">
                <span className="navIcon"><FontAwesomeIcon icon={faNewspaper} size="sm"/></span>
                <span className={"navText"+showNav}>Dashboard</span>
                <span className={"navIcon-right"+showNav}></span>
              </Link>
            </li>
            <li>
              <Link to="/scripter">
                <span className="navIcon"><FontAwesomeIcon icon={faPaperPlane} size="sm"/></span>
                <span className={"navText"+showNav}>Scripter</span>
                <span className={"navIcon-right"+showNav}></span>           
              </Link>
            </li>
            <li>
              <Link to="/sysmon">
                <span className="navIcon"><FontAwesomeIcon icon={faSolarPanel} size="sm"/></span>
                <span className={"navText"+showNav}>Systems Monitor</span>
                <span className={"navIcon-right"+showNav}></span>
              </Link>  
            </li>
            <li>
              <Link to="/projmon">
                <span className="navIcon"><FontAwesomeIcon icon={faShapes} size="sm"/></span>
                <span className={"navText"+showNav}>Project Monitor</span>
                <span className={"navIcon-right"+showNav}></span>
              </Link>
            </li>
            <li>
              <Link to="#" onClick={this.toggleSubNav}>
                <span className={"navIcon subNavToggleButton"+showSubNav}><FontAwesomeIcon icon={faChevronRight} size="sm"/></span>
                <span className={"navText"+showNav}>Solvers</span>
                <span className={"navIcon-right"+showNav}></span>
              </Link>
            </li>
            <li className={"subNav"+showSubNav}>
              <span className={"navIcon"+showNav}></span>
              <Link to="#">
                <span className={"navText"+showNav}>Calculator</span>
                <span className="navIcon-right"><FontAwesomeIcon icon={faCalculator} size="sm"/></span>
              </Link>
            </li>
            <li className={"subNav"+showSubNav}>
              <span className={"navIcon"+showNav}></span>
              <Link to="#">
                <span className={"navText"+showNav}>Texas Hold'em</span>
                <span className="navIcon-right"><FontAwesomeIcon icon={faDice} size="sm"/></span>
              </Link>
            </li>
            <li className={"subNav"+showSubNav}>
              <span className={"navIcon"+showNav}></span>
              <Link to="#">
                <span className={"navText"+showNav}>24 Points</span>
                <span className="navIcon-right"><FontAwesomeIcon icon={faPuzzlePiece} size="sm"/></span>
              </Link>
            </li>
            <li>
              <Link to="/featrequest">
                <span className="navIcon"><FontAwesomeIcon icon={faConciergeBell} size="sm"/></span>
                <span className={"navText"+showNav}>Feature Request</span>
                <span className={"navIcon-right"+showNav}></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidenav;
