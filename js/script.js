/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'I felt my lungs inflate with the onrush of scenery—air, mountains, trees, people. I thought, \'This is what it is to be happy.\'',
    source: 'Sylvia Plath',
    citation: 'The Bell Jar',
    tags: ', #semiautobiography'
  },
  {
    quote: 'I hate men who are afraid of women\'s strength.',
    source: 'Anaïs Nin',
    year: 1931 
  },
  {
    quote: 'Rejection, I have found, can be the only antidote to delusion',
    source: 'Otessa Moshfegh'
  },
  {
    quote: 'Sometimes I wish I could walk around with a HANDLE WITH CARE sign stuck to my forehead.',
    source: 'Elizabeth Wurtzel'
  },
  {
    quote: 'My love of pleasure seems to be the only consistent side of my character. Is it because I have not read enough?',
    source: 'Francoiose Sagan'
  }

];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const randomNum = Math.floor( Math.random() * quotes.length );
  return quotes[randomNum];
  //console.log(randomNum);
  //console.log(quotes[randomNum]);
}
getRandomQuote();

setInterval(randomBgColor, 2000);

function randomBgColor() {
  let color= `${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256) }`;
  return document.querySelector('body').style.backgroundColor = `RGB(${color})`;
}

document.getElementById('load-quote').addEventListener("click", randomBgColor, false);


/***
 * `printQuote` function
***/
setInterval(printQuote, 2000);

function printQuote() { 
  let randomQuoteObject = getRandomQuote();
  let html = `<p class="quote"> ${randomQuoteObject.quote}</p> 
  <p class="source"> ${randomQuoteObject.source}` 
  
  if (randomQuoteObject.citation) { 
    html += `<span class="citation">${randomQuoteObject.citation}</span>`;
  };
  if (randomQuoteObject.year) {
    html += `<span class="year">${randomQuoteObject.year}</span>`;
  };
  if (randomQuoteObject.tags) {
    html += `<span class="tags">${randomQuoteObject.tags}</span>`;
  }
  html += '</p>';
  return document.getElementById('quote-box').innerHTML = html;

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
