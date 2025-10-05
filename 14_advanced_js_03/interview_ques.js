/**BASE :-
 * object has many properties / prototypes
 * create any object in web console and write that open name + enter
 * open Prototype-> 
 *  you will see all properties and methods / functions of a any object.
 *  */ 

//video : https://youtu.be/jss2rL9kv6s
// QUESTION :-
/**
 * can you modify the property of math module. 
 * module name = Math ; Property name = PI
 * If yes How ? If no why?
 */

console.log(Math.PI);  // 3.14
Math.PI = 5;
console.log(Math.PI);  // 3.14

// ans. :  No you cant modify , reason :-

const obj1 = Object.getOwnPropertyDescriptor(Math,"PI");  // kisi module ki kisi property(s) ka description chahiye to is se milega.
// eg. Math module ki PI propert ka description
console.log(obj1);
/**
 * {
  value: 3.141592653589793,      // ye h is property (variable) ki value
  writable: false,               // property 1 :this is not writable (can not modify)
  enumerable: false,             // property 2: this is not enumerable(can not iterate over this property of Math module)
  configurable: false            // property 3 : can not delete or redefine this property.
}
 */
// this was all description for Math.PI  
// almost all properties of such modules are hardcoded in javascript i.e {configurable : false} for mostly all of them.
// Module is noting but a Object Prototype.
// you can create your own object and set these descriptive properties for their Members(variables and functions.)

const MyObj = {
    username : "prateek",
    email : "prateek@gmail.com",
    contact : "767871"
}
console.log(Object.getOwnPropertyDescriptors(MyObj));  //. description of alln properties of this object (username,email,contact) tino ka.
console.log(Object.getOwnPropertyDescriptor(MyObj)); // undefined cuz you have to specify kiske lie description chahiye
console.log(Object.getOwnPropertyDescriptor(MyObj,"username"));  
/**
 *  username: {
    value: 'prateek',
    writable: true,
    enumerable: true,
    configurable: true
  },
 */

  // for now all properties are enumerable so you can use for of loop to iterate over them
for (let [key,value] of Object.entries(MyObj)) { // sirf MyObj likhdia to vo iterable nahi h // object kuch cases me iterable hota kuch me nai.
    console.log(`${key}:${value}`);
}

Object.defineProperties(MyObj , {
    username : {
        writable:false,
        enumerable:false 
    },
    contact:{
        configurable : false
    }
})
//Second argument → an object where each key is a property name, and its value is a property descriptor.

console.log(Object.getOwnPropertyDescriptors(MyObj));

// NOW YOU CAN ITERATE OVER MyObj but can username property will not come in that loop as it is non enumerable now.
for (let [key,value] of Object.entries(MyObj)) { // sirf MyObj likhdia to vo vese b iterable nahi h // object kuch cases me iterable hota kuch me nai.
    console.log(`${key}:${value}`);
}
/**  o/p :                          username gayab h as it is not enumerable now.
email:prateek@gmail.com
contact:767871
 */