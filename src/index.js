import "./styles.css";
import * as generalFunctions from "./generalFunctions";
import { Gameboard } from "./gameboard";

const gameBoard = new Gameboard(10, 10);
console.log(gameBoard.initializeCells());

console.log(generalFunctions.isPrime(44));