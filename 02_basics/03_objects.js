// singleton : whenever you create object from constructor Object.create() or new Object()
// it is singleton 
let obj1= Object.create({}); 
obj1 = {name:"prateek"}
console.log(obj1);

// Object Literals method to create obj :
let obj = {
    name:"prateek",
    age:21,
    "gender":"male",
    i1:"id1",
    lastLoginDays:["monday","tuesday"]
};
// it assumes keys such as name , age as also string 
// agar key ko bina string "" ke define kia hai as name,age,i1  ,, in above eg they can be accessed as:-
console.log(obj.name);
console.log(obj["name"]);   // non stringed keys can be accessed in both ways using dot or []

// stringed key like : "gender"  can not be accessed using dot.
console.log(obj["gender"]);   
// but there is no diffrence in two this is just way of coding 

// using symbol in objects as a key . (Interview)
const mySym = Symbol("key1"); 
const obj2 = {
    name:"Prateek",
    age:21,
    // mySym:"storeAnything"   // this way this symbol is not used as Symbol ; this key is takken as string .
    [mySym]:"store values"      // this way it is considered as object.
}
console.log(typeof obj2.mySym)  // symbol can not be accessed using dot 
console.log(typeof obj2[mySym]);   // symbol are accessed using this way  obj2[mysym]
console.log(obj2[mySym]);

// typeof key par kese lagaye : esse :-
const SymbolKeys = Object.getOwnPropertySymbols(obj2);
// fetched only symbol properties of object 
// Iterate through the symbol keys and check their type (which will always be 'symbol')
SymbolKeys.forEach( key => {
    if(typeof key==='symbol'){
        console.log(`key : ${key.description} is a symbol `)
    }
})

Object.freeze(obj1);
// now any change in obj1 will not be considered.

// add new properties to obj2
obj2.greetings = function(){
    console.log(`HELLO JS USER ${this.name.toUpperCase()} `);  // this points to current object
}
console.log(obj2.greetings());
console.log(obj2.greetings);  // op : function execute nahi hoga bas function ka return back ayega


