/*              memory / primitive / non primitive / shallowcopy / deepcopy
    -------------------- * ----------------- * ----------------

your primitive variables go in stack mem.
your non Primitive variables go in heap mem.
stack se value ki copy milti hai
heap se value ka reference milta hai
*/

let myname = "Prateek";
let myname2= myname;
// now any change in myname will not be reflected in myname2 as they are primitive types and a copy of myname is passed to myname2.

let obj1={
    name:"hitesh",
    age:39
}
let obj2= obj1;
// object is non primitive and obj2 contains a reference of obj1 
// i.e they point to same memory in heap memory.
obj2.name="suresh";
console.log(obj1);  
// I updated obj2 and obj1 got auto updated because they are pointing to same memory.

// 2. SHALLOW COPY :-
// a shallow copy creates a new object, but only copies the first level of properties
// is nested objects/arrays exists they will still be shared by reference.

let obj3 = {name: "hitesh", address: {city: "Delhi"}};
let obj4 = {...obj3};       // spread op.
obj4.name = "suresh";    // independent
obj4.address.city = "Mumbai"; // shared reference
console.log(obj3); // "Mumbai"

// if I alter obj4's first level properties , the obj3's first level properties will not be altered.
// but as  nested arrays or nested objects share same reference so they will get changed.

let obj5 = Object.assign({}, obj3);  // similiar to spread operator


// 3. Deep Copy:-
//A deep copy creates a completely independent clone, including all nested objects.
// No shared references.

// one way is to manually write a function that copies objects
function deepCopy(obj) {
  // If obj is null or not an object (primitive), return it directly
  if(obj===null || typeof(obj)!== "object") return obj;

  // If obj is an Array
  if(Array.isArray(obj)) {
    let arrcopy=[];
    for(let i=0;i<obj.length;i++ ){
        arrcopy[i]=deepCopy(obj[i]);     //recc
    }
    return arrcopy;
  }

  // If obj is an Object
  let copy={};
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
        copy[key] = deepCopy(obj[key]);  //recc
    }
  }
  return copy;
}

// Example:
let objOne = { name: "hitesh", details: { age: 39, hobbies: ["reading", "coding"] } };
let objTwo = deepCopy(objOne);

objTwo.details.age = 40;
objTwo.details.hobbies[0] = "sports";

console.log(objOne); // remains unchanged
console.log(objTwo); // independent copy