const Ship = require("./ship");

class Gameboard {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.cells = this.initializeCells();
    this.ships = [];
    this.hits = [];
    this.missedAttacks = [];
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
  placeShip(ship, startCol, startRow, orientation) {
    if (!this.isPlacementValid(ship, startCol, startRow, orientation)) {
      console.error("Invalid ship placement!");
      return false;
    }

    for (let i = 0; i < ship.length; i++) {
      let x = startCol;
      let y = startRow;

      if (orientation === "horizontal") {
        x += i;
      } else if (orientation === "vertical") {
        y += i;
      }
      // Mark the cell as occupied by this specific ship object
      this.cells[y][x] = ship;
      // Optionally, store the coordinates within the ship object itself
      ship.coordinates.push({ x, y });
    }
    this.ships.push(ship);
    return true;
  }
  isPlacementValid(ship, startCol, startRow, orientation) {
    for (let i = 0; i < ship.length; i++) {
      let x = startCol;
      let y = startRow;

      if (orientation === "horizontal") {
        x += i;
      } else if (orientation === "vertical") {
        y += i;
      }
      // Check if coordinates are within board boundaries
      if (x >= this.size || y >= this.size || x < 0 || y < 0) {
        return false;
      }
      // Check if the cell is already occupied by another ship
      // console.log(this.cells[y][x])
      if (this.cells[y][x] != null) {
        return false;
      }
    }
    return true;
  }
  
  receiveAttack(col, row) {
    const target = this.cells[row][col];

    if (target != null && target != "miss" && target != "hit") {
      target.hit();
      this.hits.push({ col, row });
      // Mark the cell as "hit" so it can't be hit again
      this.cells[row][col] = "hit";
      return true; // It was a hit
    } else if (target === null) {
      this.missedAttacks.push({ col, row });
      this.cells[row][col] = "miss";
      return false; // It was a miss
    }
    console.log("Already attacked this spot");
    return false;
  }
  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

export {Gameboard};
// module.exports = Gameboard;
