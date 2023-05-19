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

const yourName = document.getElementById('full-name');
const yourEmail = document.getElementById('email');
const yourMassage = document.getElementById('textmsg');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formDataStorage = {
    yourName: yourName.value,
    yourEmail: yourEmail.value,
    yourMassage: yourMassage.value,
  };

  localStorage.setItem('formData', JSON.stringify(formDataStorage));
});

window.addEventListener('load', () => {
  const contactDataRecover = JSON.parse(localStorage.getItem('formData'));
  yourName.value = contactDataRecover.yourName;
  yourEmail.value = contactDataRecover.yourEmail;
  yourMassage.value = contactDataRecover.yourMassage;
});