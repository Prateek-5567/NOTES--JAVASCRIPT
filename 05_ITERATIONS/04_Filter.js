// do you remember :
// arrow functions of single line can be written like : () => ( __ to be returned );  // must end with semicolon.
// () => return Condition.;

// filter requires a callback function 
let arr= [1,2,3,4,5,6,7,8,9];
// filter method is used to fiter some values based on condition ;
let newarr = arr.filter( (num) => (num>4));  // this means (return num>4) in explicit arrow func
console.log(newarr);

// yahi agar ham arrow function ke sath khele to :
let newarr2= arr.filter( (num) => {
    num>4;  // this does not mean anything.
})
console.log(newarr2);  // op : []  why empty?  concept: explicit return ..
// single line hoto return keyword is not needed it is auto understood that vahi return karna h .
// this concept is called implicit return : () => ()  ; right () is auto returned.

newarr2= arr.filter( (num)=>{
    return num>4;
})
console.log(newarr2);


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
];

const historyBooks=[];
books.forEach( (book) => {
    if(book.genre.toLowerCase()=='history'){
        historyBooks.push(book);
    }
})
// console.log(historyBooks);
const HisBooks = books.filter( (book)=>(book.genre.toLocaleLowerCase()=='history'));   // methods are called with (). 
// console.log(HisBooks);

// == : 2 equal means loose equality.
// ===: 3 equal means jyda => strong.






