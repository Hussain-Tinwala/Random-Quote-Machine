const quotes=[
    {
        text: "The only way to do great work is to love what you do.",
        author: "- Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "- Winston Churchill"
    },
    {
        text: "It is never too late to be what you might have been.",
        author: "- George Eliot"
    },
    {
        text: "The best way to predict the future is to invent it.",
        author: "- Alan Kay"
    },
    {
        text: "In the middle of every difficulty lies opportunity.",
        author: "- Albert Einstein"
    }
];

function getRandomQuote(){
    const index= Math.floor(Math.random()*quotes.length);
    return quotes[index];
}

function displayQuote(){
    const quote= getRandomQuote();
    const quoteText= document.querySelector(".quote-text");
    const quoteAuthor= document.querySelector(".quote-author");

    quoteText.innerHTML= `<p>"${quote.text}"</p>`;
    quoteAuthor.innerHTML=`<p class="author">${quote.author}</p>`;
}

const btn= document.getElementById("btn")
btn.addEventListener("click",displayQuote)

