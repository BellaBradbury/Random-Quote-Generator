// GLOBAL VARS
const body = document.getElementsByTagName('body')[0];
const quoteBkgd = document.getElementsByClassName('container')[0];
const quoteCot = document.getElementById('quote-box');
const newBtn = document.getElementById('load-quote');
const bellaBtn = document.getElementById('developer')
let history = [
  // i, r, g, b
];

// QUOTE DATA
const quotes = [
  {
    quote: 'If you Change the way you look at things, the things you look at change.',
    source: 'Wayne Dyer',
    citation: 'Good Housekeeping',
    year: '2023',
    tag: 'Inspirational'
  },
  {
    quote: 'The way I see it, if you want the rainbow, you gotta put up with the rain.',
    source: 'Dolly Parton',
    citation: 'Parade',
    year: '2023',
    tag: 'Music'
  },
  {
    quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    source: 'Albert Einstein'
  },
  {
    quote: 'Act as if what you do makes a difference. It does.',
    source: 'William James'
  },
  {
    quote: 'Learn the rules like a pro, so you can break them like an artist.',
    source: 'Pablo Picasso'
  }
]

// GENERAL FUNCTION TO RETURN RAND VAL & ENSURES DIFFERENT SCREEN EACH REFRESH
function getRandomVal(max, comp) {
  let randVal = Math.round( Math.random() * (max) + 0 );
  // random() DOCUMENTATION : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  if ( randVal === history[comp] ) {
    randVal ++;
    if ( randVal > max ) {
      randVal = randVal - 2;
    }
  } 
  history[comp] = randVal;

  return randVal;
}

// CHECKS COLOR CONTRAST
function getLuminance(r, g, b) {
  let a = [r, g, b].map(
    function (v) {
      v /= 255;
      return v <= 0.03928
        ? v / 12.92
        : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// RETURNS NEW INDEX TO USE FOR QUOTES ARR
function getRandomQuote() {
  return getRandomVal( (quotes.length - 1), 0 );
}

// SETS COLORS MINDING WCAG CONTRAST FOR EACH QUOTE
function getRandomColor() {
  let r = getRandomVal(255, 1);
  let g = getRandomVal(255, 2);
  let b = getRandomVal(255, 3);

  const colorLum = getLuminance(r, g, b);  
  if (colorLum > 0.33333) {
    body.style.color = 'black';
    newBtn.style.color = 'black';
    bellaBtn.style.color = 'black';
  } else {
    body.style.color = 'white';
    newBtn.style.color = 'white';
    bellaBtn.style.color = 'white';
  }
  // BUILD CONTRAST CHECKER : https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o#building-the-color-contrast-checker

  return `rgba(${r}, ${g}, ${b})`
}

// SETS BTN FOCUS STATES MINDING CURRENT PAGE COLORS
function handleFocus(btn) {
  if (btn.style.color === 'black') {
    btn.style.border = '4px solid rgba(0, 0, 0, 0.75)';
    btn.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  } else {
    btn.style.border = '4px solid rgba(255, 255, 255, 0.75)';
    btn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
}

// RESETS BTN FROM FOCUS
function handleBlur(btn) {
  btn.style.border = '2px solid rgba(0, 0, 0, 0.3)';
  btn.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
}

// CREATES PAGE HTML & CSS - PRINTS TO PAGE
function printQuote() {
  newBtn.blur()
  bellaBtn.blur()
  quoteCot.style.transition = 'opacity 0.5s ease-in 0s';
  quoteCot.style.opacity = 0;
  
  const randNum = getRandomQuote();
  const quote = quotes[randNum];
  const color = getRandomColor();
  
  let htmlBlock = `
      <p class="quote">${quote.quote}</p>
      <p class="source">${quote.source}
  `;
  if (quote.citation) {
    htmlBlock += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    htmlBlock += `<span class="year">${quote.year}</span>`;
  }
  if (quote.tag) {
    htmlBlock += `<span class="tag">${quote.tag}</span>`;
  }
  htmlBlock += `</p>`;

  // prints data to screen with transitions
  body.style.backgroundColor = color;
  setTimeout(function() {
    quoteCot.innerHTML = htmlBlock;
    quoteCot.style.transition = 'opacity 1s ease-out 0s';
    quoteCot.style.opacity = 1;
  }, 1000);
}

// RUNS PROGRAM
newBtn.addEventListener('focus', (e) => {
  handleFocus(newBtn);
});
newBtn.addEventListener('blur', (e)=> {
  handleBlur(newBtn);
});
bellaBtn.addEventListener('focus', (e)=> {
  handleFocus(bellaBtn);
});
bellaBtn.addEventListener('blur', (e)=> {
  handleBlur(bellaBtn);
});
window.setInterval(printQuote, 30000);
newBtn.addEventListener("click", printQuote, false);