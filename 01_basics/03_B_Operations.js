// ---------- OPERATIONS ------------
// all these is useless in production : just for exams

console.log("1"+2);
console.log("1"+2+2);  // "122"  // simple type conversion number -> string as
                                // string has higher scope
console.log(1+2+"2");  // "32"  cuz left to right evalutation hota hai.

console.log( 5 - 3 + 4 * 5 % 2 );
/*
Step 1: Operator Precedence in JavaScript
    Order (higher first):
    *, /, % (same precedence, left-to-right)
    +, - (lower precedence, left-to-right)
    So % and * will be done before +.
Step 2: Evaluate 4 * 5
    4 * 5 = 20
    Now expression becomes:
    3 + 20 % 2
Step 3: Evaluate 20 % 2
    Remainder when 20 is divided by 2:
    20 % 2 = 0
    So expression is:
    5 - 3 + 0
Step 4: now apply similiar rule on 5-3+0 : left to right operations execute.
    5 - 3 + 0 = 2.
✅ Final Answer
console.log(5 - 3 + 4 * 5 % 2); // 2
*/

// unary  + :- it converts true->1 ; false->0 ;
console.log(+"");  // = +false = 0
console.log(+true); // +true =1
console.log(+"anything..abc")  // + converts boolean to number but only true or false koo.  
// a normal string can not be converted :- its op: NaN;
console.log(+"123");  // string->number and it a number also ; op: 123
