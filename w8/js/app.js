function reqListener() {
  console.log(this.responseText);
}
function submit() {
  var req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET","https://www.googleapis.com/books/v1/volumes?q=harry");
  req.send();
}
