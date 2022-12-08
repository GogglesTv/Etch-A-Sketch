"use strict";

const container = document.querySelector("#container");
const button = document.querySelector("button");
let column = document.createElement("div");
let square = document.createElement("div");

for (let i = 1; i <= 16; i++) {
  column = document.createElement("div");
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
