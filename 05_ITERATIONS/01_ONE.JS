// 1. for:
const arr=[2,4,6,"eight","X"];
let n=arr.length;  // length is not a function it is just a variable inside builtin class. obj.variable;  obj.function(); 
// functions execute with () and variable without.

for(let ind=0;ind<n;ind++){
    console.log(arr[ind]);
}
console.log("----------------------");

// 2. while
let i=0;
while(i<n) console.log(arr[i]),i++;

console.log("----------------------");
/* 
3. for - of loop :-   "of" iterates over values ;
    Used to iterate over iterable objects ONLY (arrays, strings ).
    Returns values.
*/

for(let val of arr){
    console.log(val);
}
console.log("----------------------");

let greetings = "Hi There!"
for(const char of greetings){
    console.log(char);
}  // in case of string "of" points to every character.

console.log("----------------------");
// iterate object:
const obj = {
    name:"prateek",
    age:21,
    feild:"CSE and AI",
    experience:"2M"
}
/*
for( val of obj ){   
    console.log(val);
}                        
//this is invalid : you can only iterate over keys of object and using keys you can access value of object

for objects we always use for ... in loop
*/

// 4. for in loop:
for(key in obj){
    console.log(`${key} : ${obj[key]} `);
}
console.log("----------------------");
//5 for each loop 
/* 
6. forEach() method (array method, not a loop keyword)  
   -> Executes a callback function once for each array element.
   -> Cleaner than for, but can’t use break/continue.
*/
const nums = [1, 2, 3];
nums.forEach( (num)=>{
    console.log(num*2);
})
// Output: 2 4 6




/*
    Loop	    Best For

    for	        Fixed number of iterations
    while	    Run until condition fails
    do...while	Run at least once
    for...of	Iterating values in arrays/strings/maps/sets
    for...in	Iterating keys in objects
    forEach	    Cleaner array iteration (no break/continue)
*/
// NOTE: 
// baki sabh ke lie for of loop ;  FOR OF  : SABKE LIE EXCEPT OBJECTS.
// for in loop for objects ;


