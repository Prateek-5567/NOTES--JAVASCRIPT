/*
What is Hoisting?

Hoisting is JavaScript’s behavior of moving declarations (not assignments)
to the top of their scope (global or function) before code execution.

Key Rules

1.Function Declarations are hoisted with their body.
eg.
sayHi(); // ✅ Works
function sayHi() {
  console.log("Hi .. Hello");
}

Entire function is available before it’s defined.
func declaration hoist hokar top par chala gya ..

2.Var Declarations are hoisted but initialized as undefined.
eg.
console.log(a); // ✅ undefined, not error
var a = 10;

Only var a; is hoisted, assignment happens later.

3.let & const are hoisted too but kept in Temporal Dead Zone (TDZ) until their line of initialization.
eg.
console.log(b); // ❌ ReferenceError
let b = 20;

4.Function Expressions & Arrow Functions behave like variables (var, let, const) depending on how declared.
eg.
greet(); // ❌ TypeError: greet is not a function
var greet = function () { console.log("Hi"); };

👉 In short:
Functions → Fully hoisted.
Var → Hoisted but undefined.
let / const → Hoisted but not accessible before declaration (TDZ).
Function expressions / arrows → Follow variable rules.

*/