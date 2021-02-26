import React, { Component } from 'react';
import CalculatorSimple from './calculatorSimple.js';

class Utils extends Component {
  render() {
    return (
      <div id="mainContent">
        <h1>
            Utilities
        </h1>
        <div className="calculatorSimple">
          <CalculatorSimple />
        </div>
      </div>
    );
  }
}

export default Utils;