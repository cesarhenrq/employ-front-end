import AjaxRequest from "../../services/ajax_request.class.js";

function login(event) {
  event.preventDefault();

  $("#loginButton").attr("disabled", true);
  const email = $("#email").val();
  const password = $("#password").val();

  const formData = {
    email,
    password,
  };

  console.log(formData);

  AjaxRequest.login("users/login", formData)
    .then(function (response) {
      if (response.token === undefined) {
        alert("Invalid credentials!");
      } else {
        localStorage.setItem("token", response.token);
        localStorage.setItem("data", JSON.stringify(response.data));
        window.location.href = "../task-manager/task-manager.html";
      }
    })
    .catch(function (error) {
      alert(error);
    });

  $("#loginButton").attr("disabled", false);
}

export default login;
