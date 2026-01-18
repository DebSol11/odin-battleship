export class Gameboard {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.cells = this.initializeCells();
    this.ships = [];
    this.hits = [];
  }
  initializeCells() {
    let my2DArray = [];
    for (let i = 0; i < this.rows; i++) {
      my2DArray[i] = [];
      for (let j = 0; j < this.cols; j++) {
        my2DArray[i][j] = null; // write the value "null" in all the cells
      }
    }
    return my2DArray;
  }

  placeShip(coordinates) {}
  receiveAttack(coordinate) {}
}


module.exports = Gameboard;
