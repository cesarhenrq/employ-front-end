import $ from "jquery";

import addTask from "./addTask";

function createAddTaskModal() {
  const modal = $("<div></div>")
    .addClass("modal fade")
    .attr("id", "add-task-modal");

  modal.html(`
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Add Task</h3>
                <button id="close-add-modal">&times;</button>
            </div>
            <form>
                <div class="form-group">
                    <label for="task-title">Title</label>
                    <input type="text" id="task-title" placeholder="Task title" />
                </div>
                <div class="form-group">
                    <label for="task-description">Description</label>
                    <input type="text" id="task-description" placeholder="Task description" />
                </div>
                <div class="form-group">
                    <label for="task-status">Status</label>
                    <select id="task-status" placeholder="Task status">
                        <option value="To Do">To Do</option>           
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>

                <button type="submit" id="add-task" >Add Task</button>
            </form>
        </div>
    </div>
  `);

  modal.on("click", function (event) {
    if (event.target.id === "add-task-modal") {
      modal.remove();
    }
  });

  modal.find("#close-add-modal").on("click", function () {
    modal.remove();
  });

  modal.find("#add-task").on("click", addTask);

  $("body").append(modal);
}

export default createAddTaskModal;
