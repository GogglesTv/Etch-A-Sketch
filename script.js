"use strict";

const section2 = document.querySelector(".section2");
const container = document.querySelector("#container");
const box = document.querySelectorAll(".box");
const resetButton = document.querySelector("#reset");
const gridItem = document.querySelectorAll("div#square");

// let column = document.createElement("div");
// let square = document.createElement("div");

// for (let i = 1; i <= 16; i++) {
//   column = document.createElement("div");
//   column.classList.add("column");
//   container.append(column);
//   for (let x = 1; x <= 16; x++) {
//     square = document.createElement("div");
//     square.classList.add("box");
//     square.id = "square";
//     column.append(square);
//   }
// }

// resetButton.addEventListener("click", reset);

// function reset() {
//   container.remove(column);
//   column.remove(square);

//   let newGridSize = Number(
//     prompt("Choose a number from 1 - 100 to resize the grid. (i.e. 10 = 10x10")
//   );
//   if (!newGridSize === "number")
//     Number(prompt("Invalid input. Enter a number (i.e. 10 = 10x10"));

//   container = document.createElement("div");
//   container.setAttribute("id", "container");
//   column = document.createElement("div");
//   square = document.createElement("div");

//   for (let i = 1; i <= newGridSize ** 2; i++) {
//     section2.append(container);
//     column = document.createElement("div");
//     column.classList.add("column");
//     container.append(column);
//     for (let x = 1; x <= newGridSize; x++) {
//       square = document.createElement("div");
//       square.classList.add("box");
//       square.id = "square";
//       column.append(square);
//     }
//   }
// }
// gridItem.addEventListener("mouseenter", (event) => {
//   console.log(event.target);
//   event.target.style.backgroundColor = "black";
// });

const grid = { rows: 16, cols: 16 };
const total = grid.rows * grid.cols;
const container1 = document.createElement("div");
document.body;

createGrid(total);

function createGrid(total) {
  for (let i = 1; i <= total; i++) {
    const ele = document.createElement("div");
    container.append(ele);
    ele.textContent = `${i}`;
    ele.classList.add("box");
    ele.style.backgroundColor = "white";
    ele.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = "black";
    });
  }
  container.style.setProperty(
    `grid-template-columns`,
    `repeat(${grid.cols}, 1fr)`
  );
}
