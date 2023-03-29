function changeColor(element){
    element.style.backgroundColor="black";
}

function createTiles(){
    const tileSections = [];
    const tiles = [];
    for (let i = 0; i < size; i++){  // <size> number of tile sections appear horizontally (cause of display:flex)
        tileSections[i] = document.createElement("div");
        tileSections[i].classList.toggle("tileSection");
        grid.appendChild(tileSections[i]);
        for (let j = 0; j < size; j++){  // <size> number of tiles appear vertically in each tile section
            tiles[j] = document.createElement("div");
            tiles[j].classList.toggle("tile");  // This class gives them size and gray background
            tiles[j].setAttribute("id", `${j}-${i}`);  // Gives each tile a unique id. Not used for anything currently but might be very useful in the future.
            tiles[j].setAttribute("onmouseover", "changeColor(this)");
            tileSections[i].appendChild(tiles[j]);
        }
    }
}

function changeSize(){
    let userInputSize = prompt("Enter new size (max size - 100):");
    if(isNaN(userInputSize) || userInputSize === ""){
        alert("Not a valid size");
    } else if (userInputSize === null){
    // Does nothing if input window cancelled by user
    } else if (Number(userInputSize) > 100) {
        alert("Enter a size below 100");
    } else {
        size = userInputSize;
        reset();
    }
}

function reset(){
    
    while (grid.lastChild != null){
        grid.removeChild(grid.lastChild);
    }
    
    createTiles();
}

const grid = document.querySelector(".grid");  // Container for the tileSections

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", reset);

const changeSizeButton = document.querySelector(".changeSizeButton");
changeSizeButton.addEventListener("click", changeSize);


let size = 16;  // Default size
createTiles();  // Draw initial grid