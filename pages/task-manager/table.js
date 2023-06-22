function createTable() {
  const table = $("<table></table>", { id: "table" });

  $("#container").append(table);

  $("#table").html(`
        <thead>
            <tr>
                <th>Task</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
    `);
}

export default createTable;
