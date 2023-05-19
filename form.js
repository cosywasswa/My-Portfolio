const form = document.querySelector('form');
function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#email');
  const email = emailInput.value;

  if (email === email.toLowerCase()) {
    form.submit();
  } else {
    let Message = form.querySelector('.massage-error');
    if (Message) {
      form.removeChild(Message);
    }
    Message = document.createElement('p');
    Message.classList.add('massage-error');
    Message.textContent = 'Please, your email address must be in lowercase.';
    form.appendChild(Message);
  }
}

form.addEventListener('submit', handleSubmit);