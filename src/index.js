import "./styles.css";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

const gameBoard = new Gameboard(10, 10);
console.log(gameBoard.initializeCells());

const carrier = new Ship(5); // A ship of length 5
const yacht = new Ship(3);

// Place the carrier starting at (0, 0) horizontally
gameBoard.placeShip(carrier, 0, 0, "horizontal");
// Place the yacht
gameBoard.placeShip(yacht, 0, 3, "vertical");

console.log(gameBoard.cells[0][2]); // Should output the 'carrier' ship object
console.log(gameBoard.cells);
