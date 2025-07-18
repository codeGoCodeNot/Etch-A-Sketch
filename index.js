import snackbar from "snackbar";

const gridContainer = document.querySelector(".grid-container");
const button = document.querySelector("button");

const createGridSize = (size) => {
  const squareSize = 960 / size;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    div.addEventListener("mouseenter", () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const randomColor = `rgb(${r}, ${g}, ${b})`;
      div.style.backgroundColor = randomColor;

      const darkness = parseFloat(div.dataset.darkness);
      if (darkness < 1) {
        darkness += 0.1;
        div.dataset.darkness = darkness.toFixed(1);
        div.style.filter = `brightness(${1 - darkness})`;
      }
    });

    gridContainer.append(div);
  }
};

const clearGrid = () => {
  gridContainer.textContent = "";
};

button.addEventListener("click", () => {
  const size = prompt("Enter a number of square max of 100");
  if (size > 100) {
    snackbar.show("Max of 100 Stupid!");
    return;
  }
  clearGrid();
  createGridSize(size);
});

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
  const gridSquare = [...document.querySelectorAll(".grid-square")];
  gridSquare.forEach((grid) => {
    grid.addEventListener("mouseleave", () => {
      grid.style.backgroundColor = "rgb(179, 194, 194)";
    });
  });
});
