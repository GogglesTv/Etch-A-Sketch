"use strict";

const container = document.querySelector("#container");
const button = document.querySelector("button");

for (let i = 1; i <= 16; i++) {
  let column = document.createElement("div");
  container.append(column);
  for (let x = 1; x <= 16; x++) {
    let square = document.createElement("div");
    square.classList.add("box");
    column.append(square);
  }
}
