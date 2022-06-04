const container = document.getElementById("gridContainer");
const mainContainer = document.getElementById("mainContainer");
const shakeSound = new Audio("sounds/shaker.wav");
const drawingSound = new Audio("sounds/drawing.wav");
const wheelClick = new Audio("sounds/wheel_click.wav");
// auto loads 16*16 grid
window.onload = function () {
  gridCreator(16);
};
// deletes current div's then creates new div's (user input)
function getUserNum() {
  const userNumInput = document.getElementById("quantity").value;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  gridCreator(userNumInput);
}
// resets all single boxes (the amount the user put in) to white, appends shake animation and plays shake sound effect
function resetGrid() {
  shakeSound.play();
  let resetSingleBox = document.getElementsByClassName("singleBox");
  mainContainer.style.animation = "shaker 1.3s linear 1";
  for (let i = 0; i < resetSingleBox.length; i++) {
    resetSingleBox[i].style.backgroundColor = `rgb(255, 255, 255)`;
  }
}
//spins reset button 360deg and += 360 to total so it can run again
let resetBtn = document.getElementById("reset");
let rotA = 360;
resetBtn.addEventListener("click", function () {
  resetBtn.style = "transform: rotate(" + rotA + "deg)";
  rotA += 360;
});
// deletes shake animation from maincontainer styles with mousedown (not perfect but good work around)
resetBtn.addEventListener("mousedown", function resetShake() {
  wheelClick.play();
  mainContainer.style.removeProperty("animation");
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

//spins random button 360deg and += 360 to total so it can run again
let randomBtn = document.getElementById("random");
let rotB = 360;
randomBtn.addEventListener("click", function () {
  wheelClick.play();
  randomBtn.style = "transform: rotate(" + rotB + "deg)";
  rotB += 360;
});

// creates a number(arg) of div's and appends them to the container
// then creates a number(arg) of divs and appends them to each of the 1st arg div's
//(only if the number(arg) is between 1-101)
function gridCreator(num) {
  if (num < 2) {
    alert("Please enter a number larger then 2");
  } else if (num > 100) {
    alert("Please enter a number smaller then 101");
  } else {
    for (let c = 0; c < num; c++) {
      let col = document.createElement("div");
      container.appendChild(col).className = "cols";
      const colContainer = document.getElementsByClassName("cols");
      for (let s = 0; s < num; s++) {
        const singleBox = document.createElement("div");
        //listens for mouseover event then changes that runs the radioBtnChoice function to get what radio button is selected
        // also plays/stops drawing sound when users mouse enters/leaves a square
        let grad = 0;
        singleBox.addEventListener("mouseover", function radioBtnChoice() {
          drawingSound.play();
          singleBox.addEventListener("mouseout", function drawingSoundStop() {
            drawingSound.pause;
            drawingSound.currentTime = 0;
          });
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
}

//creates a random number in the rgb range
function colorRan() {
  return Math.random() * 256 + 1;
}
