import React, { Component } from 'react';
import { Remarkable } from 'remarkable';

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.time = new Date();
    this.state = { value: `_${this.time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}_` };
  }
  
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }
  
  render() {
    return (
      <div id="mainContent">
          <h1>
            Scripter
          </h1>
          <div className="MarkdownEditor">
            <div 
                id="markdown-output"
                dangerouslySetInnerHTML={this.getRawMarkup()}/>
            <textarea 
                id="markdown-input" 
                onChange={this.handleChange} 
                defaultValue={this.state.value}/>
          </div>
          <div>
              <p>export</p>
          </div>
      </div>
    );
  }
}

export default MarkdownEditor;
