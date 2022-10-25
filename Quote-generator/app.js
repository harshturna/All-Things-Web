const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
let apiQuotes = [];


function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Show New Quote
function newQuote() {
    loading();
    const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
    // console.log(quote.text)

    if (!quote.author) {
        quoteAuthor.textContent = 'Anonymous';
    }
    else {
    quoteAuthor.textContent = quote.author;
    }

    //Quote Length check 

    if (quote.text.length > 100){
        quoteText.classList.add('long-quote');
    }
    else {
        quoteText.classList.remove('long-quote')
    }

    quoteText.textContent = quote.text;
    complete()
}

//  Get Quotes from API
 async function getQuotes() {
    loading();
     const apiUrl = 'https://type.fit/api/quotes';


     try {
         const response = await fetch(apiUrl);
         apiQuotes = await response.json();
         newQuote();
     }
     catch(error) {
        console.log(error)
     }
}

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`
    window.open(twitterUrl, '_blank');
}


//Event Listeners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();