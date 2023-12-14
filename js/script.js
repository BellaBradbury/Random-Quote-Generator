/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---- GLOBAL VARIABLES */
const styleTag = document.getElementById('styles_js');
const body = document.getElementsByTagName('body')[0];
const quoteBkgd = document.getElementsByClassName('container')[0];
const quoteCot = document.getElementById('quote-box');

const allBtns = Array.from( document.getElementsByClassName('btn') );
const newBtn = document.getElementById('load-quote');
const stopBtn = document.getElementById('stop-btn');
const startBtn = document.getElementById('start-btn');
const bellaBtn = document.getElementById('developer');

let interval;
let history = [
  // i, r, g, b
];

/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- -------- RANDOM VALUE */
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

/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- - INTERVAL */
// MANAGES INTERVAL FOR PAGE AUTO-REFRESH
function startTimer() {
  interval = window.setInterval(function() {
    printQuote(); 
  }, 10000);
  startBtn.style.display = 'none';
  stopBtn.style.display = 'flex';
}
function stopTimer() {
  clearInterval(interval);
  stopBtn.style.display = 'none';
  startBtn.style.display = 'flex';
}

/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- --- COLORS */
// CSS FOR DARK BACKGROUND - DEFAULT
const darkStyles = `
  body, .btn {color: white;}
  h1, .container, footer, .btn {border-color: rgba(255, 255, 255, 0.3);}
  .container, .btn {background-color: rgba(255, 255, 255, 0.1);}
  .btn:hover {border-color: rgba(255, 255, 255, 0.1); background-color: rgba(0, 0, 0, 0.1);}
  .btn:focus {border-color: rgba(255, 255, 255, 0.75); background-color: rgba(0, 0, 0, 0.5);}
`;

// CSS FOR LIGHT BACKGROUND
const lightStyles =`
  body, .btn {color: black;}
  h1, .container, footer, .btn {border-color: rgba(0, 0, 0, 0.3);}
  .container, .btn {background-color: rgba(0, 0, 0, 0.1);}
  .btn:hover {border-color: rgba(0, 0, 0, 0.1); background-color: rgba(255, 255, 255, 0.1);}
  .btn:focus {border-color: rgba(0, 0, 0, 0.75); background-color: rgba(255, 255, 255, 0.5);}
`;

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

// SETS COLORS MINDING WCAG CONTRAST FOR EACH QUOTE
function getRandomColor() {
  let r = getRandomVal(255, 1);
  let g = getRandomVal(255, 2);
  let b = getRandomVal(255, 3);

  const colorLum = getLuminance(r, g, b);  
  if (colorLum > 0.33333) {
    styleTag.innerHTML = lightStyles;
  } else {
    styleTag.innerHTML = darkStyles;
  }
  // BUILD CONTRAST CHECKER : https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o#building-the-color-contrast-checker

  return `rgba(${r}, ${g}, ${b})`
}

/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---- QUOTE */
// RETURNS NEW INDEX TO USE FOR QUOTES ARR
function getRandomQuote() {
  return getRandomVal( (quotes.length - 1), 0 );
}

/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- --------- PAGE CONTENT */
// CREATES PAGE HTML & CSS 
function createQuote() {
  const randNum = getRandomQuote();
  const quote = quotes[randNum];
  const color = getRandomColor();
  body.style.backgroundColor = color;
  
  let htmlBlock = `
    <p class="quote" aria-label="Quote">${quote.quote}</p>
    <p class="source" aria-label="Citation">${quote.source}
  `;
  if (quote.citation) {
    htmlBlock += `<span class="citation add-prop">${quote.citation}</span>`;
  }
  if (quote.year) {
    htmlBlock += `<span class="year add-prop">${quote.year}</span>`;
  }
  if (quote.tag) {
    htmlBlock += `<span class="tag add-prop">${quote.tag}</span>`;
  }
  htmlBlock += `</p>`;

  return htmlBlock
}

// PRINTS TO PAGE WITH TRANSITION
function printQuote() {
  allBtns.forEach( (btn) => {
    btn.blur();
  });
  quoteCot.style.transition = 'opacity 0.5s ease-in 0s';
  quoteCot.style.opacity = 0;

  let htmlBlock = createQuote();
  
  setTimeout(function() {
    quoteCot.innerHTML = htmlBlock;
    quoteCot.style.transition = 'opacity 1s ease-out 0s';
    quoteCot.style.opacity = 1;
  }, 1000);
}

/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- --- EVENTS */
// ALLOWS SCREEN 200PX-320PX TO ENTER SITE
document.getElementById('enter-site').addEventListener('click', (e) => {
  let htmlBlock = createQuote();
  quoteCot.innerHTML = htmlBlock;

  setTimeout(function() {
    document.getElementById('olay').style.display = 'none';
    document.getElementsByTagName('header')[0].style.display = 'flex';
    document.getElementsByTagName('footer')[0].style.display = 'flex';
  }, 1000);
  
  quoteBkgd.style.display = 'block';
  startTimer()
});

// SETS STANDARD PAGE IF SCREEN IS 320PX OR WIDER
if (screen.width >= 320) {
  let htmlBlock = createQuote();
  quoteCot.innerHTML = htmlBlock;
  startTimer()
}

// REFRESHES PAGE UPON USER 'SHOW ANOTHER' CLICK
newBtn.addEventListener("click", (e => {
  printQuote();
  if (stopBtn.style.display === 'flex') {
    stopTimer();
    printQuote();
    startTimer();
  } else {
    printQuote();
  }
}));

// PLAY BUTTONS START & STOP AUTO-PAGE REFRESH UPON USER ACTION
stopBtn.addEventListener('click', stopTimer);
startBtn.addEventListener('click', startTimer);
