import React, { Component } from 'react';
import Calendar from './calendar.js';

class Home extends Component {
  render() {
    return (
      <div id="mainContent">
          <h1>
            Dashboard
          </h1>
          <div id="calendar">
            <Calendar />
          </div>
      </div>
    );
  }
}

export default Home;
