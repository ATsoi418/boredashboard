import React, { Component } from 'react';
import FlipClock from './flipClock.js';
import Calendar from './calendar.js';

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
          <div id="flipClock">
            <FlipClock />
          </div>
          <div id="calendar">
            <Calendar />
          </div>
      </div>
    );
  }
}

export default Dashboard;
