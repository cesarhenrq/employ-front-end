import AjaxRequest from "../../services/ajax_request.class";

import getTasks from "./getTasks";

import renderTasks from "./renderTasks";

function editTask(id) {
  const title = $("#task-title").val();
  const description = $("#task-description").val();
  const status = $("#task-status").val();

  $("#edit-task").attr("disabled", true);

  const task = {
    title,
    description,
    status,
  };

  if (!title || !description || !status) {
    $("#edit-task").attr("disabled", false);
    return alert("Please fill all the fields!");
  }

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

  $("#edit-task").attr("disabled", false);
}

export default editTask;
