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
//spins reset button 360deg
let resetBtn = document.getElementById("reset");
let rotA = 360;
resetBtn.addEventListener("click", function () {
  resetBtn.style = "transform: rotate(" + rotA + "deg)";
  rotA += 360;
});

// creates a random color single boxes
function gridRandom() {
  let resetSingleBox = document.getElementsByClassName("singleBox");
  for (let i = 0; i < resetSingleBox.length; i++) {
    resetSingleBox[
      i
    ].style.backgroundColor = `rgb(${colorRan()},${colorRan()},${colorRan()})`;
  }
}

//spins random button 360deg
let randomBtn = document.getElementById("random");
let rotB = 360;
randomBtn.addEventListener("click", function () {
  randomBtn.style = "transform: rotate(" + rotB + "deg)";
  rotB += 360;
});

// creates a number(arg) of divs and appends them to the container
// then creates a number(arg) of divs and appends them to each of the 1st arg divs
function gridCreator(num) {
  for (let c = 0; c < num; c++) {
    let col = document.createElement("div");
    container.appendChild(col).className = "cols";
    const colContainer = document.getElementsByClassName("cols");
    for (let s = 0; s < num; s++) {
      const singleBox = document.createElement("div");
      //listens for mouseover event then changes that run radioBtnChoice function to get what radio button is selected
      let grad = 0;
      singleBox.addEventListener("mouseover", function radioBtnChoice() {
        let black = document.getElementById("black");
        let gradient = document.getElementById("gradient");
        let multiColored = document.getElementById("multiColored");
        if (black.checked) {
          singleBox.style.backgroundColor = `rgb(0,0,0)`;
        } else if (gradient.checked) {
          if (grad <= 8) {
            grad += 1;
          }
          singleBox.style.backgroundColor = `rgba(0,0,0,0.${grad})`;
        } else if (multiColored.checked) {
          singleBox.style.backgroundColor = `rgb(${colorRan()},${colorRan()},${colorRan()})`;
        }
      });
      colContainer[c].appendChild(singleBox).className = "singleBox";
    }
  }
}

function radioBtnChoice() {
  let black = document.getElementById("black");
  let gradient = document.getElementById("gradient");
  let multiColored = document.getElementById("multiColored");
  if (black.checked) {
    singleBox.style.backgroundColor = `rgb(0,0,0)`;
  } else if (gradient.checked) {
    if (grad <= 8) {
      grad += 1;
    }
    singleBox.style.backgroundColor = `rgba(0,0,0,0.${grad})`;
  } else if (multiColored.checked) {
    singleBox.style.backgroundColor = `rgb(${colorRan()},${colorRan()},${colorRan()})`;
  }
}
//creates a random number in the rgb range
function colorRan() {
  return Math.random() * 256 + 1;
}

window.onload = gridCreator(16);
