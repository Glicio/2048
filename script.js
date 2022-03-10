console.log("script.js carregado!")
import Grid from './Grid'

const gameBoard = document.getElementById('game-board')
console.log(gameBoard);
const grid = new Grid(gameBoard)