'use strict'
function printTitles() {

  console.log(books[0].volumeInfo.title);
  console.log(books[0]['volumeInfo']['title']);
  books.forEach(function(book){
    console.log(book.volumeInfo.title);
  });
}
printTitles();

function printAuthors() {
  books.forEach(function(author){
    // if (books.volumeInfo.authors !== undefined)
    if (author.volumeInfo.authors){
      console.log(author.volumeInfo.authors.join('\n'));
    }
  });
}
printAuthors();

function findShortest() {
    // your code goes here
    return 'TITLE OF THE BOOK';
}

function aboveThree() {
  let result = [];
  console.log(books[0]);

  return result;
}

aboveThree();

function findAuthors () {
  let result = {};
  /* {
    "Females and Harry Potter" : ["Ruthann Mayes-Elma"],
    "Harry Potter and International Relations":  ["Daniel H. Nexon", "Iver B. Neumann"],
  }*/
  return result;
}
