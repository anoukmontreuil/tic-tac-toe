import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Game extends Component {
  constructor() {
    super();
    this.state = { currentPlayerMark: "X",
                   xPlayerMoves: [],
                   oPlayerMoves: [],
                   winningSequence: null,
                   gameOver: false
                 }
  }

  checkForWin = playerMovesArray => {
    if (playerMovesArray.includes(1) && playerMovesArray.includes(2) && playerMovesArray.includes(3)) {
      this.setState(st => { return { winningSequence: [1, 2, 3] }});
      return true;
    }
    if (playerMovesArray.includes(1) && playerMovesArray.includes(4) && playerMovesArray.includes(7)) {
      this.setState(st => { return { winningSequence: [1, 4, 7] }});
      return true;
    }
    if (playerMovesArray.includes(1) && playerMovesArray.includes(5) && playerMovesArray.includes(9)) {
      this.setState(st => { return { winningSequence: [1, 5, 9] }});
      return true;
    }
    if (playerMovesArray.includes(2) && playerMovesArray.includes(5) && playerMovesArray.includes(8)) {
      this.setState(st => { return { winningSequence: [2, 5, 8] }});
      return true;
    }
    if (playerMovesArray.includes(3) && playerMovesArray.includes(5) && playerMovesArray.includes(7)) {
      this.setState(st => { return { winningSequence: [3, 5, 7] }});
      return true;
    }
    if (playerMovesArray.includes(3) && playerMovesArray.includes(6) && playerMovesArray.includes(9)) {
      this.setState(st => { return { winningSequence: [3, 6, 9] }});
      return true;
    }
    if (playerMovesArray.includes(4) && playerMovesArray.includes(5) && playerMovesArray.includes(6)) {
      this.setState(st => { return { winningSequence: [4, 5, 6] }});
      return true;
    }
    if (playerMovesArray.includes(7) && playerMovesArray.includes(8) && playerMovesArray.includes(9)) {
      this.setState(st => { return { winningSequence: [7, 8, 9] }});
      return true;
    }
    return false;
  }

  updatePlayerMoves = playerMovesArray => {
    this.state.currentPlayerMark === "X"
      ? this.setState(st => { return { xPlayerMoves: playerMovesArray }})
      : this.setState(st => { return { oPlayerMoves: playerMovesArray }})
  }

  handleNextStep = event => {
    event.target.innerHTML = this.state.currentPlayerMark;
    event.target.disabled = true;
    const playerMovePosition = parseInt(event.target.id, 10);
    const updatedMoves = this.state.currentPlayerMark === "X" 
      ? this.state.xPlayerMoves.map(m => m).concat(playerMovePosition)
      : this.state.oPlayerMoves.map(m => m).concat(playerMovePosition);
    this.updatePlayerMoves(updatedMoves);
    if (this.checkForWin(updatedMoves)) {
      this.setState(st => { return { gameOver: true }});
    } else {
      const nextPlayerMark = this.state.currentPlayerMark === "X" ? "O" : "X";
      this.setState(st => { return { currentPlayerMark: nextPlayerMark, newGame: false }});
    }
  }

  startNewGame = () => {
    window.location.href = '';
  }

  render = () => {
    return (
      <div className="row">
        <div className="panel panel-primary narrow-panel">
          <div className="panel-heading">
            <h2 className="panel-title">Tic Tac Toe</h2>
          </div>
          <div className="panel-body">
            <div className="row">
              { this.state.gameOver 
                ? <Button id="1"
                    ref={btn1 => this.button1 = btn1}
                    className={this.state.winningSequence.includes(1) 
                      ? "gameButton btn-success" 
                      : "gameButton"}
                    disabled>
                  </Button>
                : <Button id="1"
                    ref={btn1 => this.button1 = btn1}
                    className="gameButton" 
                    onClick={this.handleNextStep}>
                  </Button>
              }
              { this.state.gameOver 
                ? <Button id="2"
                    className={this.state.winningSequence.includes(2) 
                      ? "gameButton btn-success" 
                      : "gameButton"}
                    disabled>
                  </Button>
                : <Button id="2"
                    className="gameButton" 
                    onClick={this.handleNextStep}>
                  </Button>
              }
              { this.state.gameOver 
                ? <Button id="3"
                    className={this.state.winningSequence.includes(3) 
                      ? "gameButton btn-success" 
                      : "gameButton"}
                    disabled>
                  </Button>
                : <Button id="3"
                    className="gameButton" 
                    onClick={this.handleNextStep}>
                  </Button>
              }
            </div>
            <div className="row">
              { this.state.gameOver 
                ? <Button id="4"
                    className={this.state.winningSequence.includes(4) 
                      ? "gameButton btn-success" 
                      : "gameButton"}
                    disabled>
                  </Button>
                : <Button id="4"
                    className="gameButton" 
                    onClick={this.handleNextStep}>
                  </Button>
              }
              { this.state.gameOver 
                ? <Button id="5"
                    className={this.state.winningSequence.includes(5) 
                      ? "gameButton btn-success" 
                      : "gameButton"}
                    disabled>
                  </Button>
                : <Button id="5"
                    className="gameButton" 
                    onClick={this.handleNextStep}>
                  </Button>
              }
              { this.state.gameOver 
                ? <Button id="6"
                    className={this.state.winningSequence.includes(6) 
                      ? "gameButton btn-success" 
                      : "gameButton"}
                    disabled>
                  </Button>
                : <Button id="6"
                    className="gameButton" 
                    onClick={this.handleNextStep}>
                  </Button>
              }
            </div>
            <div className="row">
              { this.state.gameOver 
                ? <Button id="7"
                    className={this.state.winningSequence.includes(7) 
                      ? "gameButton btn-success" 
                      : "gameButton"}
                    disabled>
                  </Button>
                : <Button id="7"
                    className="gameButton" 
                    onClick={this.handleNextStep}>
                  </Button>
              }
              { this.state.gameOver 
                ? <Button id="8"
                    className={this.state.winningSequence.includes(8) 
                      ? "gameButton btn-success" 
                      : "gameButton"}
                    disabled>
                  </Button>
                : <Button id="8"
                    className="gameButton" 
                    onClick={this.handleNextStep}>
                  </Button>
              }
              { this.state.gameOver 
                ? <Button id="9"
                    className={this.state.winningSequence.includes(9) 
                      ? "gameButton btn-success" 
                      : "gameButton"}
                    disabled>
                  </Button>
                : <Button id="9"
                    className="gameButton" 
                    onClick={this.handleNextStep}>
                  </Button>
              }
            </div>
            <div>
              <h4 className={ this.state.gameOver 
                ? "alert alert-success" 
                : this.state.xPlayerMoves.length === 5 
                  && this.state.oPlayerMoves.length === 4 
                  ? "alert alert-warning"
                  : "alert alert-info" }>
                { this.state.gameOver 
                    ? `Player ${this.state.currentPlayerMark} Wins!` 
                    : this.state.xPlayerMoves.length === 5 
                      && this.state.oPlayerMoves.length === 4 
                      ? `It's A Tie!`
                      : `Player ${this.state.currentPlayerMark}'s Turn`
                }
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}