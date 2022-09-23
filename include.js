fetch("./header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#header-wrapper").innerHTML = data;
  });


fetch("./footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#footer-wrapper").innerHTML = data;
  });
