const container = document.querySelector(".container");

const tileSections = [3];

tileSections[0] = document.createElement("div");
tileSections[0].classList.toggle("tileSection");
container.appendChild(tileSections[0]);

const tile = document.createElement("div");
tile.classList.toggle("tile");
container.appendChild(tile);