console.log("script.js carregado!")
import Grid from './Grid.js'
import Tile from './Tile.js'

const gameBoard = document.getElementById('game-board')
const grid = new Grid(gameBoard)



grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)

setupInput()



function setupInput() {
    window.addEventListener("keydown", handleClick, {once: true})
}

function handleClick(e){
 switch(e.key){
    case "ArrowUp":
        moveUp();
        break;
    case "ArrowDown":
        moveDown();
        break;
    case "ArrowLeft":
        moveLeft();
        break;
    case "ArrowRight":
        moveRight();
        break;
    default:
        setupInput();
        break
    }  

    setupInput()
}

function moveUp(){
    slideTiles(grid.cellsByColumn)
}