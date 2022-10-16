const container = document.querySelector(".container");
const btn = document.querySelector("#button");
const copy = document.querySelector(".copy");
const input = document.querySelector("input");

const randomColorGenerator = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};

const isValidHex = (color) => {
  return /^#[0-9A-F]{6}$/i.test(color);
};

//global variables
let bgColor = "#34495e";
let div = null;

btn.addEventListener("click", function () {
  bgColor = randomColorGenerator();
  container.style.backgroundColor = bgColor;
  input.value = bgColor;
});

//when we click the COPY button.
copy.addEventListener("click", function () {
  if (div !== null) {
    div.remove();
    div = null;
  }
  //Checking if the input color is valid or not. If valid, then we will let the window to copy the color, otherwise we will show an alert.
  if (isValidHex(input.value)) {
    navigator.clipboard.writeText(bgColor);
    div = document.createElement("div");
    div.className = "toast-message toast-in";
    document.body.appendChild(div);
    div.innerText = `${bgColor} Copied`;

    //When we click the TOAST DIV Element.
    div.addEventListener("click", function () {
      div.classList.remove("toast-in");
      div.classList.add("toast-out");
      //when animation ends, we'll remove the div element.
      div.addEventListener("animationend", function () {
        div.remove();
      });
    });
  } else {
    alert("Invalid Color Code!");
  }
});

//input and check valid hex code

input.addEventListener("keyup", function (e) {
  const str = e.target.value;
  if (isValidHex(str)) {
    container.style.backgroundColor = str;
    bgColor = str;
  }
});
