import createCancelButton from "./cancelButton";
import createRegisterButton from "./registerButton";
import createButtonsContainer from "../login/buttonsContainer";

import register from "./register";

function createForm() {
  const form = $("<form></form>", { id: "register-form" });

  $("#container").append(form);

  form.html(`
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="Name" id="name">
    </div>
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

  buttonsContainer.append(createRegisterButton());
  buttonsContainer.append(createCancelButton());

  $("#registerButton").on("click", register);
}

export default createForm;
