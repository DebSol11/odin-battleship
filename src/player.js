import { Gameboard } from "./gameboard";

class Player {
  constructor(name, rows, cols) {
    this.name = name;
    this.gameboard = new Gameboard(rows, cols);
  }

  attack(opponent, col, row) {
    return opponent.gameboard.receiveAttack(col, row);
  }
}

export {Player};
