function reset(){
    for (let i = 0; i < size; i++){
        container.removeChild(container.lastChild);
    }
    draw();
}

function draw(){
    for (let i = 0; i < size; i++){
        tileSections[i] = document.createElement("div");
        tileSections[i].classList.toggle("tileSection");
        container.appendChild(tileSections[i]);
        for (let j = 0; j < size; j++){
            tiles[j] = document.createElement("div");
            tiles[j].classList.toggle("tile");
            tiles[j].setAttribute("onmouseover", "changeColor(this)");
            tileSections[i].appendChild(tiles[j]);
        }
    }
}

function changeColor(element){
    element.style.backgroundColor="black";
    element.style.border = "1px solid rgb(31, 31, 31)"
}

// tiles[0].addEventListener("mouseover", changeColor);

// function changeColor(){
//     tiles[0].style.backgroundColor = "black";
// }

const container = document.querySelector(".container");

let size = 16;

const tileSections = [];
const tiles = [];

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", reset);

draw();