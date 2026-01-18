const Gameboard = require("./gameboard");
const Ship = require("./ship");
// import { Gameboard } from "./gameboard";
// jest.mock("./gameboard");

describe("Gameboard Class", () => {
  let gameBoard;
  let testShip;

  // beforeEach runs before each individual test (it/test block)
  beforeEach(() => {
    gameBoard = new Gameboard();
    testShip = new Ship(3);
  });

  // --- Test Placement ---
  test("places a ship correctly on the board horizontally", () => {
    gameBoard.placeShip(testShip, 0, 0, "horizontal");
    expect(gameBoard.board[0][0]).toBe(testShip);
    expect(gameBoard.board[0][1]).toBe(testShip);
    expect(gameBoard.board[0][2]).toBe(testShip);
    expect(gameBoard.ships.length).toBe(1);
  });

  test("places a ship correctly on the board vertically", () => {
    gameBoard.placeShip(testShip, 0, 0, "vertical");
    expect(gameBoard.board[0][0]).toBe(testShip);
    expect(gameBoard.board[1][0]).toBe(testShip);
    expect(gameBoard.board[2][0]).toBe(testShip);
  });

  // --- Test Attacks ---
  test("records a missed attack", () => {
    gameBoard.receiveAttack(5, 5);
    expect(gameBoard.missedAttacks.length).toBe(1);
    expect(gameBoard.missedAttacks).toEqual([{ x: 5, y: 5 }]);
    expect(gameBoard.board[5][5]).toBe("miss");
  });

  test("records a hit on a ship and calls ship.hit()", () => {
    // Place a ship first
    gameBoard.placeShip(testShip, 0, 0, "horizontal");

    // Use a spy to ensure the Ship's hit method is called
    const hitSpy = jest.spyOn(testShip, "hit");

    gameBoard.receiveAttack(0, 0);

    expect(gameBoard.board[0][0]).toBe("hit"); // Check board status
    expect(hitSpy).toHaveBeenCalledTimes(1); // Check if ship method was triggered
    expect(testShip.hits).toBe(1); // Check the ship's internal state

    // Restore the original hit function
    hitSpy.mockRestore();
  });

  // --- Test Game Status ---
  test("reports that not all ships are sunk initially", () => {
    gameBoard.placeShip(testShip, 0, 0, "horizontal");
    expect(gameBoard.allShipsSunk()).toBe(false);
  });

  test("reports all ships are sunk when they are all hit", () => {
    const tinyShip = new Ship(1);
    gameBoard.placeShip(tinyShip, 0, 0, "horizontal");

    // Hit the tiny ship once
    gameBoard.receiveAttack(0, 0);

    expect(tinyShip.isSunk()).toBe(true);
    expect(gameBoard.allShipsSunk()).toBe(true);
  });
});
