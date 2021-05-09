import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes,faCalculator } from '@fortawesome/free-solid-svg-icons';

class Games extends Component {

  render() {
    return (
      <div id="mainContent">
        <h1>
          Games
        </h1>
        <h3>
          Puzzles
        </h3>
        <div className="games-row">
          <div className="games-col">
            <Link to="/games/tfpoints">
              <FontAwesomeIcon icon={faCalculator} size="lg"/>24 Points
            </Link>
          </div>
          <div className="games-col">
            <Link to="/games/foo">
              <FontAwesomeIcon icon={faShapes} size="lg"/>Other Game...
            </Link>
          </div>
        </div>
        <br></br>
        <h3>
          Card Games
        </h3>
        <div className="row">

        </div>
      </div>
    );
  }
}

export default Games;