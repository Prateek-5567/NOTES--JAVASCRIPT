
// MAPS IN JS:
// const map = new Map(); deceleration of map using constructor.

/* 
The Map object holds key-value pairs and remembers the original
insertion order of the keys. Any value (both objects and 
primitive values) may be used as either a key or a value.
 */

const map = new Map();

map.set("a", 65);
map.set("b", 98);
map.set("c", 99);

console.log(map);
// Map(2) { 'a' => 97, 'c' => 3 }    this is correct map. ; Map(2): size=2
// remembers the order of insertion.

// try to repeat value:
map.set("a",90);  // value will update but no duplicate entry allowed.
console.log(map);

console.log(map.get("a"));
// Expected output: 1

map.set("a", 97);

console.log(map.get("a"));
// Expected output: 97

console.log(map.size);
// Expected output: 3

map.delete("b");

console.log(map.size);
// Expected output: 2

// BAD PRACTICE: -
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map(0) { bla: 'blaa', bla2: 'blaaa2' }  // this is wrong way and its size as per map is also 0.
/**
 * But that way of setting a property does not interact with the Map
 *  data structure. It uses the feature of the generic object.
 *  The value of 'bla' is not stored in the Map for queries.
 */
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
// ye sare map ke methods kaam hi nahi karenge ispar.

// The correct usage for storing data in the Map is through the set(key, value) method.
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
console.log(contacts.has("Jessie")); // true
console.log(contacts.get("Hilary")); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
console.log(contacts.get("Jessie")); // {phone: "213-555-1234", address: "123 N 1st Ave"} sirf value ayegi output not key.
// contacts.delete("Raymond"); // false
// contacts.delete("Jessie"); // true
console.log(contacts.size); // 1  // size is variable not method
// console.log(contacts);

// DESTRUCTURING A MAP :-  { for .. of loop. }
for(const [key,val] of contacts){
    console.log(`key : ${key} ; Value : ${val}`);
}