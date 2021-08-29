const GRID_WIDTH = 50; //vmin
const GRID_HEIGHT = 50; //vmin
const INITIAL_SIZE = 16; // # rows and cols

function getRandomInt(size) {
    return Math.floor(Math.random() * size);
}

const changeBackgroundColor = e => {
    e.target.style.backgroundColor = `rgb(${getRandomInt(256)},${getRandomInt(256)}, ${getRandomInt(256)}`;
}

function createGrid(size) {
    // Create background grid
    const grid = document.getElementById('grid');
    grid.style.display = "grid";
    grid.style.gridTemplateRows = `repeat(${size}, ${GRID_HEIGHT / size}vmin)`;
    grid.style.gridTemplateColumns = `repeat(${size}, ${GRID_WIDTH / size}vmin)`;
    grid.style.justifyContent = "center";
    grid.style.width = `${GRID_WIDTH}vmin`;
    grid.style.height = `${GRID_HEIGHT}vmin`;
    grid.style.border = "5px solid black";

    // Create divs in grid, add event listeners
    for(let i = 1; i <= size; i++) {
        for(let j = 1; j <= size; j++) {
            let element = document.createElement("div");
            element.style.gridRow = `${i} / span 1`;
            element.style.gridColumn = `${j} / span 1`;
            element.style.backgroundColor = "white";
            element.addEventListener('mouseenter', changeBackgroundColor);
            grid.appendChild(element);
        }
    }
}

const clearGrid = () => {
    // Get children of grid
    let elements = document.getElementById('grid');

    // Iterate over each child and clear color
    for(let i = elements.firstChild; i !== null; i = i.nextSibling) {
        i.style.backgroundColor = "white";
    }
}

const changeGridSize = () => {
    let grid_size;
    do {
        grid_size = parseInt(prompt("Enter grid size (1-100):"));
        console.log(grid_size);
    }
    while(isNaN(grid_size) || grid_size < 1 || grid_size > 100)
    createGrid(grid_size);
}

createGrid(INITIAL_SIZE);
const clear_button = document.getElementById('clear-grid');
clear_button.addEventListener('click', clearGrid);
const change_size = document.getElementById('change-size');
change_size.addEventListener('click', changeGridSize);