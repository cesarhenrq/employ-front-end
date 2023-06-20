import AjaxRequest from '../../services/ajax_request.class.js';

function login(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const formData = {
    email,
    password,
  };

  console.log(formData);

  AjaxRequest.login('users/login', formData);
}

export default login;
