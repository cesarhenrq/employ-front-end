import $ from "jquery";

function createRegisterButton() {
  const registerButton = $("<button>", {
    id: "registerButton",
    type: "button",
    class: "login-page-buttons",
    text: "Register",
  });
  return registerButton;
}

export default createRegisterButton;
