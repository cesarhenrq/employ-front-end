import AjaxRequest from "../../services/ajax_request.class";

import getTasks from "./getTasks";

import renderTasks from "./renderTasks";

async function deleteTask(id) {
  try {
    const response = await AjaxRequest.deleteTask(`tasks/delete/${id}`);

    const deleteTaskButton = $(`#delete-task-${id}`);

    deleteTaskButton.prop("disabled", true);

    if (response.message === "Task deleted!") {
      alert("Task deleted!");
      const tasks = await getTasks();

      if (tasks.data !== "No tasks found for this user!") {
        renderTasks(tasks.data);
      } else {
        renderTasks([]);
      }
    } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    alert(error);
  } finally {
    () => {
      deleteTaskButton.prop("disabled", false);
    };
  }
}

export default deleteTask;
