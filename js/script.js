/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator

***EXCEEDS EXPECTATION GRADE***
Bella Bradbury
*************************************************/



/***
 * object array of quotes from various types of media
***/
let quotes = [
  {
    quote: "Principles aren't principles if you pick and choose when to use them.",
    source: 'Chidi Anagonye',
    citation: 'The Good Place'
  },
  {
    quote: "Oh, I hope you're happy, but not like how you were with me. I'm selfish, I know. I can't let you go. So find someone great, but don't find no one better. I hope you're happy, but don't be happier.",
    source: 'Olivia Rodrigo',
    year: '2021'
  },
  {
    quote: "It is better to change an opinion than to persist in a wrong one.",
    source: 'Socrates',
    location: 'Athens, Greece'
  },
  {
    quote: "All I've Ever Known is how to hold my own",
    source: 'Eurydice'
  },
  {
    quote: "Just give it time. It's gonna get better. Now is not forever at all.",
    source: 'Jon McLaughlin'
  }
];


/***
 * `getRandomQuote` function retrieves a random object from quotes array
***/
function getRandomQuote() {
  return quotes[ Math.floor( Math.random() * quotes.length ) ];
}


/***
 * `getRandomColor` function retrieves 3 random values (from randomValue) to form an rgb based background color randomly
***/
const randomValue = () => Math.floor(Math.random() * 256)

function getRandomColor(value) {
  const colorOutput = `rgb( ${randomValue()}, ${randomValue()}, ${randomValue()} )`;
  return colorOutput;
}



/***
 * `printQuote` function defines how quote and color functions will be displayed in the HTML of the app
***/
printQuote = () => {
  let randomColor = getRandomColor();
  let randomQuote = getRandomQuote();

  let finalHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  if (randomQuote.citation) {
    finalHTML += `<span class="citation">${randomQuote.citation}</span>`
  }
  if (randomQuote.year) {
    finalHTML += `<span class="year">${randomQuote.year}</span>`
  }
  if (randomQuote.location) {
    finalHTML += `<span class="location">${randomQuote.location}</span>`
  }

  finalHTML += `</p>`;

  document.getElementById(`quote-box`).innerHTML = finalHTML;
  document.body.style.backgroundColor = randomColor;
}

printQuote()



/***
 * sets printQuote function to auto-refresh every 30 seconds.
***/
setInterval(printQuote, 30000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
