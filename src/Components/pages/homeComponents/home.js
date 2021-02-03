import React, { Component } from 'react';
import FlipClock from './flipClock.js';
// import logo from './logo.svg';

class Homepage extends Component {
  render() {
    return (
      <div id="mainContent" className="container-fluid">
          <div id="flipClock">
            <FlipClock />
          </div>
      </div>
    );
  }
}

export default Homepage;
