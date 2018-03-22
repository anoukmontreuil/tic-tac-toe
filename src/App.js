import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Game } from './Game';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newGameToggle: false,
      xScore: 0,
      oScore: 0}
  }

  startNewGame = () => {
    this.setState(st => { return { newGameToggle: !st.newGameToggle }});
  }

  render = () => {
    return (
      <div>
        <div className="App">
        { this.state.newGameToggle ? <Game/> : null }
        { this.state.newGameToggle ? null : <Game/> }
        <Button onClick={this.startNewGame}>Restart</Button>
        </div>
      </div>
    );
  }
}

export default App;