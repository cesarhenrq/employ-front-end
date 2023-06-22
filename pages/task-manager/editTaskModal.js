import $ from "jquery";

import editTask from "./editTask";

function createEditTaskModal(task) {
  const modal = $("<div></div>").attr({
    class: "modal fade",
    id: "edit-task-modal",
  });

  modal.html(`
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Edit Task</h3>
                <button id="close-edit-modal">&times;</button>
            </div>
            <form>
                <div class="form-group">
                    <label for="task-title">Title</label>
                    <input type="text" id="task-title" placeholder="Task title" value="${task.title}">
                </div>
                <div class="form-group">
                    <label for="task-description">Description</label>
                    <input type="text" id="task-description" placeholder="Task description" value="${task.description}">
                </div>
                <div class="form-group">
                    <label for="task-status">Status</label>
                    <select id="task-status" placeholder="Task status">
                        <option value="To Do">To Do</option>           
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>

                <button type="submit" id="edit-task">Edit Task</button>
            </form>
        </div>
    </div>
  `);

  modal.find("#task-status").val(task.status);

  modal.on("click", function (event) {
    if (event.target.id === "edit-task-modal") {
      modal.remove();
    }
  });

  modal.find("#close-edit-modal").on("click", function () {
    modal.remove();
  });

  modal.find("#edit-task").on("click", function (event) {
    event.preventDefault();
    editTask(task.id);
  });

  $("body").append(modal);
}

export default createEditTaskModal;
