const container = document.getElementById("gridContainer");

gridCreator(16, 16);

// creates a number(1st arg) of divs and appends them to the container
// then creates a number(2nd arg) of divs and appends them to each of the 1st arg divs
function gridCreator(rowNum, colNum) {
  for (let r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "rows";
    const rowContainer = document.getElementsByClassName("rows");
    for (let c = 0; c < colNum; c++) {
      let col = document.createElement("div");
      rowContainer[r].appendChild(col).className = "cols";
    }
  }
}

