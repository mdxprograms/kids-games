import React from "react";
import { cloneDeep } from "lodash";

import Model from "./model";
import Grid from "./grid";
import GridItem from "./gridItem";

import Button from "../../Button";

export default class TicTacToe extends React.Component {
  state = cloneDeep(Model);

  changeTurn = () => {
    const { playerOne, playerTwo } = this.state.players;

    this.setState(
      {
        hasTurn:
          this.state.hasTurn === playerOne.marker
            ? playerTwo.marker
            : playerOne.marker,
        turnNumber: this.state.turnNumber + 1
      },
      () => this.checkScore()
    );
  };

  checkScore = () => {
    const winIndex = [
      // rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonal
      [0, 4, 8],
      [6, 4, 2]
    ];

    const { playerOne, playerTwo } = this.state.players;

    if (typeof this.hasWinCondition(winIndex, "X") !== "undefined") {
      this.setState({ winner: `${playerOne.name} wins!!` });
    } else if (typeof this.hasWinCondition(winIndex, "O") !== "undefined") {
      this.setState({ winner: `${playerTwo.name} wins!!` });
    } else if (this.state.turnNumber === 10) {
      this.setState({ winner: "It's a tie!" });
    }
  };

  hasWinCondition = (winIndex, marker) =>
    winIndex.find(matchSet => {
      const match = matchSet.filter(i => this.state.grid[i] === marker);
      return match && match.length === 3;
    });

  setMarker = (i, marker) => {
    this.setState((prevState, props) => {
      let grid = prevState.grid;
      grid[i] = marker;
      return { grid };
    }, this.changeTurn());
  };

  resetGame = () => {
    this.setState(cloneDeep(Model));
  };

  render() {
    return (
      <div style={{ textAlign: "center" }} className="tictactoe">
        <h2>Tic Tac Toe!</h2>
        <h4>Turn: {this.state.turnNumber}</h4>

        {this.state.winner.length > 0 && (
          <>
            <h1>{this.state.winner}</h1>

            <Button
              styles={{ background: "lightgreen" }}
              onClick={this.resetGame}
            >
              Play Again!
            </Button>
          </>
        )}

        {this.state.winner.length === 0 && (
          <Grid>
            {this.state.grid.map((value, index) => (
              <GridItem
                key={index}
                hasTurn={this.state.hasTurn}
                setMarker={this.setMarker}
                marker={{ index, value }}
              />
            ))}
          </Grid>
        )}
      </div>
    );
  }
}
