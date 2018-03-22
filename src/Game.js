import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Game extends Component {
  constructor() {
    super();
    this.state = { currentPlayerMark: "X",
                   xPlayerMoves: [],
                   oPlayerMoves: [],
                   winningSequence: null,
                   gameOver: false,
                   gameOutcome: null
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

  checkForTie = () => {
    return this.state.xPlayerMoves.length === 4 && this.state.oPlayerMoves.length === 4;
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
      this.setState(st => { return { 
        gameOver: true, 
        gameOutcome: this.state.currentPlayerMark + " Wins"}});
        this.props.myOutcome(this.state.currentPlayerMark);
    } else {
      if (this.checkForTie()) {
        this.setState(st => { return { 
          gameOver: true, 
          gameOutcome: "Tie"}});
        this.props.myOutcome("Tie");
      } else {
        const nextPlayerMark = this.state.currentPlayerMark === "X" ? "O" : "X";
        this.setState(st => { return { currentPlayerMark: nextPlayerMark, newGame: false }});
      }
    }
  }

  render = () => {
    return (
      <div className="row container-fluid">
        <div className="panel panel-primary narrow-panel">
          <div className="panel-heading">
            <h2 className="panel-title">Tic Tac Toe</h2>
          </div>
          <div className="panel-body">
            <div className="row">
              { this.state.gameOver 
                ? <Button id="1"
                    ref={btn1 => this.button1 = btn1}
                    className={this.state.winningSequence !== null
                      ? this.state.winningSequence.includes(1) 
                        ? "gameButton btn-success" 
                        : "gameButton"
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
                    ref={btn2 => this.button2 = btn2}
                    className={this.state.winningSequence !== null
                      ? this.state.winningSequence.includes(2) 
                        ? "gameButton btn-success" 
                        : "gameButton"
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
                    ref={btn3 => this.button3 = btn3}
                    className={this.state.winningSequence !== null
                      ? this.state.winningSequence.includes(3) 
                        ? "gameButton btn-success" 
                        : "gameButton"
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
                    ref={btn4 => this.button4 = btn4}
                    className={this.state.winningSequence !== null
                      ? this.state.winningSequence.includes(4) 
                        ? "gameButton btn-success" 
                        : "gameButton"
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
                    ref={btn5 => this.button5 = btn5}
                    className={this.state.winningSequence !== null
                      ? this.state.winningSequence.includes(5) 
                        ? "gameButton btn-success" 
                        : "gameButton"
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
                    ref={btn6 => this.button6 = btn6}
                    className={this.state.winningSequence !== null
                      ? this.state.winningSequence.includes(6) 
                        ? "gameButton btn-success" 
                        : "gameButton"
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
                    ref={btn7 => this.button7 = btn7}
                    className={this.state.winningSequence !== null
                      ? this.state.winningSequence.includes(7) 
                        ? "gameButton btn-success" 
                        : "gameButton"
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
                    ref={btn8 => this.button8 = btn8}
                    className={this.state.winningSequence !== null
                      ? this.state.winningSequence.includes(8) 
                        ? "gameButton btn-success" 
                        : "gameButton"
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
                    ref={btn9 => this.button9 = btn9}
                    className={this.state.winningSequence !== null
                      ? this.state.winningSequence.includes(9) 
                        ? "gameButton btn-success" 
                        : "gameButton"
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
              <h5 className={ this.state.gameOver && this.state.gameOutcome !== "Tie" 
                ? "alert alert-success" 
                : this.state.gameOutcome === "Tie" 
                  ? "alert alert-warning" 
                  : "alert alert-info" }>
                { this.state.gameOver && this.state.gameOutcome !== "Tie"
                    ? `Player ${this.state.currentPlayerMark} Wins!` 
                    : this.state.gameOutcome === "Tie" 
                      ? `It's A Tie!`
                      : `Player ${this.state.currentPlayerMark}'s Turn`
                }
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}