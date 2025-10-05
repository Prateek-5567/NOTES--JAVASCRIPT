let marvel_heros = ['thor','ironman','spiderman'];
let dc_heros = ['superman','batman','flash'];

// how can you concatinate these arrays in javascript :-

// 1. push  ( it failed. )
// marvel_heros.push(dc_heros);   
// console.log(marvel_heros);

//2. concat  : remember concat return a new array after concatinating two arrays;
let arrNew = marvel_heros.concat(dc_heros)  // you can concat only 2 at a time
// console.log(arrNew);

// 3. spread operator ;
let orgNewArr= [...marvel_heros,...dc_heros]   // you may spread multiple arrays onto a single array
// console.log(orgNewArr);

// flattening array and flattening degree 
let arr = [1,2,3,[4,5,6],7,8,[1,2,[3,4,[5,6,[7,8]]]]]   // max depth : 5
let flatArr1 = arr.flat(1)  // flat upto depth 1
let flatArr2 = arr.flat(2)  // depth 2
/*
console.log(flatArr1)
console.log(flatArr2)
console.log(arr.flat(Infinity));  // completely flatten hack
*/

// more to know : 
console.log(Array.isArray("nitesh"));
console.log(Array.from("prateek"))   

let score1=100;
let score2=200;
let score3=300;
 console.log(Array.of(score1,score2,score3))


 // interesting interview question on Array.from();
let obj ={name:"prateek"};
console.log( Array.of(obj) );   
// what will be the op and why?
// ans : op will be [] in older version of JS  , empty array cuz interpreter don't know kiska array banaye keys ka ya values ka.?.
// ans : op will be [ { name: 'prateek' } ]  array of this object  , in newer version of javascript.