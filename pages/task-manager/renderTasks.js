import deleteTask from "./deleteTask";
import createEditTaskModal from "./editTaskModal";

function renderTasks(tasks) {
  $("#table tbody").remove();

  $("#table").append("<tbody></tbody>");

  tasks.forEach((task) => {
    const row = `
        <tr>
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.status}</td>
            <td>
                <button id="delete-task-${task.id}" class="task-actions" onclick="(() => { deleteTask('${task.id}'); })()"}">Delete</button>
                <button id="edit-task-${task.id}" class="task-actions" data-id="${task._id}">Edit</button>
            </td>
        </tr>
        `;

    $("#table tbody").append(row);

    $(`#delete-task-${task.id}`).on("click", () => {
      deleteTask(task.id);
    });

    $(`#edit-task-${task.id}`).on("click", () => {
      createEditTaskModal(task);
    });
  });
}

export default renderTasks;
