In JavaScript, classes (class keyword) were introduced in ES6 (2015), but they are not “real” classes like in Java, C++, or Python. They are syntactic sugar over JavaScript’s existing prototype-based inheritance model.

# Under the hood, when you write:

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

# It is essentially transformed into something like:

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hi, I am ${this.name}`);
};

## JavaScript Prototypes – Notes
1. Prototype Basics
JavaScript is prototype-based → objects inherit directly from other objects.
Every object has a hidden property [[Prototype]] (accessible via __proto__).
[[Prototype]] points to another object (the prototype object) or null.

2. Prototype Chain
If a property/method is not found in the object → JS looks up in its prototype.
This continues until:
Property found → returned.
null prototype reached → undefined returned.
This lookup path is the prototype chain.

3. Function Prototypes

Every function in JS automatically has a .prototype property.
Used when the function is called with new.
Example:
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log("Hi " + this.name);
};
let p1 = new Person("Prateek");
p1.greet(); // Works via prototype chain. first Person will be called then its prototype will be.

## 7. Important Built-in Prototypes
Object.prototype → top of chain.
Many built-ins inherit from it: Array.prototype, Function.prototype, etc.
Methods like toString(), hasOwnProperty() come from Object.prototype.
## 8. Key Interview Points
    - JS inheritance is prototype-based, not class-based.
    - Prototypes allow method sharing → memory efficient.
        If each object stored its own copy of every method, memory usage would be wasteful.
        Instead, JavaScript stores methods in the prototype object, and all instances reference them through the prototype chain.
        Example:
        function Car(model) { this.model = model; }
        Car.prototype.drive = function() { console.log("Driving..."); };

        let c1 = new Car("BMW");
        let c2 = new Car("Audi");

        console.log(c1.drive === c2.drive); // true → shared method
        This shows method reuse across all instances, improving efficiency.

    - class is just syntactic sugar for constructor + prototype methods.
    - Prototype chain ensures property lookup delegation.