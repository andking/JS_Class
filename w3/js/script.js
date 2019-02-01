"use strict"
// console.log("mom");
//
// console.log(isParilomic("concordia"));
//
// let text = "mom";
// if (isParilomic(text)) {
//
// }
let name  ='John';
let result = name.split('');
console.log(result);

console.log(result.toString());

//variant1 palindrome() function
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("nnon"));

//variant2 palindrome() function
function isPalindrome(str) {
    return str === str.split("").reverse().join("") ? true : false;
}
console.log(isPalindrome("noon"));

//generate Random(mix,max)

function generateRandom(min,max) {
  return Math.random() * (max - min) + min;
}
console.log(Math.round(generateRandom(15,20)));

// default value for MIN = 0; for MAX = 1000;
function getRandomInt(min, max) {
  var min = Math.ceil(0);
  var max = Math.floor(1000);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt());

// Reload poage function;
function ReloadPage(){
  location.reload();
}
// Remove all spaces
var sample_str =  "PB 10 CV 2662";
console.log(sample_str);
var new_str = sample_str.split(" ").join("");
console.log(new_str);
