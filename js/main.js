let quotes = [
    {
        text: "Do not take life too seriously. You will not get out alive.",
        author: "Elbert Hubbard"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }
];

let quote = document.getElementById("quote");
let newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", getRandomQuote);

function getRandomQuote() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.textContent = randomQuote.text;
    quote.setAttribute("author", randomQuote.author);
}

getRandomQuote();