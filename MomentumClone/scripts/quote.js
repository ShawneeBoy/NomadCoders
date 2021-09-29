const quoteSpan = document.querySelector(".quote span:first-child");
const authorSpan = document.querySelector(".quote span:last-child");

const quotes = [
  {quote:"Be yourself; everyone else is already taken.", author:"Oscar Wilde"},
  {quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author:"Albert Einstein"},
  {quote:"You only live once, but if you do it right, once is enough.", author:"Mae West"},
  {quote:"Be the change that you wish to see in the world.", author:"Mahatma Gandhi"},
  {quote:"In three words I can sum up everything I've learned about life: it goes on.", author:"Robert Frost"},
  {quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author:"J. K. Rowling"},
  {quote:"A friend is someone who knows all about you and still loves you.", author:"Elbert Hubbard"},
  {quote:"Always forgive your enemies; nothing annoys them so much.", author:"Oscar Wilde"},
  {quote:"We accept the love we think we deserve.", author:"Stephen Chbosky"},
  {quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author:"Ralph Waldo Emerson"},
];

let currQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteSpan.innerHTML = currQuote.quote;
authorSpan.innerHTML = currQuote.author;