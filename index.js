const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-square");

  gridContainer.append(div);
}
const gridSquare = [...document.querySelectorAll(".grid-square")];
gridSquare.forEach((grid) => {
  grid.addEventListener("mouseenter", () => {
    grid.style.backgroundColor = "#4CAF50";
  });

  grid.addEventListener("mouseleave", () => {
    grid.style.backgroundColor = "rgb(179, 194, 194)";
  });
});
