const verifybutton = document.querySelector('#verify-button');
const wordinput = document.querySelector('#word');
const result = document.querySelector('#result');

verifybutton.addEventListener('click', () => {
  verificarPalindromo();
});

wordinput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    verificarPalindromo();
  }
});

function verificarPalindromo() {
  const word = wordinput.value;
  const invertedWord = word.split('').reverse().join('');
  if (word.toLowerCase() === invertedWord.toLowerCase()) {
    result.innerHTML = `Tge word ${word} is a palindrome!`;
  } else {
    result.innerHTML = `The word ${word} is not a palindrome.`;
  }
}