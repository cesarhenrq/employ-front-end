import $ from "jquery";

function createButtonsContainer() {
  const buttonsContainer = $("<div>", { id: "buttonsContainer" });
  return buttonsContainer;
}

export default createButtonsContainer;
