import React, { Component } from 'react';
import { format, parse , 
         addDays , isSameDay , 
         startOfWeek, endOfWeek , 
         startOfMonth , endOfMonth , addMonths , isSameMonth, subMonths } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Calendar extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="cal-header">
        <div className="cal-header-item">
          <div className="icon" onClick={this.prevMonth}>
            <FontAwesomeIcon icon={faChevronLeft} size="sm"/>
          </div>
        </div>
        <div className="cal-header-item">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="cal-header-item" onClick={this.nextMonth}>
          <div className="icon">
            <FontAwesomeIcon icon={faChevronRight} size="sm"/>
          </div>
        </div>
      </div>
    );
  }

  renderDays() {
    const days = ["S","M","T","W","T","F","S"];
    const daysRow = [];

    for (let i = 0; i < 7; i++) {
      daysRow.push(
        <div className="cal-day-item" key={i}>
            {days[i]}
        </div>
      );
    }

    return <div className="cal-day-items">{daysRow}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`cal-cell ${
              !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(parse(cloneDay))}
            >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="cal-row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="cal-body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;