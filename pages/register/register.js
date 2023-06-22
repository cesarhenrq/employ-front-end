import AjaxRequest from "../../services/ajax_request.class.js";

function register(event) {
  event.preventDefault();

  const registerButton = $("#registerButton");
  registerButton.prop("disabled", true);

  const name = $("#name").val();
  const email = $("#email").val();
  const password = $("#password").val();

  const isEmailValid = email.indexOf("@") === -1 || email.indexOf(".") === -1;

  if (!name || !email || !password || isEmailValid) {
    registerButton.prop("disabled", false);

    if (password.length < 6)
      return alert("Password must be at least 6 characters long!");

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1)
      return alert("Invalid email!");

    return alert("Please fill all the fields!");
  }

  const formData = {
    name,
    email,
    password,
  };

  AjaxRequest.register("users/create", formData)
    .then(function (response) {
      if (response.message === "Further information required!") {
        alert("Further information required!");
      } else if (response.message === "User created!") {
        alert("User created!");
        window.location.href = "./../../index.html";
      } else if (response.message === "User already exists!") {
        alert("User already exists!");
      } else {
        alert("Something went wrong!");
      }
    })
    .catch(function (error) {
      alert(error);
    })
    .finally(function () {
      registerButton.prop("disabled", false);
    });
}

export default register;
