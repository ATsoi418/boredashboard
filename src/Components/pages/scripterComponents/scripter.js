import React, { Component } from 'react';
import Remarkable from 'remarkable';

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: `_${Date()}_` };
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
            <p>What would you like to write today?</p>
            <br/>
            <textarea 
                id="markdown-content" 
                onChange={this.handleChange} 
                defaultValue={this.state.value}/>
            <br/><br/>
            <div 
                className="content" 
                dangerouslySetInnerHTML={this.getRawMarkup()}/>
          </div>
          <div>
              <p>export</p>
          </div>
      </div>
    );
  }
}

export default MarkdownEditor;
