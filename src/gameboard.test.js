const Ship = require("./ship");
const Gameboard = require("./gameboard");

describe("Gameboard Class", () => {
  let testShip;
  let gameBoard;

  // beforeEach runs before each individual test (it/test block)
  beforeEach(() => {
    testShip = new Ship(3);
    gameBoard = new Gameboard();
  });

  // --- Test Placement ---
  test("places a ship correctly on the board horizontally", () => {
    gameBoard.placeShip(testShip, 0, 0, "horizontal");
    expect(gameBoard.cells[0][0]).toBe(testShip);
    expect(gameBoard.cells[0][1]).toBe(testShip);
    expect(gameBoard.cells[0][2]).toBe(testShip);
  });
});
