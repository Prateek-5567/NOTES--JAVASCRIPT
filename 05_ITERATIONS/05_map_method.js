/*  * map datastructure bhi hota h but this is diffrent thing. */
// map() method requires a callback function 

let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);
// multiply all elements by 2 .
// 1st way :
for(let index in arr){
    arr[index] *= 2;
}
console.log(arr);
// 2nd way :
let arr2 = arr.map( (num) => num/2 ); // make back original  
console.log(arr2);

// FIND ERROR : 
let arr3 = arr.map( (num) => (num/2) ); // make back original  
// THE OUTPUT IS A ARRAY OF ALL UNDEFINED ELEMENTS : FIND ERROR ;
// THE ISSUE IS we are using implicit callback function but creating a diffrent scope at the same time ; i.e 
// by using {.} we are creating a scope and this scope is return ; but we should not make diffrent scope and return in the same scope using (.)

/*
--------------- CHAINING -------------------
const newarr= arr.map().map().filter();        // this is called chaining
*/
arr = [1,2,3,4,5,6,7,8];
const newarr= arr.map( (num)=> num+10 ).map( (num)=> num/2 ).filter( (num) => num%2==0 );  // [11,12,..,18] -> [5.5,6,6.5,7,7.5,..,9]  -> [6,8]
console.log(newarr);
