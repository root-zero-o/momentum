const quotes = [
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
        author: "Dolly Parton"
    },
    {
        quote: "Don't settle for what life gives you; make life better and build something.",
        author: "Ashton Kutcher"
    },
    {
        quote: "Life is like riding a bycicle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        author: "Steve Jobs"
    },
    {
        quote: "In the long run, the sharpest weapon of all is a kind and gentle spirit.",
        author: "Anne Frank"
    },
    {
        quote: "In three words I can sum up everything I’ve learned about life: It goes on.",
        author: "Robert Frost"
    },
    {
        quote: "Life’s tragedy is that we get old too soon and wise too late.",
        author: "Benjamin Franklin"
    },
    {
        quote: "You must expect great things of yourself before you can do them.",
        author: "Michael Jordan"
    },
    {
        quote: "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.",
        author: "Warren Buffett"
    },
    {
        quote: "If you love life, don’t waste time, for time is what life is made up of.",
        author: "Bruce Lee"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
