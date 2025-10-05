let userOne={
    username:"prateek",
    age:21,
    password:"#$%@D#DG%D@@D%4#2244eD&*%R",

    getUserDetails : function(){
        // console.log(username); it will give error .. which username. nested functions hote to nahi deta error but it is object 
        // you will have to specify which username is it current context vala??
        console.log(this.username);
        console.log(this);  // what is current context. ?
    }
}

console.log(userOne.getUserDetails());  
// undefined is also comming why ? : userOne.getUserDetails() jo return karega vo value print hogi
// to usne kuch return kia nahi to undefined aaya.
userOne.getUserDetails(); // sirf itna hi requred hai uss function ko call karne ke lie but agar vo kuch value return kar rha hoga 
//        to usse console.log() ke wrap karna hoga.   ; ab undefined nahi ayega


console.log(this);  // current global context is now {} empty but it varies.
// on browser this holds window object in global context.


// now assume you want to create multiple such users for that use CLASSES . : OOP.

