
function Library (books) {
  this.books = books;


  this.printTitles = function() {
    this.books.forEach((book) => {
      console.log(book.title);
    });
  }

  this.printAuthors = function(){
    this.books.forEach((book) => {
      if(book.authors !== undefined){
        for(i = 0; i < book.authors.length; i++){
          console.log(book.authors[i]);
        }
      }
    });
  }

  this.findShortest = function(){
    let bookIndex = 0;
    let shortestPageCount = books[0].pageCount;
    for(i = 1; i < books.length; i++){
      let currentPageCount = books[i].pageCount;
      if (currentPageCount < shortestPageCount){
        shortestPageCount = currentPageCount;
        bookIndex = i;
      }
      return books[bookIndex].title;
    }
  }

  this.findGoodBooks = function(){
    let goodBooksTitles = [];
    for (i = 0; i < books.length; i++){
      if(books[i].averageRating >= 3){
        goodBooksTitles.push(books[i].title);
      }
    }
    return goodBooksTitles;
  }

  this.findAuthors = function (){
    let pairsTitleAuthors = {};
    books.forEach((book) => {
      pairsTitleAuthors[book.title] = book.authors;
    });
    return pairsTitleAuthors;
  }
}
