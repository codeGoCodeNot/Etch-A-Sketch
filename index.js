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
      div.style.backgroundColor = "#4CAF50";
    });

    div.addEventListener("mouseleave", () => {
      div.style.backgroundColor = "rgb(179, 194, 194)";
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
    alert("Max of 100");
    return;
  }
  clearGrid();
  createGridSize(size);
});
