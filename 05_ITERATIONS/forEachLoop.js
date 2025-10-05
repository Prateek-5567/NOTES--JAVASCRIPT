//1. array:
let arr=[4,3,4,3,4,3];
for(let i in arr){    // in iterates over keys ; for arrays keys are indexes.
    // console.log(`${i} : ${arr[i]}`);   //  0 : 4  ...
}
// MOST OF THE TIME YOU WILL USE FOREACH LOOP WITH arrays;
arr.forEach( ()=>{   // this will execute n times  n = arr.length;
    // console.log("PRATEEK");
})
arr.forEach( (val) => {
    // console.log(val);
})
// function which goes as a parameter is called a callback function . you may pass traditional function(){..} or arrow function your wish
arr.forEach( function(item){
    // console.log(item);
})

// passing predefined func as callback func:
function printMe(item){
    console.log(item);
}
// arr.forEach(printMe());  not this way you dont have to call the function inside this you just need to pass then function defenition in callback 
arr.forEach(printMe);   // this is said : Passing reference 

// callback function are always UN_NAMED ; ( there are two kinds of functions named and unNamed)
let arr2= ['a','b','c','d']
arr2.forEach( (item , index , array ) => {     // for each me sirf item pass nahi hota uska index aur complete array bhi pass hota hai.
    console.log(item,index,array);
})

// mostly you will get data as array of objects. (json = array of objects) (data from database)
const Mycoding = [
    {
        Lname: "python",
        use: "AI-ML"
    },
    {
        Lname: "cpp",
        use : "backend and dsa"
    },
    {
        Lname: "javascript",
        use : "frontEnd Iteractive webs"
    }
]
let i=0;
Mycoding.forEach( (CurrObj) => {
    console.log(`Object Number : ${i++}`);
    console.log(`Language Name : ${CurrObj.Lname}`);    
    console.log(`Language Use : ${CurrObj.use}`);    
})


// INTERVIEW QUESTION :
// 1. 
let array_temp = [1,2,3,4,5];
let values = array_temp.forEach( (item)=>{
    console.log(item);
    // return item;
})
console.log(values); 
/**
 * 1
 * 2
 * 3
 * 4
 * 5
 * undefined
 */
//2. 
let array_tmp = [1,2,3,4,5];
let AgainValues = array_tmp.forEach( (item)=>{
    // console.log(item);
    return item;
})
console.log(AgainValues); 
// undefined 