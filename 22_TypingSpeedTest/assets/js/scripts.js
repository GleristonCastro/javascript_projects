const text = document.querySelector('#text');
const inputext = document.querySelector('#inputext');
const restart = document.querySelector('#restart');
const result = document.querySelector('#result');
const historic = document.querySelector('#historic');
const switchThemeButton = document.querySelector('#SwitchTheme');

const texts = [
  'Example text to type.',
  'Another example of text to type.',
  'Another example of text to type.',
  'Type this.',
  'You can type this here.',
];

function newText() {
  const index = Math.floor(Math.random() * texts.length);
  text.textContent = texts[index];
}

function start() {
  const testsStatus = JSON.parse(localStorage.getItem('testInProgress'));

  if (!testsStatus) {
    localStorage.setItem('startTime', new Date().getTime());
    localStorage.setItem('testInProgress', true);
  }
}

function verify() {
  const tempoFinal = new Date().getTime();
  const tempoGasto =
    (tempoFinal - parseInt(localStorage.getItem('startTime'))) / 1000;
  result.textContent = `Congratulations! It took you ${tempoGasto} seconds.`;

  addToHistoric(text.textContent, tempoGasto);

  localStorage.setItem('testInProgress', false);
  inputext.value = '';
  newText();
}

function addToHistoric(textoDigitado, tempoGasto) {
  const itemHistorico = document.createElement('p');
  itemHistorico.textContent = `Text: '${textoDigitado}' - Time: ${tempoGasto} seconds.`;
  historic.appendChild(itemHistorico);
}

inputext.addEventListener('keyup', () => {
  start();
  if (inputext.value === text.textContent) {
    verify();
  };
});

restart.addEventListener('click', () => {
  inputext.value = '';
  result.textContent = '';
  newText();
  localStorage.setItem('testInProgress', false);
  historic.innerHTML = '';
});

switchThemeButton.addEventListener('click', () => {
  const body = document.body;

  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
  };
});

newText();