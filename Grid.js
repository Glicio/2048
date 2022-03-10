const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;

export default class Grid{ 
    constructor(gridElement){
        gridElement.style.setProperty('--cell-size', CELL_SIZE)
        gridElement.style.setProperty('--cell-gap', `${CELL_GAP}vmin`)
        gridElement.style.setProperty('--grid-size', `${GRID_SIZE}vmin`)
    }
}