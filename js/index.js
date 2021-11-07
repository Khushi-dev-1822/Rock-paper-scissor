'use strict';
const handOption = {
  rock: '/images/Rock.png',
  paper: '/images/Paper.png',
  scissors: '/images/Scissors.png',
};
let score = 0;
const pickUserHand = (hand) => {
  console.log(hand);
  const hands = document.querySelector('.hands');
  hands.style.display = 'none';
  const game = document.querySelector('.contest');
  // game.classList.remove('hidden');
  game.style.display = 'flex';
  //set the user
  document.getElementById('userPickImage').src = handOption[hand];
  let cpHand = pickComputerHand();
  refree(hand, cpHand);
};

const pickComputerHand = () => {
  let hands = ['rock', 'paper', 'scissors'];
  let cpHand = hands[Math.floor(Math.random() * 3)];
  console.log(cpHand);
  document.getElementById('computerPickImage').src = handOption[cpHand];
  return cpHand;
};

const refree = (userHand, cpHand) => {
  if (userHand === 'paper' && cpHand === 'scissors') {
    setDecision('You Lose!');
  }
  if (userHand === 'paper' && cpHand === 'rock') {
    setDecision('You Win!');
    setScore(score + 1);
  }
  if (userHand === 'paper' && cpHand === 'paper') {
    setDecision('Tie');
  }
  if (userHand === 'rock' && cpHand === 'scissors') {
    setDecision('You Win!');
    setScore(score + 1);
  }
  if (userHand === 'rock' && cpHand === 'paper') {
    setDecision('You Lose!');
  }
  if (userHand === 'rock' && cpHand === 'rock') {
    setDecision('Tie');
  }
  if (userHand === 'scissors' && cpHand === 'scissors') {
    setDecision('Tie');
  }
  if (userHand === 'scissors' && cpHand === 'paper') {
    setDecision('You Win!');
    setScore(score + 1);
  }
  if (userHand === 'scissors' && cpHand === 'rock') {
    setDecision('You Lose!');
  }
};

const setDecision = (decision) => {
  document.querySelector('.decision h1').innerText = decision;
};
const setScore = (newScore) => {
  score = newScore;
  document.querySelector('.score h1').innerText = newScore;
};

document.querySelector('.newgame').addEventListener('click', function () {
  const hands = document.querySelector('.hands');
  hands.style.display = 'flex';
  const game = document.querySelector('.contest');
  game.style.display = 'none';
});
