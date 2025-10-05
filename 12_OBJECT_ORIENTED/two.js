// constructor function
// it allows to make multiple object literals from one object only.

const date = new Date();  // this new keyword calls the constructor function : 
console.log(date);

/* new Date() is calling the constructor function of the built-in Date class and returning a new object.
In JavaScript, anything you call with new must be a constructor function
    (traditional function or ES6 class).
Date is a built-in constructor function.
new Date() → allocates a fresh object, sets up its prototype chain, and calls the constructor 
    logic to initialize it with the current time.
*/

function uber(driver,car,duration){
    this.driver = driver;
    this.car=car;
    this.duration = duration;
    this.greetings = function(){
        console.log(`Get Ready ${this.driver} for new ride.Stay Calm and talk less.`);
    }
    return this;  // this line was optional earlier but dont know now code is not working without this line.
}
let booking1= uber("Suresh","hundai","1:20");
console.log(booking1);
let booking2= uber("mahesh","wagnor",'0:50');  // both booking1 and 2 points to same memory updates same context
console.log(booking1);  // note: i am still printing booking1 but details of booking2 
// are showed cuz both are updating thefunctional context of uber() in same function
// but i we would have used a new keyword that we could have got two objects./ curretly to both are accessing same memory.

let booking3 = new uber("akhilesh","audi","0:20"); // new object with separate memory space created.
console.log(booking1.driver);   // mahesh
console.log(booking2.driver);   // mahesh
console.log(booking3.driver);   // akhilesh


/* new keyword
1. new empty object is created 
2. constructor function is called auto. cuz of new keyword.
3. it initialises the new instance(object). 
*/

// finally see this
console.log(booking1.constructor);  // constructor is nothing just a reference to self/this
// [Function: Object] => constructor kuch nahi ek function h joki object hold karta h initialise karne ke lie