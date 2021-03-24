import React, { Component } from 'react';

class TfPoints extends Component {

  state = {
    solutions: null,
  }

  render() {
    return (
      <div className="tfPointsGame">
        <div className="tf_inputs">
          {/* {this.renderInputs()} */}
        </div>
        <div className="tf_calcButton"></div>
        <div className="tf_solutions">
          {/* {this.renderSolutions()} */}
        </div>
      </div>
    );
  }
}

export default TfPoints;