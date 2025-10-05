// IIFE : Immediately Invoked Function Expressions (IIFE)
// normal function.
function chai(){
    console.log(`DB-1 connected`);
}
chai();
// IIFE :-
// 1.Named IIFE.
(function iifeChai(){  
    console.log(`DB-2 connected`);
})();   // IIFE must end with semicollon otherwise This func itself dont know where to stop the context of IIFE/.

// js me it is not necessary to give names to functions.
// 2. UN-NAMED IIFE.
(function(){  
    console.log(`MONGO-DB connected`);
})();

// jese implicit function hota hai:
const show2= (num1=0,num2=0) => ({one:num1 , two:num2});   // sirf { .. } to error de rha tha : so 
//                                                      hame inline block bnana tha ek to ( { .. } ) 
//                                                        bna dia inline block h ye directly run hoga.
// now this show2 is arrow function that too implicit..
console.log(show2());

// kuch bhi koi bhi block agar directly run karna h to usse parenthesis me dal dia hamne
// so  IIFE function ko bhi parenthesis me daldia  ab iske bhar ek () lga do IIFE bangaya . 

// ()()   first one for defn. second one for execution.

// notes : Global Scope ke pollution se problem hoti h kai baar .. i.e function bnao then usse globally run karo 
// so in short to reduce global scope pollution we use Immediate Invoked Function Expression.

// IIFE using arrow function 
// 3. ARROW IIFE
( () => {
    console.log(`IIFE using arrow function.`);
 })();   // semicollon is must.

 // passing parameters in IIFE :-

// 4. Parameterised Arrow IIFE.
( (name) => {
    console.log(`IIFE using Parameterised arrow function executed by ${name}`);
})('Prateek Bambal');