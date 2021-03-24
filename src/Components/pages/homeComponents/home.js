import React, { Component } from 'react';
import Calendar from './calendar';
// import Todo from './todo';

class Home extends Component {
  render() {
    return (
      <div id="mainContent">
          <h1>
            Dashboard
          </h1>
          {/* <div className="stockChart">

          </div> */}
          <div id="calendar">
            <Calendar />
          </div>
          <p>View only, no clicking :)</p>
          {/* <div id="todo">
            <Todo />
          </div> */}
      </div>
    );
  }
}

export default Home;
