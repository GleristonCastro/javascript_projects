'use strict';

const sons = {
  'A': 'boom.mp3',
  'S': 'clap.mp3',
  'D': 'hihat.mp3',
  'F': 'kick.mp3',
  'G': 'openhat.mp3',
  'H': 'ride.mp3',
  'J': 'snare.mp3',
  'K': 'tink.mp3',
  'L': 'tom.mp3'
}

const criarDiv = (texto) => {
  const div = document.createElement('div');
  div.classList.add('key');
  div.textContent = texto;
  div.id = texto;
  document.getElementById('container').appendChild(div);
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
  const audio = new Audio(`./assets/sounds/${sons[letra]}`);
  audio.play();
}

const adicionarEfeito = (letra) => document.getElementById(letra).classList.toggle('active');

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove('active');
  div.addEventListener('transitionend', removeActive);
};

const ativarDiv = (evento) => {

  const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();

  const letraPermitida = sons.hasOwnProperty(letra);
  if (letraPermitida) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
  }
}

exibir(sons);

document.getElementById('container').addEventListener('click', ativarDiv);

window.addEventListener('keyup', ativarDiv);