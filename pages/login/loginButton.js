function createLoginButton() {
  const loginButton = document.createElement('button');
  loginButton.setAttribute('id', 'loginButton');
  loginButton.setAttribute('type', 'submit');
  loginButton.setAttribute('class', 'login-page-buttons');
  loginButton.innerHTML = 'Login';
  return loginButton;
}

export default createLoginButton;
