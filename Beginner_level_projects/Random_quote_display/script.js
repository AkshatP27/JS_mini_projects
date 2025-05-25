const quotes = [
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas Edison"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    }
];

let quoteText = document.querySelector(".quote-text");
let quoteAuthor = document.querySelector(".quote-author");
let newQuoteBtn = document.querySelector(".new-quote-btn");

function displayNewQuote() {
    let randomQuote = Math.floor(Math.random()*quotes.length);
    // console.log(randomQuote);
    let randomQuoteText = quotes[randomQuote].text;
    let randomQuoteAuthor = quotes[randomQuote].author;

    quoteText.innerText = randomQuoteText;
    quoteAuthor.innerText = randomQuoteAuthor;
}

newQuoteBtn.addEventListener("click", () => {
    // console.log("New qutoe displayed");
    displayNewQuote();
})