const quotes = [
  {
    quote: "Persistence is the path to success.",
    author: "Charles Chaplin",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    quote: "Failure is the opportunity to begin again, with more experience.",
    author: "Henry Ford",
  },
  {
    quote: "Don't wait for opportunities, create them yourself.",
    author: "Unknown Author",
  },
  {
    quote: "Real success is not financial success, but rather success in helping other people.",
    author: "Zig Ziglar",
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Success consists of going from failure to failure without losing enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote: "Believe in yourself and everything else will come naturally.",
    author: "Elon Musk",
  },
  {
    quote: "Failure doesn't mean you're not good enough, it means you need to try harder.",
    author: "Unknown Author",
  },
];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteText = document.querySelector('.text');
const quoteAuthor = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
  const index = Math.floor(Math.random() * quotes.length);
  
  quoteText.textContent = quotes[index].quote;
  quoteAuthor.textContent = quotes[index].author;
});