const ROWS = 16;
const COLS = 16;
const GRID_WIDTH = 50;
const GRID_HEIGHT = 50;

const changeBackgroundColorRed = e => {
    e.target.style.backgroundColor = "red";
}

const changeBackgroundColorGreen = e => {
    e.target.style.backgroundColor = "green";
}

createGrid();

function createGrid() {
    // Create background grid
    const grid = document.getElementById('grid');
    grid.style.display = "grid";
    grid.style.gridTemplateRows = `repeat(${ROWS}, ${GRID_HEIGHT / ROWS}vmin)`;
    grid.style.gridTemplateColumns = `repeat(${COLS}, ${GRID_WIDTH / COLS}vmin)`;
    grid.style.justifyContent = "center";
    grid.style.width = `${GRID_WIDTH}vmin`;
    grid.style.height = `${GRID_HEIGHT}vmin`;
    grid.style.border = "5px solid black";

    // Create divs in grid
    for(let i = 1; i <= ROWS; i++) {
        for(let j = 1; j <= COLS; j++) {
            let element = document.createElement("div");
            element.style.gridRow = `${i} / span 1`;
            element.style.gridColumn = `${j} / span 1`;
            element.style.backgroundColor = "white";
            element.addEventListener('mouseenter', changeBackgroundColorRed);
            element.addEventListener('mouseleave', changeBackgroundColorGreen);
            grid.appendChild(element);
        }
    }
}

function clearGrid() {
    let element = document.cgetElementById('grid').childNodes;
    for(let i = 0; i <= ROWS * COLS; i++) {
        element[i].style.backgroundColor = "white";
    }
}

const clear_button = document.getElementById('clear-grid-button');
clear_button.addEventListener('click', clearGrid);