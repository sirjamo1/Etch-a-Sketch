const container = document.getElementById("gridContainer");

gridCreator(16, 16);

// creates a number(1st arg) of divs and appends them to the container
// then creates a number(2nd arg) of divs and appends them to each of the 1st arg divs
function gridCreator(colNum, singleBoxNum) {
  for (let c = 0; c < colNum; c++) {
    let col = document.createElement("div");
    container.appendChild(col).className = "cols";
    const colContainer = document.getElementsByClassName("cols");
    for (let s = 0; s < singleBoxNum; s++) {
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
  return (Math.random() * 256) >> 0;
}
