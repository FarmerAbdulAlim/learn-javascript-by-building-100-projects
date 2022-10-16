const container = document.querySelector(".container");
const btn = document.querySelector("#button");
const copy = document.querySelector(".copy");
const textArea = document.querySelector("textarea");

const randomColorGenerator = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};

let bgColor = "#34495e";

btn.addEventListener("click", function () {
  bgColor = randomColorGenerator();
  container.style.backgroundColor = bgColor;
  textArea.innerText = bgColor;
});

copy.addEventListener("click", function () {
  const div = document.createElement("div");
  div.className = "toast-message toast-in";
  document.body.appendChild(div);
  div.innerText = `${bgColor} Copied`;

  //when we click the COPY button.
  div.addEventListener("click", function () {
    div.classList.remove("toast-in");
    div.classList.add("toast-out");
    //when animation ends, we'll remove the div element.
    div.addEventListener("animationend", function () {
      div.remove();
    });
  });
});
