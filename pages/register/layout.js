import "../../styles/login/style.css";
import "../../styles/register/style.css";

import $ from "jquery";

import createForm from "./form.js";

$(function () {
  const appContainer = $("#app");

  const registerHTML = `
    <div id="register">
      <div id="container">
        <div class="title"><h1>Register</h1></div>
      </div>
    </div>
  `;

  appContainer.append(registerHTML);

  createForm();

  $("#cancelButton").on("click", function () {
    window.location.href = "./../../index.html";
    console.log("cancel button clicked");
  });
});
