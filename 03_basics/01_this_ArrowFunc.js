// this pointer and arrow functions:
// this pointer points to the current context.
// using this pointer inside object:
let user = {
    username:"Prateek",
    price:999,
    userLoggedInMessage : function(){    //  function welcomeMsg(){  .. } eese karke bnaoge to bhi thik h.
        console.log(`${this.username} has Logged in Successfully.`);
    }
}
user.userLoggedInMessage();
// if i change context then also this.username will point to updated context of object cuz it make function dynamic
user.username = "JaatHR12";
user.userLoggedInMessage();

// using this pointer globally :-
// globally this points to the outer most or global most object i.e "Window" 
// write this in console it will show Window object.
// and here it will show {} cuz abhi koi global ke andar context hi nahi h
// console.log(this);  // {}
// console.log(globalThis);  // global object

// js computer me kyu chal rahi h yeto v8 etc engines par kaam karti h ?
// un engines se specific environment create kia  : node js ;; node js enables us to use js in our local environment rather than learning in browser console.

// accessing this inside a function:
function one(){
    console.log(this);   // this ke andar kuch to likha hua h function ke andar run kia to diffrent behaviour aarha h
}
one();

function two(){
    let username="ritik";
    console.log(this.username);   // undefined ;  it proves that "this" do not points to context of a funtion this way.
}

// you can create the same two function this way :
// by string into some key or some variable 
const Two = function(){
    // another way .........
}

// ==========================- ARROW FUNCTION -=======================
const milk = () => {
    console.log("milk is ready");
    console.log(this)  
}
milk();

// implicit return array function :-
// jab single line return statement hota hai to esse directly return mardo 
const add2 = (num1,num2) => num1+num2;
const add2_ = (num1,num2) => (num1+num2);  // eese likh lo
console.log(add2(2,4));

// object return karvana h to kese karaye?
const temp = (name) => {username : name};
console.log(temp());   // op will be undefined cuz eese object return nahi hoga parenthesis me dalna pdega
const temp2 = (name) => ({username : name});
console.log(temp2());
