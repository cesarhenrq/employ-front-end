import createLoginButton from "./loginButton";
import createRegisterButton from "./registerButton";
import createButtonsContainer from "./buttonsContainer";

import login from "./login";

function createForm() {
  const form = $("<form></form>", { id: "login-form" });

  $("#container").append(form);

  form.html(`
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" name="email" placeholder="Email" id="email">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" name="password" placeholder="Password" id="password">
    </div>
  `);

  form.append(createButtonsContainer());

  const buttonsContainer = $("#buttonsContainer");

  buttonsContainer.append(createLoginButton());
  buttonsContainer.append(createRegisterButton());

  form.on("submit", login);
}

export default createForm;
