import React, { Component } from 'react';
import FlipClock from './flipClock.js';

class Overlay extends Component {

  render() {
    const showOverlay = (this.props.overlay) ? " show" : "" ;
    return (
      <div className={"overlay collapse" + showOverlay}>
        <div className="overlay-items">
          <div className="overlay-item">
            <h1>Hello, Ash</h1>
          </div>
          <div id="flipClock" className="overlay-item">
            <FlipClock />
          </div>
          <div className="overlay-item">
            <h3>What's on your mind?</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Overlay;