class Gameboard {
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

  placeShip(ship, startRow, startCol, orientation) {
    if (!this.isPlacementValid(ship, startRow, startCol, orientation)) {
      console.error("Invalid ship placement!");
      return false;
    }

    for (let i = 0; i < ship.length; i++) {
      let x = startRow;
      let y = startCol;

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

  isPlacementValid(ship, startRow, startCol, orientation) {
    for (let i = 0; i < ship.length; i++) {
      let x = startRow;
      let y = startCol;

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
      if (this.cells[y][x] !== null) {
        return false;
      }
    }
    return true;
  }

  receiveAttack(coordinate) {}
}

 export { Gameboard };
// module.exports = Gameboard;
