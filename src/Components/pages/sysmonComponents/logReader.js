import React, { Component } from 'react';
import { logText } from '../../../Assets/sysLog/log_20210225-085938.txt';
// var logPath = require('path');
// var logExtension = '.txt';

// var logFiles = files.filter(funtion(file) {
//     return logPath.extname(file).toLowerCase() === logExtension;
// });

class LogReader extends Component {
  

  render () {
    return (
      <div>
        <p>{logText}</p>
      </div>
    )
  }
}

export default LogReader;