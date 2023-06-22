import $ from "jquery";

function createCancelButton() {
  const cancelButton = $("<button>", {
    id: "cancelButton",
    type: "button",
    class: "register-page-buttons",
    text: "Cancel",
  });
  return cancelButton;
}

export default createCancelButton;
