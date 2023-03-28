const container = document.querySelector(".container");

const tileSection = document.createElement("div");
tileSection.classList.toggle("tileSection");
container.appendChild(tileSection);

const tile = document.createElement("div");
tile.classList.toggle("tile");
container.appendChild(tile);