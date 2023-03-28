function changeColor(element){
    element.style.backgroundColor="black";
    element.style.border = "1px solid rgb(31, 31, 31)"
}

function createTiles(){
    const tileSections = [];
    const tiles = [];
    for (let i = 0; i < size; i++){  // <size> number of tile sections appear horizontally (cause of display:flex)
        tileSections[i] = document.createElement("div");
        container.appendChild(tileSections[i]);
        for (let j = 0; j < size; j++){  // <size> number of tiles appear vertically in each tile section
            tiles[j] = document.createElement("div");
            tiles[j].classList.toggle("tile");  // This class gives them size and gray background
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
    
    while (container.lastChild != null){
        container.removeChild(container.lastChild);
    }
    
    createTiles();
}

const container = document.querySelector(".container");  // Container for the grid of tiles

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", reset);

const changeSizeButton = document.querySelector(".changeSizeButton");
changeSizeButton.addEventListener("click", changeSize);


let size = 16;  // Default size
createTiles();  // Draw initial grid