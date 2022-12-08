"use strict";

let section2 = document.querySelector(".section2");
let container = document.querySelector("#container");
const button = document.querySelector("button");
let column = document.createElement("div");
let square = document.createElement("div");

for (let i = 1; i <= 16; i++) {
  column = document.createElement("div");
  column.classList.add("column");
  container.append(column);
  for (let x = 1; x <= 16; x++) {
    square = document.createElement("div");
    square.classList.add("box");
    column.append(square);
  }
}

button.addEventListener("click", () => {
  container.remove(column);
  column.remove(square);
});
button.addEventListener("click", resize);

function resize() {
  container.remove(column);
  column.remove(square);

  let newGridSize = Number(
    prompt("Choose a number to resize the grid. (i.e. 10 = 10x10")
  );
  if (!newGridSize === "number")
    Number(prompt("Invalid input. Enter a number (i.e. 10 = 10x10"));

  container = document.createElement("div");
  container.setAttribute("id", "container");
  column = document.createElement("div");
  square = document.createElement("div");

  for (let i = 1; i <= newGridSize; i++) {
    section2.append(container);
    column = document.createElement("div");
    column.classList.add("column");
    container.append(column);
    for (let x = 1; x <= newGridSize; x++) {
      square = document.createElement("div");
      square.classList.add("box");
      column.append(square);
    }
  }
}
