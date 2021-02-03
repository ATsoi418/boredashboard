import React, { Component } from 'react';

class Config extends Component {
  render() {
    return (
      <div id="mainContent" className="container-fluid">
        <h1>
            Config
        </h1>
        <p>
            Projects go here. <br/>
            {Date()}
        </p>

      </div>
    );
  }
}

export default Config;