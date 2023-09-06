const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
const errorMessages = document.querySelectorAll('.error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateInputs();
});

function setError(input, errorMessage){
  const errorMessageElement = input.nextElementSibling;
  errorMessageElement.textContent = errorMessage;
  input.parentElement.classList.add('error');
};

function validateInputs(){
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const subjectValue = subjectInput.value.trim();
  const messageValue = messageInput.value.trim();

  if(nameValue === '') setError(nameInput, 'Name cannot be blank');

  emailValue === ''
  ?  setError(emailInput, 'Email cannot be blank')
  : setError(emailInput, 'Email invalid');

  if(subjectValue === '') setError(subjectInput, 'Subject cannot be blank');

  if(messageValue === '') setError(messageInput, 'Message cannot be blank');
};