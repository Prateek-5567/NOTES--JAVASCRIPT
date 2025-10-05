// data is categorised into two types based on how data is stored in memory and how it is used:
// it is primitive and non primitive 

// Primitive data types :- call are call by value.
// String , Number , Boolean , null , undefined , symbol , BigInt 

// Non primitive / referenced types :
// Arrays , Objects , Functions.  ::in sabko object hi bola jata hai.  array object  , function object

/*Ques: JS is dynamically / static typed language.;
 -> Dynamic hai 
const num = 100  // hence it is dynamically typed.
Variables don’t have fixed types.
The values have types, not the variables.
You can assign any type of value to the same variable at runtime, and JS won’t complain.
*/

let userEmail; // it is undefined by default.

// symbol data type is to create unique values.
let id1= Symbol('123');
let id2= Symbol('123');
console.log(id1,id2); // it seems thay are same as same value is passed but it is not so. they are still unique.
console.log(id1==id2);  // false;
// usecase : to create unqiue ids for all users.

let arr=['a',23,true];
let obj={
    fname:"dogesh",
    lname:"tiwar",
    ismarried:"true",
    childrencount:15
};
console.log(obj);

const myFunc = function() {
    console.log("hello world");
}
myFunc()  // calling function.

/*
// typeof vale interview ques: 
undefined -> undefined
null      -> object

eg. const outsideTemp=null;
    console.log(typeof outsideTemp) -> object

*/

/* diffrence in object and Object. :=
✔️ In JavaScript:

object (lowercase): No special meaning in JS. Just an identifier.

Object (uppercase): Built-in global constructor. Base of all objects. Example:

let a = {};            // literal
let b = new Object();  // via Object()



✔️ In TypeScript:

object: Type representing non-primitives ({} , [], functions).

Object: Broader type, includes primitives (via boxing).

*/