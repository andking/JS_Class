'use strict'
let myArray = [];

function push(){

  validate();
let value = document
.querySelector('#myId')
.value;
myArray.push(value);

// console.log(value);
// console.log(myArray);
showArray();
reset();

}

function showArray() {
  LoopArray();
    document
    .querySelector("#myList")
    .innerHTML = myArray.toString();
}

function popFunction() {

  document
  .querySelector("#myList")
  .innerHTML = myArray.pop();
  showArray();
  reset();
}

function shift() {
myArray.shift();
    showArray();
    reset();
}

function unshift() {
    validate();
  myArray.unshift(value);
    // showArray();
    reset();
}

function reverse() {
  myArray.reverse();
    showArray();
    reset();
}

function slice() {
  document
  .querySelector("#myList2")
  .innerHTML = myArray.slice(1,-1 );
  showArray();
  reset();
}

function concat() {
  document
  .querySelector("#myList3")
  .innerHTML = myArray.concat(value);
  showArray();
  reset();
}

function validate() {
  var x = document
  .querySelector('#myId')
  .value;
  if (x == "") {
    alert("Input must be filled out");
    return false;
  }
}
function reset() {
  document.querySelector("#myId").value = "";
}


function compareNumbers(a,b) {
  if (a<b) {
    return -1;
  }
  if (b<a) {
    return 1;
  }
  return 0;
}

function sort() {
  myArray.sort(compareNumbers);
  showArray();
}
function LoopArray() {
  let text = '';
  for (let i = 0; i < myArray.length; i++) {
    text+='<li>'+ myArray[i] + '</li>\n'
    console.log(text);
  }

}
