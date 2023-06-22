import AjaxRequest from "../../services/ajax_request.class";

import getTasks from "./getTasks";

import renderTasks from "./renderTasks";

function addTask(event) {
  event.preventDefault();

  $("#add-task").attr("disabled", true);

  const title = $("#task-title").val();
  const description = $("#task-description").val();
  const status = $("#task-status").val();

  const task = {
    title,
    description,
    status,
  };

  if (!title || !description || !status) {
    $("#add-task").attr("disabled", false);
    return alert("Please fill all the fields!");
  }

  AjaxRequest.addTask("tasks/create", task)
    .then(function (response) {
      if (response.message === "Task created!") {
        alert("Task created!");
        getTasks()
          .then(function (tasks) {
            renderTasks(tasks.data);
          })
          .catch(function (error) {
            alert(error);
          });
      } else {
        alert("Something went wrong!");
      }
    })
    .catch(function (error) {
      alert(error);
    });

  $("#add-task").attr("disabled", false);
}

export default addTask;
