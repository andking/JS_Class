function createNewPerson(name) {
  let obj = {};
  obj.name = name;
  obj.greeting = function() {
    console.log('Hi! I\'m ' + obj.name + '.');
  };
  return obj;
}

let p1 = createNewPerson('Sarah');
p1.greeting();


function Book (authors, title, pageCount, averageRating){
  this.authors = authors;
    this.title = title;
      this.pageCount = pageCount;
        this.averageRating = averageRating;
this.isPopular = function(){
  if (this.averageRating>= 3) {
    return true;
    }
  return false;
  }

  this.numberOfAuthors = function(){
     if ( this.authors !== undefined){
    // this.authors = function(){
      return this.authors.length;
    // }
    }
    return 0;
  }
}


let MyBooks =[];

  books.forEach(function(item){
  let temp =  new Book(item.volumeInfo.authors,
                       item.volumeInfo.title,
                       item.volumeInfo.pageCount,
                       item.volumeInfo.averageRating);
    MyBooks.push(temp);
  });
console.log(MyBooks);

MyBooks.forEach(function(book){
  // console.log(book.isPopular());
  console.log(book.numberOfAuthors());
});
