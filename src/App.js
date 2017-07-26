import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.type = this.type.bind(this);
  }
  render() {
    return (
        <div className="App">
          <div className="Paper">
            <pre>
              {this.state.value}<span>|</span>
            </pre>
          </div>
        </div>
    );
  }
  type(e) {

    const ASCII_BACKSPACE = 0x08, ASCII_DEL = 0x7f;
    //character expanding function for linebreak formatting.
    var expandChar = function(ch) {
      const NEWLINE = '\r\n';
      switch(ch) {
        case '\r':
          return NEWLINE;
        case '\n':
          return NEWLINE;
        default:
          return ch;
      }
    }

    var ch = e.which;
    if(ch != ASCII_BACKSPACE && ch != ASCII_DEL) // checks that ch is in printable range and not delete.
      this.setState({value: this.state.value + expandChar(String.fromCharCode(ch))});
    e.preventDefault();
  }
  componentWillMount() {
    document.addEventListener("keypress", this.type, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keypress", this.type, false);
  }
}

export default App;
