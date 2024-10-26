const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// console.log(book);

// const title = book.title;
// title;

/*
// ##### Destructuring #####

const book = getBook(2);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
// console.log(title, author, hasMovieAdaptation, pages);

// const [primaryGenre, secondaryGenre] = genres;

// console.log(primaryGenre, secondaryGenre);

// ##### Rest/Spread Operators #####

const [primaryGenre, secondaryGenre, ...otherGenre] = genres;

console.log(primaryGenre, secondaryGenre, otherGenre);

const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = { ...book, moviePublicationDate: "2001-12-12" };
updatedBook;

// ##### Template Literals #####

const summary = `${title} is a book`;
summary;

// ##### Ternary operator #####

const pageCheck =
  pages > 1000
    ? "book has page over thousand"
    : "book has less than 1000 pages";
pageCheck;

// ##### Arrow Function #####

function getYear(Str) {
  return Str.split("-")[0];
}

console.log(getYear(publicationDate));

const getYear1 = (str) => str.split("-")[0];

console.log(getYear1(publicationDate));

// ##### Short circuiting #####

// And Operator
console.log(undefined && "some string" && "hari");
console.log("hari" && "" && 47 && "siva");

// OR Operator
console.log(false || "some text");
console.log(true || "some string");

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
console.log(spanishTranslation);

console.log(book.reviews.librarything.reviewsCount);

// NULLISH COLLESHING
const reviewCounts = book.reviews.librarything.reviewsCount ?? "NO RATING";
reviewCounts;

console.log(book);

// optional chaining

function getTotalReviewCount(book) {
  const goodReadsReview = book.reviews.goodreads.reviewsCount;
  const libraryThingReview = book.reviews.librarything.reviewsCount;
  console.log(goodReadsReview + libraryThingReview);
}

getTotalReviewCount(book);
*/

/*

// ##### Array map method #####

function getTotalReviewCount(book) {
  const goodReadsReview = book?.reviews?.goodreads?.reviewsCount;
  const libraryThingReview = book?.reviews?.librarything?.reviewsCount ?? 0;
  return goodReadsReview + libraryThingReview;
}

const books = getBooks();
books;

const x = [1, 2, 3, 4, 5, 6].map((el) => el * 2);
x;

const titles = books.map((book) => book.title);

titles;

const essentialDetails = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialDetails;

// ##### Array Filter method #####

const book2 = getBook(3);
book2;
const updateBookAdaptation = (book2.hasMovieAdaptation = false);

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

// ##### Array Reduce method #####

const pageAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pageAllBooks;

// ##### Array Sort method ##### //It will mutate the main array

const arr = [3, 7, 1, 4, 6, 2];

arr.sort((a, b) => b - a); //a-b will sorted in ascending order and b-a will return the descending order of sorted values
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// ##### Working with Immutable array #####

// 1)Add book object to array

const newBook = {
  id: 6,
  title: "Harry Potter and the chamber of Secrets",
  author: "J. K. Rowling",
};

const bookAfterAdd = [...books, newBook];
bookAfterAdd;

// 2)Delete book object from array

const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 2);
bookAfterDelete;

// 3) Update book object in the array

const bookAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, newAuthor: "hariprasath" } : book
);

bookAfterUpdate;
*/

// ##### Asynchronus Javascript: Promises #####

// fetch(`https://jsonplaceholder.typicode.com/posts/1`)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// ##### Asynchronus Javascript: Async and Await #####

async function fetchingData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const data = await res.json();
  console.log(data);
}

fetchingData();
