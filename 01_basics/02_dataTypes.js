"use strict"; // phle js ka older version tha before 10 years, Now to treat all your code as newer version of js 
// we use this line . :"use strict"
// iss line se sara code strict mode me chalta hai btw ye na likhne se bhi  vo stirct mode me hi chalta hai

//alert(3+3); // alert box me 6 show hoga but sirf browser par ; this works fine in browser because js ka engine browser e chipa hai
// we are currently working on node.js so we will not use alert box here
// ------------------------------------------------------------------------//

// data types in js
// A . premitive data types
// 1. Number
// int , bigint , float
// int range -2^53 to 2^53
// bigint range -2^64 to 2^64
// how to declare bigint ?
let num = 123; // number (integer)
let bigIntNum = 12345678901234567890123456789012345678901234567890n; // bigint (note the 'n' at the end)0

// 2. String
let str = "Hello, World!"; // string        

//3 Boolean
let isTrue = true; // boolean
let isFalse = false; // boolean 

// 4. Undefined :: means value is not defined 
let undef; // undefined
console.log(undef); // undefined        

// 5. Null :: means value defined hai as a null value.
let empty = null; // null   .// null is a special value that represents the intentional absence of any object value
// bull iS a standalone value that represents the absence of any value or object

//6. Symbol : when we make multiple components then to identify a 'unique' component use symbol. (uniqueness)

// Premetive data type.

// veryimportant interview ques.
console.log(typeof "hi i am string");  // string
console.log(typeof null);  // object (null is a object in js)
console.log(typeof undefined); // undefined (undefined khud ek data type hota hai jabki null ek object hota h)
console.log(typeof(undef));  // as a method 