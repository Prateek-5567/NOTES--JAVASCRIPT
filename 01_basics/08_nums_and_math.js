
// normally : creating number
const score=400;
// Creating number as an OBJECT.
let n = new Number(420)  // datatype : number hota hia && constructor Number hota hai .. in all data types

/*  // number vs number_as_object.
console.log(n)  
console.log(typeof n)  // object of number
console.log(score)
console.log(typeof score)  // number */

// number have very less number of properties but string has many so,
// you can convert number to string then do your work.
/*
console.log(n.toString())
console.log(n.toString().length)
console.log(n.toFixed(2))  // 2 decimal places  // highly used in ecommerce

let otherNumber = 123.473419
console.log(otherNumber.toPrecision(3))  // rounded off to 3 digits ; return type is string
console.log(otherNumber.toPrecision(4))     // round off to 4 digits.

let money = 242834982394822948;  
console.log(money.toLocaleString())  // add seperators(dots) as per English stand.
console.log(money.toLocaleString('en-IN'))  // add seperators(commas) as per Indian stand.

*/


// ++++++++++++++++++++++     Math     +++++++++++++++++++++++++++
// M is capital and not ends with s
// console.log(Math.abs(-3029))
// console.log(Math.round(2.498934839))  // round of to nearest number   .. ceil(2.2) floor(2.2)

// console.log(Math.pow(2,3))
// console.log(Math.max(2,3,4,2,-232,3,2,1,2,212,112,192))

// random :-  (most important)

console.log(Math.random())  // random value between 0(inclusive) and 1(exclusive)
// bring this value between 1 to 6 just like a dice's random output
console.log(Math.floor(Math.random() * 6) + 1);  // floor to get lower integer.
// Math.random() *6  : it can give values in range 0 to 5.999...  i.e it can never give you a 6 so do a +1  :: now range is 1 to 6  

// what if i want values from 10 - 20 :
const min=10;
const max=20;
const rand = Math.floor((Math.random() * (max - min +1))) + min;

console.log(rand)
