import AjaxRequest from "../../services/ajax_request.class";

import getTasks from "./getTasks";

import renderTasks from "./renderTasks";

function deleteTask(id) {
  AjaxRequest.deleteTask(`tasks/delete/${id}`)
    .then(function (response) {
      if (response.message === "Task deleted!") {
        alert("Task deleted!");
        getTasks()
          .then(function (tasks) {
            if (tasks.data !== "No tasks found for this user!") {
              renderTasks(tasks.data);
            } else {
              renderTasks([]);
            }
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
}

export default deleteTask;
