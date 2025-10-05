// singleton object again:-
const tinderUser= new Object();
tinderUser.id=1;
tinderUser.name="manmohan sharma"
tinderUser.sex="male"
// console.log(tinderUser);

// nested objects .. done \/

// combine two objects;
const ob1 = {1:'a',2:'b'}
const ob2 = {3:'a',4:'b'}

// PROBLEM :
const ob3= {ob1,ob2}  // object ke andar object vali problem same as array.push()
// console.log(ob3);

// solution 1 :-
const ob4 = {...ob1,...ob2};    // spread operator object ko spread kar dega then concat krega.
console.log(ob4);

// solution 2 :-
const ob5 = Object.assign( {} , ob1 , ob2 );  // auto sujjestions aa jate hai ki kya values dale object ke (.) ke andar.
console.log(ob5);
// Object.assign() : is a static method that copies all enumerable own properties from one 
// or more source object (yes! it can be used to make a copy also.) 
// to a target object ..  here the target is {}  
// you may alter this target object. like {10:"raju"} or keep some other object here as a target.
//egs:
const ob6 = Object.assign({10:"raju"},ob1);
console.log(ob6);
const ob7 = Object.assign(ob6,ob2)  // target object is ob6 and assign ob2 to it.  .. ob6 is actually updated through this in memory 
console.log(ob7);
console.log(ob6===ob7)  // ob6 me assign ko gya ob2 jise hamne ob7 me store kar lia 
console.log(ob6);
// Object.assign(target_obj , souces_objects);

const users = [
    {
        name:"radhe shyam",
        age:19
    },
    {
        name:"anita gopal",
        age:21
    }
]
console.log(users[1].name);


console.log(Object.keys(tinderUser))  //  make an array of all keys of given parameter object.
