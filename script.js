"use strict";

const resetButton = document.querySelector("#reset");
const clearButton = document.querySelector("#clear");

let cell = document.createElement("div");
let container = document.querySelector("#container");

createGrid();
function createGrid() {
  for (let i = 1; i <= 256; i++) {
    cell = document.createElement("div");
    container.append(cell);
    cell.classList.add("box");
    cell.style.backgroundColor = "white";
    cell.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = makeRandColor();
    });
  }

  container.style.setProperty(`grid-template-columns`, `repeat(16, 2fr)`);
  container.style.setProperty(`grid-template-rows`, `repeat(16, 2fr)`);
}

const makeRandColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g},${b})`;
};

resetButton.addEventListener("click", reset);
function reset() {
  container.innerHTML = "";

  let newGridSize = Number(
    prompt("Choose a number from 1 - 100 to resize the grid. (i.e. 10 = 10x10")
  );
  if (newGridSize > 100 || newGridSize < 1 || newGridSize === NaN) {
    Number(prompt("Invalid input. Enter a number (i.e. 10 = 10x10"));
  } else createGrid();

  container.style.setProperty(
    `grid-template-columns`,
    `repeat(${newGridSize}, 2fr)`
  );
  container.style.setProperty(
    `grid-template-rows`,
    `repeat(${newGridSize}, 2fr)`
  );

  for (let i = 1; i <= newGridSize ** 2; i++) {
    cell = document.createElement("div");
    container.append(cell);
    cell.classList.add("box");
    cell.style.backgroundColor = "white";
    cell.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = makeRandColor();
      if (e.target.style.backgroundColor === makeRandColor) {
      }
    });
  }
}

clearButton.addEventListener("click", clear);
function clear() {
  let gridBox = document.querySelectorAll(".box");
  for (const box of gridBox) {
    box.style.backgroundColor = "white";
  }
}
