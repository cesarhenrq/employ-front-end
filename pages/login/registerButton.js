function createRegisterButton() {
  const registerButton = $("<button></button>");
  registerButton.attr("id", "registerButton");
  registerButton.attr("type", "button");
  registerButton.addClass("login-page-buttons");
  registerButton.text("Register");
  return registerButton;
}

export default createRegisterButton;
