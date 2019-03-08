function reqListener() {
  let text = '';
  let myArray = JSON.parse(this.responseText);

  myArray.forEach(function(bar) {
      text += '<li>' + bar.name + '</li>\n'
  });
  document.querySelector('#outputData')
    .innerHTML = text;

}

function submit() {
  var req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  var fullurl = "https://api.openbrewerydb.org/breweries?by_city=";
  let text = document.getElementById('inputData').value;
  let url = fullurl + text;
  req.open("GET", url);
  req.send();
}
