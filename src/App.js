import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.count}
        </p>
        <div className="ButtonContainer">
          <Button onClick={() => this.setState({ count: this.state.count + 1 })}>+</Button>
          <Button onClick={() => this.setState({ count: this.state.count - 1 })}>-</Button>
        </div>
      </div>
    );
  }
}

export default App;
