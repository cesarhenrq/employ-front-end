import $ from "jquery";

function createRegisterButton() {
  const registerButton = $("<button>", {
    id: "registerButton",
    type: "submit",
    class: "register-page-buttons",
    text: "Register",
  });
  return registerButton;
}

export default createRegisterButton;
