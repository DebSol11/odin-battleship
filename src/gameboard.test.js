const Gameboard = require("./Gameboard");

describe("Gameboard Class", () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = new Gameboard();
  });

  test("should place ships correctly", () => {
    expect(gameBoard.placeShip(1, 1, "horizontal", 3)).tobe(true);
    expect(gameBoard.placeShip(1, 1, "vertical", 4)).toBe(false); // Overlap
  });
});
