
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName;       // this is reference of function
// sayMyName()      // this is func call

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){   // number1 and number2 are parameters

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)          // 3 and 5 are arguments

// console.log("Result: ", result);


function loginUserMessage(username){
    if(!username || username===undefined){
        return ("username can not be undefined or null");       
    }
    return `${username} just logged in.. `;
}
let out = loginUserMessage("prateek");
console.log(out);
console.log(loginUserMessage());  // nothing passed so undefined

// SHOPPING CARD ; E-COMMERCE
// args / rest operator  : used when we dont know how many arguments will be passed into function;

// problem:
function cartValues(num1){
    return num1;
}
console.log(cartValues(100,200,300));  // arguments > parameters

// all required parameters must be preceding to rest args  (...num1) or (...args)

function cartItems(num1 , ...othernums){  // this is rest operator
    return [num1,...othernums];   //this is spread operator
}
console.log(cartItems(100,200,300,400,250));