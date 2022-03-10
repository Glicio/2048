const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;

export default class Grid{
    #cells
    constructor(gridElement){
        gridElement.style.setProperty('--cell-size', `${CELL_SIZE}vmin`)
        gridElement.style.setProperty('--cell-gap', `${CELL_GAP}vmin`)
        gridElement.style.setProperty('--grid-size', GRID_SIZE)
        this.#cells = createCellElement(gridElement).map((cellElements, index) => {
            return new Cell(cellElements, index % GRID_SIZE , Math.floor(index / GRID_SIZE))
        })
        console.log(this.cells);    
    }

    get cellsByColumn(){
        return this.#cells
    }
    get #emptyCells(){
        return this.#cells.filter(cell => cell.tile == null)
    }

    randomEmptyCell(){
        const randomIdex = Math.floor(Math.random() * this.#emptyCells.length)
        return this.#emptyCells[randomIdex]
    }
    
}


class Cell{
    #cellElement
    #x
    #y
    #tile

    get tile(){
        return this.#tile
    }

    set tile(value){
        this.#tile = value;
        if (value == null) return
        this.#tile.x = this.#x
        this.#tile.y = this.#y
    }
    constructor(cellElement, x, y){
        this.#cellElement = cellElement;
        this.#x = x;
        this.#y = y;

    }
}

function createCellElement(gridElement){
    const cells = []
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++){
        const cell = document.createElement("div");
        cell.classList.add('cell');
        cells.push(cell);
        gridElement.append(cell);
    }
    return cells
}
