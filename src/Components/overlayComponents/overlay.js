import React, { Component } from 'react';
import FlipClock from './flipClock.js';

class Overlay extends Component {

  render() {
    const showOverlay = (this.props.overlay) ? " show" : "" ;
    return (
      <div className={"overlay collapse" + showOverlay}>
        <div className="overlay-items">
          <div id="flipClock" className="overlay-item">
            <FlipClock />
          </div>
          <div className="overlay-item">
            <h1>Hello, Ash</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Overlay;