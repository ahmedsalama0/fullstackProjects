'use strict';

// Declaring the project elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const Score0El = document.getElementById('score--0');
const Score1El = document.getElementById('score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// The begining of the game
// Resetting all variables

// Defining all variables outside and initilizing the inside the init func
let currentScore, scores, currentPlayer, stateFlag;

// let currentScore = 0;
// Scores Array
// let scores = [0, 0];
// 0 => player 1, 1 => player 2
// let currentPlayer = 0;

// Assigning a state variable to disable all btns in case of winning
// let stateFlag = true;
//Function to manipulate game starting and resetting
function init() {
  // Updating the UI scores
  Score0El.textContent = 0;
  Score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  // 2- Hide the dice image
  dice.classList.add('hidden');
  // Updating the internal variables
  currentScore = 0;
  scores = [0, 0];
  currentPlayer = 0;
  stateFlag = true;

  // Adjusting ctive class and setting it for player 0
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  // removing the class only from player 2 if exists and adding it to player 1 either it exist or not, Js does this work
  // removing the winner class if exists
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}

// Calling the func to start initialize the game
init();

// Function for changing the player
const switchPlayer = () => {
  // Reset the current score variable
  currentScore = 0;
  // Update in the UI
  currentPlayer === 0
    ? (currentScore0El.textContent = currentScore)
    : (currentScore1El.textContent = currentScore);
  //
  // An alternative way
  // document.querySelector(`#current--${currentPlayer}`).textContent = currentScore;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

  // Change the current player
  // if the current player contains 0, revert it to 1 and vice versa
  currentPlayer = currentPlayer === 0 ? 1 : 0;
};

// Hiding the dice image

// Planning the project
//
// Divide and Conquer
//
// 1- adjust the scores of player 1 & 2

///// Create Hidden class in CSS
// 3- User rolls dice button
btnRoll.addEventListener('click', function () {
  if (stateFlag) {
    // Generating a Random number
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    // console.log(randomNumber);
    dice.src = `dice-${randomNumber}.png`;
    dice.classList.remove('hidden');
    // Switching the player if randomNum === 1
    if (randomNumber !== 1) {
      // If the current !== be normal else Don't compute
      // Swapping the UI .player--active class by toggling it

      //  creating current score variable abovr to hold current score
      currentScore += randomNumber;
      currentPlayer === 0
        ? (currentScore0El.textContent = currentScore)
        : (currentScore1El.textContent = currentScore);
      // imp
      // Alternative to the above line
      // document.querySelector(`#current--${currentPlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (stateFlag) {
    // Adding scores to the array according to the indices
    scores[currentPlayer] += currentScore;
    // Update the UI
    // if player 0 it will increase it and the same for player 2
    Score0El.textContent = scores[0];
    Score1El.textContent = scores[1];
    // important and better
    // Dynamic Assignment
    // jonas Method
    // document.querySelector(`#score--${currentPlayer}`).textContent = scores[currentPlayer];

    // Checking the Score to decide ...
    // decreasing the threshold to 20 for testing purposes
    if (scores[currentPlayer] >= 20) {
      // Player Wins
      // Disable all buttons by Modiding the state boolean variable
      stateFlag = false;
      // hide the dice in winning case
      dice.classList.add('hidden');
      // Change the UI to the winner class
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      // using dynamic assigning instead of assigning with if else or switch statement, which in case of multiple player will be tedious
      // in jonas code he removed the active class from the winner
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      // we did the to prevent overlapping between player--winner & player--active classes
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
