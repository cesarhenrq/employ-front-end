import AjaxRequest from "../../services/ajax_request.class.js";

function login(event) {
  event.preventDefault();

  const loginButton = $("#loginButton");
  loginButton.prop("disabled", true);

  const email = $("#email").val();
  const password = $("#password").val();

  if (!email || !password) {
    loginButton.prop("disabled", false);

    return alert("Please fill all the fields!");
  }

  const formData = {
    email,
    password,
  };

  AjaxRequest.login("users/login", formData)
    .then(function (response) {
      if (response.token === undefined) {
        alert("Invalid credentials!");
      } else {
        localStorage.setItem("token", response.token);
        localStorage.setItem("data", JSON.stringify(response.data));
        window.location.href = "./../../pages/task-manager/index.html";
      }
    })
    .catch(function (error) {
      alert(error);
    })
    .finally(function () {
      loginButton.prop("disabled", false);
    });
}

export default login;
