/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

/***
 * `quotes` array
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

// console.log(quotes);


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  return quotes[ Math.floor( Math.random() * quotes.length ) ];
  return quoteOutput;
  console.log(quoteOutput);
}

getRandomColor = () => {
  let colorOutput = `rgb( Math.floor(Math.random() * 256), Math.floor(Math.random() * 256),  Math.floor(Math.random() * 256) ) `;
  return colorOutput;
  console.log(colorOutput);
}

// const colorValue = () => Math.floor( Math.random() * 256 )
// function getRandomColor(value) {
//   let coloOutput: `rgb(${value()}, ${value()}, ${value()} )`;
//   return colorOutput;
//   console.log(colorOutput)
// }



/***
 * `printQuote` function
***/
printQuote = () => {
  let randomColor = getRandomColor();
  let randomQuote = getRandomQuote();

  let finalHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class-"source">${randomQuote.source}
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

setInterval(printQuote, 30000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
