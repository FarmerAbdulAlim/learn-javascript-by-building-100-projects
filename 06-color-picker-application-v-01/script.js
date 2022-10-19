//SECTION - Globals
let color = {};
color.red = 0;
color.green = 255;
color.blue = 0;
color.rgb = "rgb(0, 255, 0)";
color.hex = "#00ff00";

//SECTION - Onload Handlers
window.onload = () => {
  main();
};
//SECTION - Main or Boot function, which will store DOM Reference and will call other functions.
function main() {
  const randomColor = document.getElementById("random-color");
  const colorContainer = document.getElementById("color-container");
  const hexInput = document.getElementById("hex-input");
  const rgbInput = document.getElementById("rgb-input");
  const redRanger = document.getElementById("red-ranger");
  const greenRanger = document.getElementById("green-ranger");
  const blueRanger = document.getElementById("blue-ranger");
  const redValue = document.getElementById("red");
  const greenValue = document.getElementById("green");
  const blueValue = document.getElementById("blue");

  //initialization
  hexInput.value = color.hex;
  rgbInput.value = color.rgb;
  redRanger.value = color.red;
  greenRanger.value = color.green;
  blueRanger.value = color.blue;
  redValue.innerHTML = color.red;
  greenValue.innerHTML = color.green;
  blueValue.innerHTML = color.blue;

  //event listeners
  randomColor.addEventListener("click", function () {
    color = randomColorGenerator();
    colorContainer.style.backgroundColor = color.hex;
    hexInput.value = color.hex;
    rgbInput.value = color.rgb;
    redRanger.value = color.red;
    greenRanger.value = color.green;
    blueRanger.value = color.blue;
    redValue.innerHTML = color.red;
    greenValue.innerHTML = color.green;
    blueValue.innerHTML = color.blue;
  });
}

//SECTION - event handlers
function copyToClipboardButton() {
  const copyToClipboard = document.getElementById("copy-to-clipboard");
  const radioElement = document.getElementsByName("radio");
  const mode = getCheckedValueFromRadios(radioElement);
  copyToClipboard.addEventListener("click", function () {
    if (mode == "hex") {
      const hexColor = document.getElementById("hex-input").value;
    }
  });
}

//SECTION - DOM Functions
function redSlider(value) {
  document.getElementById("red").innerHTML = value;
}
function greenSlider(value) {
  document.getElementById("green").innerHTML = value;
}
function blueSlider(value) {
  document.getElementById("blue").innerHTML = value;
}
/**
 * find the checked elements from a list of radio buttons
 * @param {Array} nodes
 * @returns {string | null}
 */
function getCheckedValueFromRadios(nodes) {
  let checkedValue = null;
  for (const i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      checkedValue = nodes[i];
      break;
    }
  }
  return checkedValue;
}

//SECTION - Utility Functions
/**
 *
 * @returns object
 */
function randomColorGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = {
    hex: `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`,
    rgb: `rgb(${red}, ${green}, ${blue})`,
    red: red,
    green: green,
    blue: blue,
  };

  return color;
}
