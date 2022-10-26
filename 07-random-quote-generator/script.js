const newQuote = document.getElementById("new-quote");
const copyQuote = document.getElementById("copy-quote");
const output = document.getElementById("output");
const outputAuthor = document.getElementById("author");

let quote = null;

//while clicking NEW QUOTE button
newQuote.addEventListener("click", function () {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let r = Math.floor(Math.random() * 1600);
      quote = data[r].text;
      output.innerText = quote;
      outputAuthor.innerText = `-${data[r].author}`;
    });
});

//while clicking COPY QUOTE button
copyQuote.addEventListener("click", function () {
  navigator.clipboard.writeText(quote);
});
