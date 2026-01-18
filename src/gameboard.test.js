const Gameboard = require("./gameboard");

// import { Gameboard } from "./gameboard";
// jest.mock("./gameboard");

describe("Gameboard Class", () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = new Gameboard();
  });

  test("should place ships correctly", () => {
    expect(gameBoard.placeShip(3, 1, 1, "horizontal")).tobe(true);
    expect(gameBoard.placeShip(4, 1, 1, "vertical")).toBe(false); // Overlap
  });
});
