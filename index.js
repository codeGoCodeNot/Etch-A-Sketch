import snackbar from "snackbar";

const gridContainer = document.querySelector(".grid-container");
const button = document.querySelector("button");
const eraseButton = document.querySelector(".erase-button");
const sketchButton = document.querySelector(".sketch-button");
const clearButton = document.querySelector(".clear-button");

const createGridSize = (size) => {
  const squareSize = 960 / size;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    applySketchBehavior(div);
    gridContainer.append(div);
  }
};

const applySketchBehavior = (div) => {
  div.dataset.darkness = "0";

  div.addEventListener("mouseenter", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    div.style.backgroundColor = randomColor;

    let darkness = parseFloat(div.dataset.darkness);
    if (darkness < 1) {
      darkness += 0.1;
      div.dataset.darkness = darkness.toFixed(1);
      div.style.filter = `brightness(${1 - darkness})`;
    }
  });
};

button.addEventListener("click", () => {
  const size = prompt("Enter a number of square max of 100");
  if (size > 100) {
    snackbar.show("Max of 100 Stupid!");
    return;
  }
  clearGrid();
  createGridSize(size);
  snackbar.show(`Entered ${size} squares`);
});

const clearGrid = () => {
  gridContainer.textContent = "";
};

sketchButton.addEventListener("click", () => {
  const gridSquare = document.querySelectorAll(".grid-square");
  gridSquare.forEach((div) => {
    div.removeEventListener("mouseleave", eraseBehavior);
    applySketchBehavior(div);
  });
  snackbar.show("Sketch");
});

function eraseBehavior(event) {
  const div = event.currentTarget;
  div.style.backgroundColor = "rgb(179, 194, 194)";
  div.style.filter = "brightness(1)";
  div.dataset.darkness = "0";
}

eraseButton.addEventListener("click", () => {
  const gridSquare = document.querySelectorAll(".grid-square");
  gridSquare.forEach((grid) => {
    grid.addEventListener("mouseleave", eraseBehavior);
  });
  snackbar.show("Erase");
});
clearButton.addEventListener("click", () => {
  const gridSquare = document.querySelectorAll(".grid-square");
  gridSquare.forEach((grid) => {
    grid.style.backgroundColor = "rgb(179, 194, 194)";
    grid.style.filter = "brightness(1)";
    grid.dataset.darkness = "0";
  });
});
