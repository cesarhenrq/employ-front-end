import $ from "jquery";

import logout from "./logout.js";

function createHeader() {
  const header = $("<header></header>", { id: "header" });

  $("#container").append(header);

  const name = JSON.parse(localStorage.getItem("data")).name;

  header.html(`
    <span>
        <h3>Task Manager</h3>
    </span>
    <div id="user-container">
        <h4>Welcome, ${name}</h4>
        <button id="logout">Logout</button>
    </div>
  `);

  header.find("#logout").on("click", logout);
}

export default createHeader;
