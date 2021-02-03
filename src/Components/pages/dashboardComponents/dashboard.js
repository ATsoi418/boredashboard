import React, { Component } from 'react';
import Calendar from './calendar.js';

class Dashboard extends Component {
  render() {
    return (
      <div id="mainContent" className="container-fluid">
          <div id="calendar">
            <Calendar />
          </div>
      </div>
    );
  }
}

export default Dashboard;
