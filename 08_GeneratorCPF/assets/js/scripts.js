const cpfEl = document.getElementById('cpf');
const generateCpfBtn = document.getElementById('generate-cpf');
const copyCpfBtn = document.getElementById('copy-cpf');

function generateCPF() {
  let n = Math.floor(Math.random() * 999999999) + 1;
  let nStr = n.toString().padStart(9, '0');
  let dv1 = calcDV(nStr, 10);
  let dv2 = calcDV(nStr + dv1, 11);

  cpfEl.innerText = formatCPF(nStr + dv1 + dv2);
}

function calcDV(numero, peso) {
  let total = 0;
  for (let i = 0; i < numero.length; i++) {
    total += parseInt(numero.charAt(i)) * peso--;
  }
  let resto = total % 11;
  return resto < 2 ? 0 : 11 - resto;
}

function formatCPF(cpf) {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpf.replace(cpfRegex, '$1.$2.$3-$4');
}

function copyCPF() {
  const cpf = cpfEl.innerText;
  navigator.clipboard.writeText(cpf).then(
    () => {
      alert(`CPF ${cpf} copied to clipboard!`);
    },
    (err) => {
      console.error('Error copying CPF: ', err);
    }
  );
}

generateCpfBtn.addEventListener('click', generateCPF);
copyCpfBtn.addEventListener('click', copyCPF);