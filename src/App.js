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

  clearScoreBoard = () => {
    this.setState(st => { return { 
      oScore: {losses: 0, ties: 0, wins: 0},
      xScore: {losses: 0, ties: 0, wins: 0} }}
    );
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

        <div className="App">
          { this.state.newGameToggle ? <Game myOutcome={this.outcome}/> : null }
          { this.state.newGameToggle ? null : <Game myOutcome={this.outcome}/> }
          <Button onClick={this.startNewGame}>New Game</Button>
          <Button onClick={this.clearScoreBoard}>Clear Score</Button>
        </div>

        <div className="row">
          <div className="scoreContainer">
            <div className="panel panel-default increase-panel-top-margin">
              <div className="panel-heading">
                <h3 className="panel-title">Score</h3>
              </div>
              <div className="panel-body panel-condensed">
                <table className="table table-condensed">
                  <thead>
                    <tr>
                      <th className="darkBlue">Player</th>
                      <th className="darkGreen">Won</th>
                      <th className="darkRed">Lost</th>
                      <th className="darkYellow">Tie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="darkBlue"><strong>O</strong></td>
                      <td className="darkGreen">{this.state.oScore.wins}</td>
                      <td className="darkRed">{this.state.oScore.losses}</td>
                      <td className="darkYellow">{this.state.oScore.ties}</td>
                    </tr>
                    <tr>
                      <td className="darkBlue"><strong>X</strong></td>
                      <td className="darkGreen">{this.state.xScore.wins}</td>
                      <td className="darkRed">{this.state.xScore.losses}</td>
                      <td className="darkYellow">{this.state.xScore.ties}</td>
                    </tr>
                  </tbody>
                </table> 
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;