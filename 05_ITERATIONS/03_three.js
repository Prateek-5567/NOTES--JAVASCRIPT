//  WE KNOW THAT FOR IN LOOP IS MAINLY FOR OBJECTS:
const mysym = Symbol("hi there!");
let obj={
   age:10,
   loct:"hr12",
   [mysym]:"key1"
}
// WRONG SYNTAX: you can not access both key and value of object at the same time using loop 
// for(let [key,val] in obj){
//     console.log(`${key} : ${val}`);
// }

for(let key in  obj){
    console.log(`${key} : ${obj[key]}`);
}
// console.log(obj[mysym]);  this is the only way to access symbols.

// using for in loop on others :: 
//1. array:
let arr=[4,3,4,3,4,3];
for(let i in arr){    // in iterates over keys ; for arrays keys are indexes.
    // console.log(`${i} : ${arr[i]}`);   //  0 : 4  ...
}

// 2. map : map is not iteratable so you can not iterate over map this way.
let map = new Map();
map.set("anil",50);
map.set("sunil",70);
map.set("ajay",42);

for(let key in map){
    // in iterates over keys ;
    console.log(key);
}
// NO OUTPUT.


