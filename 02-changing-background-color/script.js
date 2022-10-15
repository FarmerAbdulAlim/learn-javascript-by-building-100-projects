const container = document.querySelector(".container");
const btn = document.querySelector("#button");

const randomColorGenerator = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};

btn.addEventListener("click", function () {
  const bgColor = randomColorGenerator();
  container.style.backgroundColor = bgColor;
});
