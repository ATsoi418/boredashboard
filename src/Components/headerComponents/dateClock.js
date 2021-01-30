import React, { Component } from 'react';

class DateClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateNow: ""
    }
  }

  componentDidMount() {
    setInterval(function() {
      var today = new Date(),
      dateStr =  (Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(today)) + ', ' + (Intl.DateTimeFormat('en-US', { month: 'short'}).format(today)) + ' ' + today.getDate() + ', ' + today.getFullYear();

      this.setState({
        dateNow: dateStr
      });
    }.bind(this), 1000);
  }
  
  render() {
    return (
      <div className={"dateClock "+((window.location.pathname)==="/" ? 'onHome' : 'offHome')}>
        {this.state.dateNow}        
      </div>
    )
  }
}
export default DateClock;