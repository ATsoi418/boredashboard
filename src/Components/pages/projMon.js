import React, { Component } from 'react';

class ProjMon extends Component {
  render() {
    return (
      <div className="container-fluid">
          <h1>
              Project Monitor
          </h1>
          <p>
              Projects go here. <br/>
              {Date()}
          </p>

      </div>
    );
  }
}

export default ProjMon;
