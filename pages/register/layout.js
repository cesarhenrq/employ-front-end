import "../../styles/login/style.css";
import "../../styles/register/style.css";
import createForm from "./form.js";

$("#app").append(`
  <div id="register">
    <div id="container">
      <div class="title"><h1>Register</h1></div>
    </div>
  </div>
`);

createForm();

$("#cancelButton").on("click", () => {
  window.location.href = "../../index.html";
  console.log("cancel button clicked");
});
