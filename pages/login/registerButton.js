function createRegisterButton() {
  const registerButton = document.createElement('button');
  registerButton.setAttribute('id', 'registerButton');
  registerButton.setAttribute('type', 'button');
  registerButton.setAttribute('class', 'login-page-buttons');
  registerButton.innerHTML = 'Register';
  return registerButton;
}

export default createRegisterButton;
