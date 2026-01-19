import "./styles.css";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

// const gameBoard = new Gameboard(10, 10);
// console.log(gameBoard.initializeCells());

// const carrier = new Ship(5); // A ship of length 5
// const yacht = new Ship(3);

// // Place the carrier starting at (0, 0) horizontally
// gameBoard.placeShip(carrier, 0, 0, "horizontal");
// // Place the yacht
// gameBoard.placeShip(yacht, 0, 3, "vertical");

// console.log(gameBoard.cells[0][2]); // Should output the 'carrier' ship object
// console.log(gameBoard.cells);

// // try receiveAttackMethod()
// gameBoard.receiveAttack(0, 3);
// gameBoard.receiveAttack(1, 3);
// gameBoard.receiveAttack(0, 4);
// gameBoard.receiveAttack(0, 5);
// gameBoard.receiveAttack(1, 3);

// console.log(gameBoard.missedAttacks);
// console.log(gameBoard.hits);

const player1 = new Player("Alice", 10, 10);
const player2 = new Player("Bob", 10, 10);

const ship1 = new Ship(5);
console.log(player1.gameboard);
player1.gameboard.placeShip(ship1, 0, 0, "horizontal");
player2.gameboard.placeShip(ship1, 0, 0, "horizontal");

const attackResults = player1.attack(player2, 0, 0) // player1 attacks player2
console.log(attackResults);

console.log(player2.gameboard);