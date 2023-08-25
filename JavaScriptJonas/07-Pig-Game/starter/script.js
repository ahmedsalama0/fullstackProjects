'use strict';

///////////////////////////////////////////////

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

///////////////////////////////////////////////

// Starting conditions

// score0El.textContent = 0;
// score1El.textContent = 0;

// Hiding the dice at the begining of the game ...
// document.querySelector('.dice').classList.add('hidden');

// Refactoring
// diceEl.classList.add('hidden');

// Storing the final scores of the 2 players in this array. index 0 for p1 and vice versa.
// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0; // 0 -> Player 1, 1 -> p2
// Creating a STATE variable to prevent continuing playing the game after it finishes...
// let playing = true;

// initialization
let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  // UI
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  // Internal variables
};
init();

const switchPlayer = function () {
  // switch to the next player

  // resetting the curent score of the cur player in UI
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // changing the current score variable that holds the values
  currentScore = 0;

  // changing the players on player 0 html, toggling them at the same time will ensire that it's only ever on one of the elements at once
  activePlayer = activePlayer === 0 ? 1 : 0;
  // player--active is
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

///////////////////////////////////////////////

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    // This needs to be NOT a global variable in order to change this number with each event
    const dice = Math.trunc(Math.random() * 6) + 1;
    // enuring that the diceRandom number is corresponding o dice images by logging it to the console
    console.log(dice);
    // 2. Display dice
    diceEl.classList.remove('hidden');
    // To change the dice image according to the dice random number, in the diceElement (which is img element) we have access to src attribute
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1the next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0EL.textContent = currentScore; // CHANGE LATER according to the current player
    } else {
      //   // switch to the next player

      //   // resetting the curent score of the cur player in UI
      //   document.getElementById(`current--${activePlayer}`).textContent = 0;
      //   // changing the current score variable that holds the values
      //   currentScore = 0;

      //   // changing the players on player 0 html, toggling them at the same time will ensire that it's only ever on one of the elements at once
      //   activePlayer = activePlayer === 0 ? 1 : 0;
      //   // player--active is
      //   player0El.classList.toggle('player--active');
      //   player1El.classList.toggle('player--active');
      //
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // 1. Add currnet score to active player's score
    scores[activePlayer] += currentScore;
    // Displaying it on the UI
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      // Removing the dice image at the end of the game
      diceEl.classList.add('hidden');
      // Adding the .player--winner class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      // As well as remove the player--active class, as we do not want both classes work at the same time
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// jonas Soln for the last challenge
btnNew.addEventListener('click', init);
