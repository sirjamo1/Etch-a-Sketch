const container = document.getElementById("gridContainer");

gridCreator(16);

// creates a number(arg) of divs and appends them to the container
// then creates a number(arg) of divs and appends them to each of the 1st arg divs
function gridCreator(num) {
  for (let c = 0; c < num; c++) {
    let col = document.createElement("div");
    container.appendChild(col).className = "cols";
    const colContainer = document.getElementsByClassName("cols");
    for (let s = 0; s < num; s++) {
      let singleBox = document.createElement("div");
      //listens for mouseover event then changes that div to a random color with the colorRan function
      singleBox.addEventListener("mouseover", () => {
        singleBox.style.backgroundColor = `rgb(${colorRan()},${colorRan()},${colorRan()})`;
      });
      colContainer[c].appendChild(singleBox).className = "singleBox";
    }
  }
}
function colorRan() {
  return Math.random() * 256 + 1;
}
