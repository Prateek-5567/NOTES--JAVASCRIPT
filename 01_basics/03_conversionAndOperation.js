// all these is useless in production : just for exams

// type conversion :
// 1. typeof(22) = number (small case);
// and so on . for all datatypes inbuilt it is in small cases but to do type convertion 
// use capital 1st letter :- 

let strNum = "23"
let intNum= Number(strNum); // explicit type conversion
console.log(typeof(strNum));
console.log(typeof(intNum));

// 2. what is the string you are string to covert is not a number //  !isdigit();;
// then your string gets convert int NaN : not a number.
let strnum2="34abc"
console.log(Number(strnum2));  // and NaN ka bhi typeof = Number hota hai it is also considered as a number in js.
console.log(typeof(Number(strnum2)));  // convert into number and check type.. op: number

// "22" => 22
// "22abc" => NaN

//3. boolean conversion . (interview)
// false, 0 , -0(negative zero) , 0n (longint zero) , "" , null , undefined , NaN.
// Everything else (objects, arrays, non-empty strings, non-zero numbers, functions, symbols, etc.) is truthy.

/*
############ Core Questions ############

1.What’s the difference between implicit and explicit type conversion in JavaScript?
ans:    Implicit (Coercion): JS automatically converts types.
        Explicit (Casting): Developer manually converts
// Implicit
console.log("5" + 2);   // "52"   (number → string)    .. if you use + string have higher scope
console.log("5" - 2);   // 3      (string → number)    .. if you use - number have higher scope

// Explicit
console.log(Number("5") + 2);  // 7
console.log(String(5) + 2);    // "52"

2.Explain == vs === with examples.
== → loose equality (performs type coercion).  IN SHORT: == ME DATA_TYPE COMPARE NAHI HOTA.
=== → strict equality (no coercion).           IN SHORT: ===ME DATA_TYPE BHI COMPARE HOTA HAI.
console.log(0 == "0");   // true
console.log(0 === "0");  // false
console.log(null == undefined);  // true
console.log(null === undefined); // false

3.What are falsy values in JavaScript? (covered earlier)

4.What happens when you use the + operator with a string and a number?
ans: in case of + : string has higher scope so , number gets convereted implicitly to string and then they get concatinated
console.log("5" + 2);   // "52"   (number → string)    .. if you use + string will have higher scope

5.What happens when you use the - operator with a string and a number?
ans:console.log("5" - 2);   // 3      (string → number)    .. if you use - number have higher scope

6.What is the result of Number("123abc") vs parseInt("123abc")?
ans: console.log(Number("123abc"));   // NaN
console.log(parseInt("123abc")); // 123   jitna bhi number hai preffix me usko integer me convert karna hai and first character aate hi stop
there is a question on leetcode to implement parse integer.

 ------------============  {IMPORTANT} =============---------------
 
7.How does JavaScript convert objects to primitives during operations?
 (hint: toString, valueOf, Symbol.toPrimitive)
ans:
Whenever you try to use an object in an arithmetic operation (+, *, -, comparisons, etc.),
 JavaScript must first convert the object to a primitive value.
This process follows the ToPrimitive algorithm:
    If the object has a Symbol.toPrimitive method → use it.
    Otherwise, if the operator is arithmetic (not string concatenation), JS tries:
        valueOf() first → must return a primitive.
        If not available, it tries toString().
case 1:
    let obj = {
        valueOf() { return 10; }
    }; 
    console.log(obj + 5);  // 15

obj is not a number.
JS tries to convert it:
Looks for valueOf(). Found. Returns 10 (a primitive number).
So effectively:
10 + 5  // → 15

Case 2:
    let obj2 = {
        toString() { return "42"; }
    };
    console.log(obj2 * 2); // 84

obj2 has no valueOf(), but has toString().
toString() returns "42" (a string).
When used with *, JavaScript converts "42" → 42 (number).
So:
42 * 2  // → 84
let s="43";
s = s*2;  // string -> number conversion hoga badme mult. hoga.
console.log(typeof s); // number 
    -------------- * ----------------- * ---------------

############ Tricky Conversion Scenarios ############

[] + []
[] + {}
{} + []
true + true
"5" - 3
"5" + 3
null + 1
undefined + 1

ANSWERS :- 
console.log([] + []);       // ""        (both → "")
console.log([] + {});       // "[object Object]"
console.log({} + []);       // 0         ({} seen as block, +[] → 0)
console.log(true + true);   // 2
console.log("15" - 3);      // 12
console.log("51" + 3);      // "513"
console.log(null + 1);      // 1   (null → 0)
console.log(undefined + 1); // NaN (undefined → NaN)  undefined is NaN so you cant add NaN to a number so the output is also NaN.
console.log(1+undefined);   // NaN
    ---------------- * --------------- * --------------------

############ Explain the result of: ############
 
1.Why is 0 == "0" true, but 0 == [] also true, yet "0" == [] false?
ans:
console.log(0 == "0");   // true   ("0" → 0)  // LOSE EQUALITY HAI TYPE CONVERSION HO JAYEGA.
console.log(0 == []);    // true   ([] → 0)   // [] YETO 0 HI HOTA HAI
console.log("0" == []);  // false  ("0" vs 0 → no match after coercion)
Rule: == (loose equality) comparison
जब == इस्तेमाल करते हो और दोनों sides के types अलग होते हैं,
 तो JavaScript type coercion करती है (ToPrimitive algorithm + कुछ rules).
Step 1: Left side
"0" → ये पहले से ही एक string है, so कोई conversion नहीं करना है।
Step 2: Right side
[] → ये एक object (array) है।
अब JS इसे primitive में बदलने की कोशिश करेगी।
पहले valueOf() try करता है → array का valueOf() object ही लौटाता है (primitive नहीं)।
फिर toString() try करता है → [].toString() → "" (empty string).
तो [] → "" (empty string).

now overall it is : "0"==""  => false;

so type conversion occurs only when LHS and RHS have diffrent type. 
    --------------------- * ------------------ * ---------------------

2.Why is [] == ![] true?
all arrays and objects are truthy even empty ones.
[] = true;
![] = false;
[] : is object .
![] was object but equalent to false.
so now object to preemetive conversion algo will occur.
[] symbol.toPremetive nahi h
valueOf bhi nahi h 
toString bacha sirf so op is  "" hoga
it is overall => "" == ![]  : false == false => true.
    -------------------- * ---------------- * -----------------

3.Boolean("false")   // typecast "false" -> 1 (non empty string hai.)

4.Boolean(false)  // typecast false->0  , true->1

5. console.log(!!" ") // true  // space is non empty string so it is true. !!true = true.
" " = true . double negation - nothing done
    ----------------- * ------------------ * -----------------

############ Advanced ############

1.Explain how ToPrimitive algorithm works in JavaScript (order: Symbol.toPrimitive, valueOf, toString).
ans:
If Symbol.toPrimitive exists → use it.
Else use valueOf().
Else use toString()
let obj = {
  [Symbol.toPrimitive]() { return 99; }
};
console.log(obj + 1); // 100

2.How does type coercion work in comparisons like <, >, <=, >= with strings vs numbers?
console.log("2" > 1);   // true   ("2" → 2)
console.log("02" == 2); // true
console.log("a" > 2);   // false  ("a" → NaN)
NOTE: ALWAYS STRING CONVERT TO NUMBER IS NOT POSSIBLE RETURN NaN.

3.Difference between Number(null), Number(undefined), Number([]), and Number({}).
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
console.log(Number([]));        // 0
console.log(Number({}));        // NaN 
Input is {} (an object).
JS calls valueOf() on {}:
For plain objects, {}.valueOf() just returns the object itself (still not a primitive).
Since not a primitive, JS calls toString():
{}.toString() → "[object Object]".
Now JS tries to convert "[object Object]" to a number:
Number("[object Object]") // NaN
to primitive of {} - "[object Object]"
Because "[object Object]" is not a valid numeric string, result is NaN.

4.Why is +true === 1 and +false === 0?
ans  : it is unary + : just ignore it.
console.log(+true);  // 1
console.log(+false); // 0
console.log(+"123"); // 123
ignore unary + 

Code Snippets for Practice  */
console.log([] == 0);   // true
console.log("" == 0);   // true
console.log(" " == 0);       // true
console.log(false == "0");   //true
console.log(null == undefined);  //true
console.log([1,2] == "1,2");  // true
console.log({} + []);      // [object Object]  

let s="43";
s = s*2;
console.log(typeof s);