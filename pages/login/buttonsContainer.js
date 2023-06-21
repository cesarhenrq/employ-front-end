import $ from "jquery";

function createButtonsContainer() {
  const buttonsContainer = $("<div></div>");
  buttonsContainer.attr("id", "buttonsContainer");
  return buttonsContainer;
}

export default createButtonsContainer;
