import "../../styles/login/style.css";

import createForm from "./form";

$(function () {
  const appContainer = $("#app");

  const loginHTML = `
    <div id="login">
      <div id="container">
        <div class="title"><h1>Log in</h1></div>
      </div>
    </div>
  `;

  appContainer.html(loginHTML);

  createForm();

  $("#registerButton").on("click", function () {
    window.location.href = "./../../pages/register/index.html";
  });
});
