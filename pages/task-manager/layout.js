import "../../styles/task-manager/styles.css";

import createAddTaskButton from "./addTaskButton";

import createHeader from "./header";
import createTable from "./table";

import getTasks from "./getTasks";
import renderTasks from "./renderTasks";

$(function () {
  const token = localStorage.getItem("token");

  console.log(token);

  if (token) {
    const expires_in = JSON.parse(localStorage.getItem("data")).expires_in;

    setTimeout(() => {
      localStorage.clear();
      alert("Session expired. Please login again.");
      window.location.href = "./../../index.html";
    }, expires_in);

    const appContainer = $("#app");

    const taskManagerHTML = `
    <div id="task-manager">
      <div id="container"></div>
    </div>
  `;

    appContainer.html(taskManagerHTML);

    createHeader();
    createAddTaskButton();
    createTable();

    $("#table").ready(() => {
      getTasks()
        .then(function (tasks) {
          console.log(tasks);
          if (tasks.data !== "No tasks found for this user!") {
            renderTasks(tasks.data);
          }
        })
        .catch(function (error) {
          alert(error);
        });
    });
  } else {
    alert("Please login first!");
    window.location.href = "./../../index.html";
  }
});
