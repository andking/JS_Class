let myArray = [];

function showArray() {
	  document.querySelector("#MyList")
	    .innerHTML ='[' + myArray.join(',') + ']';
}
function showArray2() {
	  document.querySelector("#MyList2")
	    .innerHTML ='[' + myArray.join(',') + ']';
}

function reset() {
  document.querySelector("#MyInput").value = "";
}

function push() {
	  let value = document
	    .querySelector('#MyInput')
	    .value;
	       myArray.push(value);
         showArray();
         reset();
	}

function noMiddleElement() {

  myArray.splice(2,1)
  showArray2();
  reset();
}
