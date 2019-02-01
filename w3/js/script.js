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
