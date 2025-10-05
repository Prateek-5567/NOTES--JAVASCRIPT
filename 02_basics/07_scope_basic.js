// var c=20;
// var always create global scope variables.
var a=100;
if(true){
    a=20;  // sachme update ho jayega that too globally...
    function addTwoNumbers(a,b){
        function printTwoNumsArray(a,b){
            return [a,b];
        }
        return a+b;
    }
}
console.log(a);

// const and let ke sath ye scene nai h

let arr=[1,2,'a','b','x',43,23]
let arrcopy=[];  //  initialise empty array
for(let i=0;i<arr.length;i++){
    arrcopy.push(arr[i]);
}
console.log(arrcopy);

// there are some very important js interview questions formed on scopes which is covered in NOTES please revise.
// closures bhi covered hai notes me boht ache se interview questions .