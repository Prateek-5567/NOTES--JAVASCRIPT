// single quote and double quote strings are same in js

let gname="PrateekBambal"
console.log(gname.length)
console.log(gname.toUpperCase());
console.log(gname.charAt(5) , gname[5])
console.log(gname.indexOf("Baman"))  // does not exist -1 otherwise gives startindex.(first occurance ka start indx)
console.log(gname.lastIndexOf("Bam"))  // last occurance ka end index.
console.log(gname.includes("amb"))  // true/false.
console.log(+gname.includes("amb"))  // 0/1  .. because of unary +.
console.log(gname.search("ba"))     // return first index i.e first occurance.

// ye thode alag hai:-
// 1. Using startsWith() : gives true or false .
let str = "JavaScript is awesome";

console.log(str.startsWith("Java"));   // true
console.log(str.startsWith("Script")); // false
console.log(str.startsWith("Script", 4)); // true (start checking from index 4)

// 2. ends with:- same
console.log(str.endsWith("some"))  // puri string check hogi // true
console.log(str.endsWith("jhota"))   // false
console.log(str.endsWith("Script",10))  // true.. sirf first 10 characters check krega kya vo unka koi bhi suffix Script se match hota hai?

// 3. match(joMatchKarnaH)
// matched index ka array return karta hai. ek proper array kya match kia konse index se match hua etc.
console.log(str.match("a"));  

// 4. matchAll(joMatchKarnaH)  : 3 ka bda bhai
console.log(str.matchAll("a")); // ek iterator object deta hai of all matches.
// lets break this down it is actually big:
/*
✅ What it does
matchAll() returns an iterator of all matches of a regex in a string.
Unlike match(), which only returns first match (or array if with global 
flag but without capturing groups), matchAll() gives you every match with capturing groups too.

AND. What is regex?
regex stands for Regular Expression.
It’s a pattern-matching language used to search, match, and manipulate text.
JavaScript has built-in support for regex using either:
Regex literal → /pattern/flags
Regex constructor → new RegExp("pattern", "flags")   // yes constructor se bhi bana sakte hai regex literal
Breakdown:

/ ... / → Regex literal
[a-z] → Match any single lowercase alphabet (a to z)
at → Followed by "at" literally
So the whole pattern [a-z]at matches words like:
"cat", "bat", "hat", "sat", "rat"
g → Global flag. Means it will not stop after the first match,
 it will search through the whole string.
*/

const regex = /[a-z]at/g;  // this is how we define regex literal : regular expression (regexp).
const text = "The cat sat on the mat with a hat.";
const matches = text.match(regex);

console.log(matches);    // ["cat", "sat", "mat", "hat"]

/*
So it matches any 3-letter string where:
first char = lowercase letter,  : [a-z] vala part
last two chars = "at".          : [a-z] at ... 1st letter can be anything a to z 2nd and 3rd character must be 'a' and 't' 
Examples: "cat", "bat", "hat", "zat"
*/


// 5. substring and slice (imp)
    //In JavaScript, you can slice strings (and arrays) using slice(start, end). 
let newString = gname.substring(2,8)
console.log(newString)
newString = gname.slice(2,7)
console.log(newString)
console.log(gname.slice(-8,-4))  

// 6. trim leading and preceding white spaces.. usefull when you take input from user.
let str1="     prateek      "
console.log(str1.trim());

// 7. replace and replaceAll :-
const url = "https://prateek_bambal_portfolio.vercel.com";  // url is not a normal variable it is keyword in js
console.log(url.replace('_','%20'));
console.log(url.replaceAll('_','%20'));
console.log(+url.includes("prateek"));

// 8. split  : convert string into array 
        // split url on the  basis of '_' 
console.log(url.split('_'))  // now this '_' will neither be included in left string nor in right string. 

// others :
console.log(gname.blink())
console.log(gname.bold())  // gname.bold() works in JavaScript 
                // (it wraps the string in <b>...</b>), but it is deprecated in modern standards.
// They come from very old browser-era JavaScript and are not recommended anymore.

// tip : follow backtics `` syntax in coding 