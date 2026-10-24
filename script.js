'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const Score = document.querySelector('.score').textContent;
let score = Number(Score);
let highScore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayInput = function (wtypes) {
  document.querySelector('.guess').style.visibility = wtypes;
  document.querySelector('.check').style.visibility = wtypes;
};

document.querySelector('.check').addEventListener('click', function () {
  const input = document.querySelector('.guess').value;
  const guess = Number(input);
  console.log(guess);

  // if no input
  if (!input) {
    displayMessage('⛔ NO NUMBER!!');
  }

  //when player wins the game
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    displayInput('hidden');

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // if the numbers are not in between 1 and 20
  else if (guess < 1 || guess > 20) {
    displayMessage('Select number between 1 and 20');
  }

  //lost case or too high or too low case
  else {
    score--;

    //if player lost the game
    if (score < 1) {
      displayMessage('💔 YOU LOST');
      document.querySelector('.score').textContent = 0;
    } else {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      document.querySelector('.score').textContent = String(score);
    }
  }
});

//again button functionality

document.querySelector('.again').addEventListener('click', function () {
  console.log(document.querySelector('.score').textContent);
  score = Number(Score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = String(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayInput('visible');
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
});
