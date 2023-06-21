import "../../styles/login/style.css";

import createForm from "./form";

$("#app").html(`
  <div id="login">
    <div id="container">
      <div class="title"><h1>Log in</h1></div>
    </div>
  </div>
`);

createForm();

$("#registerButton").on("click", () => {
  window.location.href = "../../pages/register/register.html";
});
