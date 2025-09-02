/* Create an interface Book with properties title (string) and pages (number).
 Write a function describeBook that prints:
 "The book [title] has [pages] pages."*/
 
 interface Book {
    title: string;
    pages: number;
 };

 const describeBook = (book: Book) => {
    console.log(`This book ${book.title} has ${book.pages} pages.`);
 };

 describeBook({title: 'GitHub for dummies', pages: 515});