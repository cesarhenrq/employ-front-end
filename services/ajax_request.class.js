class AjaxRequest {
  static login(url, data) {
    const xhr = new XMLHttpRequest();
    const requestUrl = 'https://employ-back-end-1fa428ae58ff.herokuapp.com/';

    xhr.open('POST', requestUrl + url);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
      }
    };

    xhr.send(JSON.stringify(data));
  }
}

export default AjaxRequest;
