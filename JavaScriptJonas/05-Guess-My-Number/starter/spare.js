// The code of the guess the number game before refactoring it
'use strict';

// Select elements in JS, exactly as you uelect them in css
/// document.querySelector('#message');
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').innerHTML);
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!';

// console.log(document.querySelector('.message').textContent);
//  console.log(document.querySelector('.message').innerHTML);
/* 
document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

// The value property read (get, retrieve) the value.

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

// Example of a function expression that could be assigned to variable since it is jiust a value

////////////////////////////////////////
// addEventListener('event', event handler function)

// Defining the secret number
// Math.random(); // Generate a random number between Zero and One...

// Here, for the game we need a random number between 0 & 20
// Math.trunc() || parseInt();
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // State variable is part of so-called application state.

// the highscore variable (treat it as a maximum), this way, the first score is always gonna be the high score, since No score is lower than ZERO
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  // To convert a string into a number, we shall use +'string',or Number(), parseInt()
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Implementing the game logic
  // Checking the value retrieved from the userInput

  // Case1: if there is no input (Zero by Default)
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    // strict equlity

    // when the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    // Revealing the secret number
    document.querySelector('.number').textContent = secretNumber;
    // Changing the styles when the winning condition happens
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
////////////////////////////////////////
// - - - Event handler - - -
// we now need to pass in a function value as an argument.

// And that's probably quite confusing, I know.

// But that's no problem at this point.

// This will make more sense,

// as we do this over and over again.

// For now, just remember what you learned

// in the fundamental section,

// which is that a function is also just a value.

// And if a function is just a value,

// then we can also pass it into another function

// as an argument,

// just like any other value, like a string or a number.

// Implementing the score variable

// the score should decrease by one.

// So how should we do that?

// And I can think of two ways of doing that.

// ------------ 1

// The first way is to read the score from here (DOM),

// then decrease it by one and then print it here again.

// So that would be the first way of doing it,

// but there is a better way.

// ------------ 2

// And the better way is to actually create a variable

// for the score in the code and then update that variable

// so basically to decrease that variable

// and then display the value

// of that variable here in this score label.

// And by doing that, we have our data also in the code

// and not just on the DOM.

// And so that's always a very good thing to do.

// Coding Challenge #1
document.querySelector('.again').addEventListener('click', function () {
  // alert('Again!');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  // Empty input fields holds empty string
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
