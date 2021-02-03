import React, { Component } from 'react';

class ProjMon extends Component {
  render() {
    return (
      <div id="mainContent">
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
