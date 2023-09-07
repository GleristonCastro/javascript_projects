const guessSection = document.querySelector('#guess-section');
const guessInput = document.querySelector('#guess');
const guessButton = document.querySelector('#guess-btn');
const resultParagraph = document.querySelector('#result');
const difficultySelect = document.querySelector('#difficulty');
const difficultySection = document.querySelector('#difficulty-section');
const gameSection = document.querySelector('#game-section');
const triesLeftSpan = document.querySelector('#tries-left');
const resetButton = document.querySelector('#reset-btn');

let maxTries;
let randomNumber;
let triesLeft;

difficultySelect.addEventListener('change', () => {
  const difficulty = parseInt(difficultySelect.value);

  switch (difficulty) {
    case 1:
      maxTries = 10;
      break;
    case 2:
      maxTries = 7;
      break;
    case 3:
      maxTries = 5;
      break;
    default:
      maxTries = 10;
      break;
  }

  triesLeft = maxTries;
  triesLeftSpan.textContent = triesLeft;

  randomNumber = Math.floor(Math.random() * 100) + 1;

  difficultySection.style.display = 'none';
  gameSection.style.display = 'block';
  guessSection.style.display = 'flex';
});

guessButton.addEventListener('click', () => {

  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    resultParagraph.textContent = 'Please enter a number between 1 and 100.';
  } else {

    if (guess === randomNumber) {
      resultParagraph.textContent = `Congratulations! You got it right in ${maxTries - triesLeft + 1
        } tries.`;
      resetButton.style.display = 'block';
      guessSection.style.display = 'none';
    } else if (guess > randomNumber) {
      resultParagraph.textContent = 'Very high. Try again.';
      triesLeft--;
    } else {
      resultParagraph.textContent = 'Very low. Try again.';
      triesLeft--;
    }

    triesLeftSpan.textContent = triesLeft;

    if (triesLeft === 0) {
      resultParagraph.textContent =
        'Your attempts are over. The correct number was: ' + randomNumber + '.';
      resetButton.style.display = 'block';
      guessSection.style.display = 'none';
    }
  }

  guessInput.value = '';
});

resetButton.addEventListener('click', () => {
  difficultySelect.value = '';
  resultParagraph.textContent = '';

  difficultySection.style.display = 'flex';
  gameSection.style.display = 'none';
  guessSection.style.display = 'none';
  resetButton.style.display = 'none';
});