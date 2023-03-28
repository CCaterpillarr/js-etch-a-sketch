const container = document.querySelector(".container");

let size = 3;

const tileSections = [];
const tiles = [];

for (let i = 0; i < size; i++){
    tileSections[i] = document.createElement("div");
    tileSections[i].classList.toggle("tileSection");
    container.appendChild(tileSections[i]);
    
    for (let j = 0; j < size; j++){
        tiles[j] = document.createElement("div");
        tiles[j].classList.toggle("tile");
        tileSections[i].appendChild(tiles[j]);
    }
}





