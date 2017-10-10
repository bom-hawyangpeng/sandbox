// https://stackoverflow.com/questions/42987939/styled-components-organization

import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';

const Button = styled.button`
  background-color: ${props => props.highlight ? 'palevioletred' : 'lightgrey'};
  margin: 10px;
  height: 3em;
  width: 3em;
  font-size: 25px;
  border: none;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class App extends Component {

  constructor() {
    super();

    this.state = {
      score: 0,
      rowCount: 4,
      columnCount: 4,
      x: null,
      y: null
    }
  }

  componentDidMount() {
    this.selectRandomCell();
  }

  generateGrid() {
    let rows = [];
    for (let x = 0; x < this.state.rowCount; x++){
      let cells = [];
      for (let y = 0; y < this.state.columnCount; y++){
        const highlight = x === this.state.x && y === this.state.y;
        cells.push(<Button key={`cell${x}-${y}`} highlight={highlight} onClick={() => this.handleClick(highlight)}></Button>)
      }
      rows.push(<Row key={`row${x}`}>{cells}</Row>)
    }
    return rows;
  }

  handleClick(highlight) {
    if ( highlight ) {
      this.increaseScore(1);
    } else {
      this.decreaseScore(1);
    }
    this.selectRandomCell();
  }

  selectRandomCell() {
    let randomX = Math.floor(Math.random() * this.state.rowCount);
    let randomY = Math.floor(Math.random() * this.state.columnCount);
    this.setState({ x: randomX, y: randomY })
  }

  increaseScore(score) {
    this.setState({ score: this.state.score + score});
  }

  decreaseScore(score) {
    this.setState({ score: this.state.score - score});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Score: {this.state.score}
        </p>
        <Grid>
          {this.generateGrid()}
        </Grid>
      </div>
    );
  }
}

export default App;
