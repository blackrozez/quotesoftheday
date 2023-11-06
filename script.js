const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Not how long, but how well you have lived is the main thing. — Seneca" ,
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon",
    "The only thing we have to fear is fear itself. -Franklin D. Roosevelt",
    "Be yourself; everyone else is already taken. -Oscar Wilde",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
    "Don't worry when you are not recognized, but strive to be worthy of recognition. -Abraham Lincoln"
];

const quoteText = document.getElementById("quoteText");
const getQuoteButton = document.getElementById("getQuoteButton");

getQuoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.innerText = randomQuote;
});

// Initial quote on page load
getQuoteButton.click();
