let formData = { email: '', message: '' };

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textArea = form.querySelector('textarea');
const emailInput = form.querySelector('input');

textArea.addEventListener('input', handleInput);
emailInput.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormText() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    formData = savedData;
    textArea.value = formData.message;
    emailInput.value = formData.email;
  }
}

populateFormText();

function handleSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };

  form.reset();
}
