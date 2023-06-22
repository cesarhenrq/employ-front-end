function logout(event) {
  event.preventDefault();
  localStorage.clear();
  alert("You have been logged out.");
  window.location.href = "./../../index.html";
}

export default logout;
