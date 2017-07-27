import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.delay = null;
    this.type = this.type.bind(this);
  }
  render() {
    return (
        <div className="App">
          <div className="Paper">
              {this.state.value}<span>|</span>
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
    if(ch != ASCII_BACKSPACE && ch != ASCII_DEL) { // checks that ch is in printable range and not delete.
      this.setState((prevState, props) => ({value: prevState.value + expandChar(String.fromCharCode(ch))}));
      clearTimeout(this.delay);
      this.delay = setTimeout(this.curriedAutoType(0),500);
    }
    e.preventDefault();
  }
  //returns a function callback that types one letter and registers the timer callback to type the next letter.
  curriedAutoType(index) {
    var that = this;
    var text = "Eheu! Scribere non potest! ";
    index = index % text.length;
    return function() {
      that.setState((prevState, props) => ({value: prevState.value + text.charAt(index)}));
      that.delay = setTimeout(that.curriedAutoType(index + 1), 150);
    }
  }
  componentWillMount() {
    document.addEventListener("keypress", this.type, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keypress", this.type, false);
  }
}

export default App;
