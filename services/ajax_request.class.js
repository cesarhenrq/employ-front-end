class AjaxRequest {
  static sendRequest(url, type, contentType, data, headers) {
    const requestUrl = "https://employ-back-end-1fa428ae58ff.herokuapp.com/";

    const requestOptions = {
      url: requestUrl + url,
      type,
      contentType,
      data,
      headers,
    };

    return new Promise((resolve, reject) => {
      $.ajax({
        ...requestOptions,
        success: resolve,
        error: reject,
      });
    });
  }

  static login(url, data) {
    const contentType = "application/json";

    return this.sendRequest(url, "POST", contentType, JSON.stringify(data));
  }

  static register(url, data) {
    const contentType = "application/json";

    return this.sendRequest(url, "POST", contentType, JSON.stringify(data));
  }

  static addTask(url, data) {
    const contentType = "application/json";
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    return this.sendRequest(
      url,
      "POST",
      contentType,
      JSON.stringify(data),
      headers
    );
  }

  static getTasks(url) {
    const contentType = "application/json";
    const token = localStorage.getItem("token");
    const headers = { authorization: `Bearer ${token}` };

    return this.sendRequest(url, "GET", contentType, null, headers);
  }

  static deleteTask(url) {
    const contentType = "application/json";
    const token = localStorage.getItem("token");
    const headers = { authorization: `Bearer ${token}` };

    return this.sendRequest(url, "POST", contentType, null, headers);
  }

  static editTask(url, data) {
    const contentType = "application/json";
    const token = localStorage.getItem("token");
    const headers = { authorization: `Bearer ${token}` };

    return this.sendRequest(
      url,
      "POST",
      contentType,
      JSON.stringify(data),
      headers
    );
  }
}

export default AjaxRequest;
