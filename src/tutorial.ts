const books = [
   '1984',
   'Brave New World',
   'Angel',
   'Fahrenheit 451',
   'The Martian',
];

let foundBook: string | undefined ;

for (let book of books) {
   if (book === '1984') {
      foundBook = book;
      foundBook = foundBook.toUpperCase();
      break;
   }
}

console.log(foundBook?.length);
