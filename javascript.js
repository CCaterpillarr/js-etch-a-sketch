const container = document.querySelector(".container");

let size = 16;

const tileSections = [];
const tiles = [];

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

// tiles[0].addEventListener("mouseover", changeColor);

// function changeColor(){
//     tiles[0].style.backgroundColor = "black";
// }

function changeColor(element){
    element.style.backgroundColor="black";
    element.style.border = "1px solid rgb(31, 31, 31)"
}