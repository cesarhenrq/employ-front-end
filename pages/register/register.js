import AjaxRequest from "../../services/ajax_request.class.js";

function register(event) {
  event.preventDefault();

  $("#registerButton").attr("disabled", true);
  const name = $("#name").val();
  const email = $("#email").val();
  const password = $("#password").val();

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
        window.location.href = "../../index.html";
      } else if (response.message === "User already exists!") {
        alert("User already exists!");
      } else {
        alert("Something went wrong!");
      }
    })
    .catch(function (error) {
      alert(error);
    });

  $("#registerButton").attr("disabled", false);
}

export default register;
