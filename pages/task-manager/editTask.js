import AjaxRequest from "../../services/ajax_request.class";

import getTasks from "./getTasks";

import renderTasks from "./renderTasks";

function editTask(id) {
  const title = $("#task-title").val();
  const description = $("#task-description").val();
  const status = $("#task-status").val();

  const task = {
    title,
    description,
    status,
  };

  AjaxRequest.editTask(`tasks/update/${id}`, task).then(function (response) {
    if (response.message === "Task updated!") {
      alert("Task updated!");
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
  });
}

export default editTask;
