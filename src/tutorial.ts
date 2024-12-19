type Book = {
   title: string;
   author: string;
   year: number;
   genre: string;
   price: number;
};
const book1: Book = {
   title: 'The Great Gatsby',
   author: 'F. Scott Fitzgerald',
   year: 1925,
   genre: 'Fiction',
   price: 10,
};
const book2: Book = {
   title: 'The Catcher in the Rye',
   author: 'J.D. Salinger',
   year: 1951,
   genre: 'Fiction',
   price: 8,
};
const book3: Book & { other: string } = {
   title: 'To Kill a Mockingbird',
   author: 'Harper Lee',
   year: 1960,
   genre: 'Fiction',
   price: 12,
   other: 'abcd...',
};
console.log(book1, book2, book3);
