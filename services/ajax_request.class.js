class AjaxRequest {
  static login(url, data) {
    const requestUrl = "https://employ-back-end-1fa428ae58ff.herokuapp.com/";

    return new Promise((resolve, reject) => {
      $.ajax({
        url: requestUrl + url,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
          resolve(response);
        },
        error: function (xhr, status, error) {
          reject(error);
        },
      });
    });
  }

  static register(url, data) {
    const requestUrl = "https://employ-back-end-1fa428ae58ff.herokuapp.com/";

    return new Promise((resolve, reject) => {
      $.ajax({
        url: requestUrl + url,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
          resolve(response);
        },
        error: function (xhr, status, error) {
          reject(error);
        },
      });
    });
  }
}

export default AjaxRequest;
