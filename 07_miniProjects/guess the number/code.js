const form = document.querySelector('.form');
const guessField = document.querySelector('.guessField');
const submitBtn = document.querySelector('.guessSubmit');
const prevGuesses = document.querySelector('.guesses');
const remaningGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const startEndBtn = document.querySelector('.buttons');

let randomNum = parseInt(Math.random() * 100 + 1); //  GUESS ME
console.log(randomNum);
let guessesArray = []; // baki isko use nahi kar rahe ham ..  directly innerHTML jo string hoti h usme append kar rahe hai.
let numGuesses = 0;
let playGame = true;

if (playGame) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let currGuess = document.querySelector('#guessField').value;
    validateGuess(currGuess);
    // console.log(currGuess);
  });
}

// all the functions declarations are sent to the starting of your file so you can write them anywhere and access anywhere

// to check whether the guess is valid or not
function validateGuess(guess) {
  // it must be a integer num 1 to 100;
  if (isNaN(guess) || guess <= 0 || guess > 100 || parseInt(guess) != guess) {
    alert('Please enter a valid number');
    return;
  }
  guessesArray.push(guess);
  displayGuess(guess);
  numGuesses++;
  checkGuess(guess); // higher or lower

  if (numGuesses == 10) {
    displayMessage(`GAME IS OVER ; Random Number was ${randomNum}`);
    endGame();
  }
}

// guess value correct hai low hai ya high hai iske lie function
function checkGuess(guess) {
  if (guess == randomNum) {
    displayMessage(`CONGRATULATIONS YOU WON!! NUMBER WAS ${randomNum}`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Your Guess is lower`);
  } else {
    displayMessage(`Your Guess is higher`);
  }
}

// display messages on screen and interact with DOM
function displayMessage(msg) {
  lowOrHi.textContent = msg;
}

function displayGuess(guess) {
  guessField.value = '';
  prevGuesses.innerHTML += ` ${guess}`;
  let remaning = parseInt(remaningGuess.textContent);
  remaning--;
  remaningGuess.innerHTML = remaning;
  if (remaning == 0) {
    endGame();
  }
}

let div = document.createElement('div'); // used to add buttons inside this element.

function endGame() {
  submitBtn.disabled = true;
  // submitBtn.setAttribute('disabled',''); another way.
  div.classList.add('btn2'); // btn class me button ka style & css properties hai.
  div.innerHTML = `<h1 id="newGame">Start Again</h1>`;
  div.style = 'cursor:pointer;';
  startEndBtn.appendChild(div);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    numGuesses = 0;
    guessesArray = [];
    randomNum = parseInt(Math.random() * 100 + 1);
    remaningGuess.textContent = '10';
    prevGuesses.textContent = '';
    displayMessage(``);
    playGame = true;
    startEndBtn.removeChild(div);
    submitBtn.disabled = false;
    // submitBtn.removeAttribute('disabled');
  });
}