import AjaxRequest from "../../services/ajax_request.class";

function getTasks() {
  return new Promise((resolve, reject) => {
    AjaxRequest.getTasks("tasks/get")
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export default getTasks;
