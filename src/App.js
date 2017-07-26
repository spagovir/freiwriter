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
            {this.state.value}
          </div>
        </div>
    );
  }
  type(e) {
    const ASCII_SPACE = 0x20, ASCII_DEL = 0x7f;
    var ch = e.which;
    if(ch >= ASCII_SPACE && ch != ASCII_DEL) // checks that ch is in printable range and not delete.
      this.setState({value: this.state.value + String.fromCharCode(ch)});
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
