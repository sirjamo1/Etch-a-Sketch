const container = document.getElementById("gridContainer");
// user input
function getUserNum() {
  const userNumInput = document.getElementById("quantity").value;
  deleteGridDivs(container);
  gridCreator(userNumInput);
}
// deletes all divs under under #gridContainer
function deleteGridDivs(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
// resets all single boxes (the amount the user put in)to white
function resetGrid() {
  let resetSingleBox = document.getElementsByClassName("singleBox");
  for (let i = 0; i < resetSingleBox.length; i++) {
    resetSingleBox[i].style.backgroundColor = `rgb(255, 255, 255)`;
  }
}
// creates a random color single boxes
function gridRandom() {
  let resetSingleBox = document.getElementsByClassName("singleBox");
  for (let i = 0; i < resetSingleBox.length; i++) {
    resetSingleBox[
      i
    ].style.backgroundColor = `rgb(${colorRan()},${colorRan()},${colorRan()})`;
  }
}

// creates a number(arg) of divs and appends them to the container
// then creates a number(arg) of divs and appends them to each of the 1st arg divs
function gridCreator(num) {
  for (let c = 0; c < num; c++) {
    let col = document.createElement("div");
    container.appendChild(col).className = "cols";
    const colContainer = document.getElementsByClassName("cols");
    for (let s = 0; s < num; s++) {
      const singleBox = document.createElement("div");
      //listens for mouseover event then changes that div to a random color with the colorRan function
      singleBox.addEventListener("mouseover", () => {
        singleBox.style.backgroundColor = `rgb(${colorRan()},${colorRan()},${colorRan()})`;
      });
      colContainer[c].appendChild(singleBox).className = "singleBox";
    }
  }
}
//creates a random number in the rgb range
function colorRan() {
  return Math.random() * 256 + 1;
}
window.onload = gridCreator(16);
