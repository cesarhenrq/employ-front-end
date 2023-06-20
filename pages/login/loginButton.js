function createLoginButton() {
  const loginButton = document.createElement('button');
  loginButton.setAttribute('id', 'loginButton');
  loginButton.setAttribute('type', 'button');
  loginButton.setAttribute('class', 'login-page-buttons');
  loginButton.setAttribute('onclick', 'login()');
  loginButton.innerHTML = 'Login';
  return loginButton;
}

export default createLoginButton;
