import $ from "jquery";

function createTable() {
  const table = $("<table></table>", { id: "table" });
  const thead = $("<thead></thead>");
  const tr = $("<tr></tr>");

  tr.append("<th>Task</th>");
  tr.append("<th>Description</th>");
  tr.append("<th>Status</th>");
  tr.append("<th>Actions</th>");

  thead.append(tr);
  table.append(thead);

  $("#container").append(table);
}

export default createTable;
