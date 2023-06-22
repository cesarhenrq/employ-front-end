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

  static addTask(url, data) {
    const requestUrl = "https://employ-back-end-1fa428ae58ff.herokuapp.com/";

    const token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
      $.ajax({
        url: requestUrl + url,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${token}`,
        },
        success: function (response) {
          resolve(response);
        },
        error: function (xhr, status, error) {
          reject(error);
        },
      });
    });
  }

  static getTasks(url) {
    const requestUrl = "https://employ-back-end-1fa428ae58ff.herokuapp.com/";

    const token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
      $.ajax({
        url: requestUrl + url,
        type: "GET",
        contentType: "application/json",
        headers: {
          authorization: `Bearer ${token}`,
        },
        success: function (response) {
          resolve(response);
        },
        error: function (xhr, status, error) {
          reject(error);
        },
      });
    });
  }

  static deleteTask(url) {
    const requestUrl = "https://employ-back-end-1fa428ae58ff.herokuapp.com/";

    const token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
      $.ajax({
        url: requestUrl + url,
        type: "POST",
        contentType: "application/json",
        headers: {
          authorization: `Bearer ${token}`,
        },
        success: function (response) {
          resolve(response);
        },
        error: function (xhr, status, error) {
          reject(error);
        },
      });
    });
  }

  static editTask(url, data) {
    const requestUrl = "https://employ-back-end-1fa428ae58ff.herokuapp.com/";

    const token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
      $.ajax({
        url: requestUrl + url,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        headers: {
          authorization: `Bearer ${token}`,
        },
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
