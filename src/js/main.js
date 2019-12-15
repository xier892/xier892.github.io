const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('GET', 'https://xier892.github.io/webadvanced/src/json/project.json', true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = (xhr.responseType === 'json') ? xhr.response : JSON.parse(xhr.responseText);
      renderProject(data);
    }
  }
};
xhr.send();
