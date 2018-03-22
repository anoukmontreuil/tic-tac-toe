import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Game } from './Game';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newGameToggle: false,
      oScore: {losses: 0, ties: 0, wins: 0},
      xScore: {losses: 0, ties: 0, wins: 0}
      }
  }

  startNewGame = () => {
    this.setState(st => { return { newGameToggle: !st.newGameToggle }});
  }

  outcome = result => {
    result === "X" 
      ? this.setState(st => { return { 
        xScore: {losses: st.xScore.losses, ties: st.xScore.ties, wins: st.xScore.wins + 1},
        oScore: {losses: st.oScore.losses + 1, ties: st.oScore.ties, wins: st.oScore.wins}}})
      : result === "O"
        ? this.setState(st => { return { 
          xScore: {losses: st.xScore.losses + 1, ties: st.xScore.ties, wins: st.xScore.wins},
          oScore: {losses: st.oScore.losses, ties: st.oScore.ties, wins: st.oScore.wins + 1}}})
        : this.setState(st => { return { 
          xScore: {losses: st.xScore.losses, ties: st.xScore.ties + 1, wins: st.xScore.wins},
          oScore: {losses: st.oScore.losses, ties: st.oScore.ties + 1, wins: st.oScore.wins}}})
  }

  render = () => {
    return (
      <div className="App">

        <div className="row">
          <div className="col-xs-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Score</h4>
              </div>
              <div className="panel-body">
                <table className="table table-condensed">
                  <thead>
                    <tr>
                      <th>Player</th>
                      <th>Won</th>
                      <th>Lost</th>
                      <th>Tie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>O</td>
                      <td>{this.state.oScore.wins}</td>
                      <td>{this.state.oScore.losses}</td>
                      <td>{this.state.oScore.ties}</td>
                    </tr>
                    <tr>
                      <td>X</td>
                      <td>{this.state.xScore.wins}</td>
                      <td>{this.state.xScore.losses}</td>
                      <td>{this.state.xScore.ties}</td>
                    </tr>
                  </tbody>
                </table> 
              </div>
            </div>
          </div>
        </div>

        <div className="App">
          { this.state.newGameToggle ? <Game myOutcome={this.outcome}/> : null }
          { this.state.newGameToggle ? null : <Game myOutcome={this.outcome}/> }
          <Button onClick={this.startNewGame}>Restart</Button>
        </div>

      </div>
    );
  }
}

export default App;