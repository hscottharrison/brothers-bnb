const form = document.querySelector('#contact-form');

function clearFrom() {
  const firstName = document.getElementById('contact-form-first-name');
  const lastName = document.getElementById('contact-form-last-name');
  const email = document.getElementById('contact-form-email');
  const phone = document.getElementById('contact-form-phone');
  const message = document.getElementById('contact-form-message');

  firstName.value = '';
  lastName.value = '';
  email.value = '';
  phone.value = '';
  message.value = '';
}

async function submitForm(event) {
  event.preventDefault();
  // set button loading state
  const button = document.getElementById('contact-form-button');
  const formError = document.getElementById('form-error-message');
  if (!formError.classList.contains('hide')) {
    formError.classList.add('hide')
  }
  button.classList.add('button--loading')

  const formData = new FormData(form);
  const urlEncoded = new URLSearchParams(formData).toString();
  const params = {
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: urlEncoded,
    method: "POST"
  };
  const response = await fetch('/mailer', params)
  if (response.status === 200) {
    button.classList.remove('button--loading');
    button.innerHTML = 'SUCCESS!'
    setTimeout(() => {
      button.innerHTML = 'SUBMIT';
    }, 3000);
    clearFrom();
  } else {
    button.classList.remove('button--loading');
    formError.classList.remove('hide');
  }
}

form.addEventListener('submit', submitForm);
