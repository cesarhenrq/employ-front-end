function createRegisterButton() {
  const registerButton = $("<button></button>");
  registerButton.attr("id", "registerButton");
  registerButton.attr("type", "submit");
  registerButton.addClass("register-page-buttons");
  registerButton.text("Register");
  return registerButton;
}

export default createRegisterButton;
