let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let quoteBtn = document.querySelector(".quote-btn");
let quotesArray = [];

quoteBtn.addEventListener("click", getQuotes);

function getQuotes() {
  fetch("https://zenquotes.io/api/quotes/")
    .then((res) => res.json())
    .then((data) => setQuote(data));
}

function setQuote(data) {
  let randomQuote = Math.floor(Math.random() * data.length);
  author.textContent = data[randomQuote].a;
  quote.textContent = data[randomQuote].q;
}
