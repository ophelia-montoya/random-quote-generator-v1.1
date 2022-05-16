/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * declared a `quotes` array of objects that include keys:
 * quote by female writers
 * a source (the author)
 * citation: the reference material (i.e. name of book)
 * tags: type of book
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
 * declared `getRandomQuote` function
 * declared randomNum variable that generates a random number from 0 to last index of quotes array
 * return random quote object using randomNum as index value of array
***/

function getRandomQuote() {
  const randomNum = Math.floor( Math.random() * quotes.length );
  return quotes[randomNum];
  //console.log(randomNum);
  //console.log(quotes[randomNum]);

}

//call function created above;
getRandomQuote(); 

//set a 10 second timer so page automatically updates background color
// referenced https://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval(randomBgColor, 10000);

/**
 * declared a function that changes background color
 * assigned 3 randomly-generated numbers to 'color' variable
 * @returns an RGB value using the color variable that changes the background color
 */
function randomBgColor() {
  let color= `${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256) }`;
  return document.querySelector('body').style.backgroundColor = `RGB(${color})`;
}

//created a 'click' EventListener that runs the randomBgColor function when you click on the 'show another quote' button
document.getElementById('load-quote').addEventListener("click", randomBgColor, false);


//set a 10second timer so page automatically runs printQuote function & changes quote displayed 
//referenced https://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval(printQuote, 10000);

/***
 * declared `printQuote` function
 * assigned returned quote object to variable named randomQuoteObject
 * created html string using template literal, interpolating the quote & source keys of each quote object to create 2 <p> tags
 * if conditional statement that checks if quote object has a citation & adds a <span> tag to html string if true
 * if quote object has a year key, <span> tag with interpolated year is added to html string
 * EXTRA CREDIT: if quote object has tags key/prop, <span> tag is interpolated w/ tag to html string
 * closes the 2nd <p> tag we left open to create string
 * returns html string that is assigned to the innerHTML of the quote-box div
***/
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
