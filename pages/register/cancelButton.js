function createCancelButton() {
  const registerButton = $("<button></button>");
  registerButton.attr("id", "cancelButton");
  registerButton.attr("type", "button");
  registerButton.addClass("register-page-buttons");
  registerButton.text("Cancel");
  return registerButton;
}

export default createCancelButton;
