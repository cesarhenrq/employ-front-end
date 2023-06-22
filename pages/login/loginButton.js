import $ from "jquery";

function createLoginButton() {
  const loginButton = $("<button>", {
    id: "loginButton",
    type: "submit",
    class: "login-page-buttons",
    text: "Login",
  });
  return loginButton;
}

export default createLoginButton;
