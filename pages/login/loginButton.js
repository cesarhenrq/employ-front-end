function createLoginButton() {
  const loginButton = $("<button></button>");
  loginButton.attr("id", "loginButton");
  loginButton.attr("type", "submit");
  loginButton.addClass("login-page-buttons");
  loginButton.text("Login");
  return loginButton;
}

export default createLoginButton;
