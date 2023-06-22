import $ from "jquery";

import createAddTaskModal from "./addTaskModal";

function createAddTaskButton() {
  const addTaskButton = $("<button></button>", { id: "add-task-button" }).text(
    "Add Task"
  );

  addTaskButton.on("click", createAddTaskModal);

  $("#container").append(addTaskButton);
}

export default createAddTaskButton;
