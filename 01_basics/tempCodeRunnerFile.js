// one way is to manually write a function that copies objects
function deepCopy(value) {
  // If value is null or not an object (primitive), return it directly
  if (value === null || typeof value !== "object") {
    return value;
  }

  // If value is an Array
  if (Array.isArray(value)) {
    let copy = [];
    for (let i = 0; i < value.length; i++) {
      copy[i] = deepCopy(value[i]); // recursive call
    }
    return copy;
  }

  // If value is an Object
  let copy = {};
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      copy[key] = deepCopy(value[key]); // recursive call
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