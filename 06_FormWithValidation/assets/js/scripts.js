const form = document.querySelector('form');
const nameUser = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const errorMessages = document.querySelectorAll('.error-message');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  resetErrors();
  validateInputs();
});

function resetErrors() {
  errorMessages.forEach((errorMessage) => {
    errorMessage.innerText = '';
  });
  nameUser.parentElement.classList.remove('error');
  email.parentElement.classList.remove('error');
  subject.parentElement.classList.remove('error');
  message.parentElement.classList.remove('error');
}

function validateInputs() {
  const nameUserValue = nameUser.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  if (nameUserValue === '') {
    setError(nameUser, 'Name cannot be left blank');
  }

  if (emailValue === '') {
    setError(email, 'Email cannot be blank');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Invalid email');
  }

  if (subjectValue === '') {
    setError(subject, 'Subject cannot be left blank');
  }

  if (messageValue === '') {
    setError(message, 'Message cannot be left blank');
  }
}

function setError(input, errorMessage) {
  const errorMessageElement = input.nextElementSibling;
  errorMessageElement.innerText = errorMessage;
  input.parentElement.classList.add('error');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}