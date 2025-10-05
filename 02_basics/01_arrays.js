//declration:-
const arr= [ 1 , 'true' , "hany" , "radheshyam" ,{name:"prateek",age:"shadi ki"}] ;
// console.log(typeof arr)  // array is also an object.
// console.log(arr)
// console.log(arr[3])

// whenever you call copy constructor for arrays in js it creates shallow copy not deep copy.
// shallow copies shares same reference points if it is dynamic variable.
// just copies the content ;  //  deep copy IYKYK

// METHODS IN ARRAYS :-

arr.push("new element")
arr.pop()

// insert at start : unshift() : it shifts all the values of arrays to right. which is complex operation.
arr.unshift("startsWithMe")
// console.log(arr);

// remove from front : shift()
arr.shift();
// console.log(arr)

// arr.includes('true');
// arr.indexOf('hany')

// imp one: 
const newarr = arr.join();
// console.log(typeof newarr)   // convert into string and agar object hai andar to Symbol.to_primitive algo chlegi uspar.
// console.log(newarr)

// slice and splice
// interview question  : what is the diffrence between slice and splice considering this example:-

const myarr=[2,4,6,8,10,12,14]

//slice:
console.log("org array before slice : ",myarr);
const a1 = myarr.slice(1,3)   
console.log("slice(1,3) : ",a1)
console.log("org array after slice : ",myarr);

//splice:
console.log("org array before splice : ",myarr);
const a2 = myarr.splice(1,3)
console.log("splice(1,3) : ",a2)
console.log("org array after splice : ",myarr);


// slice : end index exclusive , no effect on org array
// splice : end index included , the splice is removed from the org array. /
// i.e splice manipulates the org array
