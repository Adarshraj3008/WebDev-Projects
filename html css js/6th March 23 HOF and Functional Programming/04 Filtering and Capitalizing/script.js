// List of books
var books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 2006,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 2003,
  },
  {
    title: "victory",
    author: "George Orwell",
    year: 2010,
  },
  {
    title: "Hidden hindu",
    author: "Akshat Gupta",
    year: 2011,
  },

  // Add more books as needed
];

let FilteredBooks = books
  .filter(function (book) {
    return book.year >= 2010;
  })
  .map(function (book) {
    return {
      title: book.title,
      authorName: book.author.toUpperCase(),
      year: book.year,
    };
  });

// Displaying the list of books
console.log("List of Filtered Books:");
books.forEach(function (book) {
  console.log("Title:", book.title);
  console.log("Author:", book.author);
  console.log("Year:", book.year);
  console.log("-------------------");
});
