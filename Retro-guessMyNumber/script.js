'use strict';

function getElement(selector){
    return document.querySelector(selector);
}

const message = getElement('.message');
const checkButton = getElement('.check');
const scoreEl = getElement('.score');
const bodyEl = getElement('body');
const numberEl = getElement('.number');
const againButton = getElement('.again');
const guessEl = getElement('.guess');
const highScore = getElement('.highscore');

let score = 20;

let secretNumber = Math.floor(Math.random() * 20 + 1);



checkButton.addEventListener('click', function(){
    
    const guess = Number(guessEl.value);

    if(!guess) {
        message.textContent = "No Number!";
    }

    else if (guess === secretNumber) {
        message.textContent = "Correct Number!";
        bodyEl.style.backgroundColor = '#60b347';
        numberEl.style.width = '30rem';
        numberEl.textContent = secretNumber;

        if(score > Number(highScore.textContent)) {
            highScore.textContent = score;
        }
    }

    else if (guess!==secretNumber) {

        message.textContent = guess > secretNumber ? "Too High :(" : "Too Low :(";

        if(score > 1){
            score--;
            scoreEl.textContent = score;
        }
        else {
            scoreEl.textContent = "You lose :(";
        }
    }

});

againButton.addEventListener('click', function(){
    score = 20;
    secretNumber = Math.floor(Math.random() * 20 + 1);
    message.textContent = 'start guessing...'
    numberEl.textContent = '?';
    numberEl.style.width = '15rem';
    scoreEl.textContent = score;
    guessEl.value = '';
    bodyEl.style.backgroundColor = '#222';
});