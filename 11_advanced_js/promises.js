// #1.
const promiseOne = new Promise(function(resolve,reject){
    // do async tasks , newtwork calls , database calls, crypto tasks...
    setTimeout(()=>{
        console.log("promise 1 fullfilled in 1 sec");
        resolve();   // it will connect this promise with .then()
        },1000);
    
});  // it is promise creation/definition.

promiseOne.then(function(){
    console.log("promise is consumed ; inside .then()")
})    // this is called : promise ko consume karna

// #2   directly consume eg :-
new Promise( (resolve,reject)=>{  // resolved hai thats why it is bright in color here .
    setTimeout( () => {
        resolve();
        console.log("first line ; promise ");
    },1000);
}).then(()=>{
    console.log("second line ; resoved ");
     // agar yaha kuch erroneus chij daldi to error nahi ayega balki catch use detect kar lega.
     cc.lg("i generate error and trigger .catch() ");
}).catch(()=>{
    console.log("third line ; error => thrown by .then() method ")
});  

// #3.   both create and consume. 
let promiseThree = new Promise( (res,rej)=>{
    setTimeout( ()=>{
        console.log("first");
        rej();
    } ,1000);
}).then(()=>{
    console.log("second ; res");  // then execute nahi hoga rejected promise me.
}).catch( ()=>{
    console.log("third ; rej ");
}).finally( ()=>{
    console.log("i will definately execute");
})

/* promise one two three all three takes 1 seconds but why are they printed all
   together : because it is promise not async await
   it is async but seems like sync actually : meanwhile the 1 second of promiseOne 
   is started js interprets promiseTwo and so on further. 
   so in short tino common 1 second le rhen hai async await hota to phele promiseOne complete hota 
   only then promiseTwo interpret hota.
   so jabtak promiseOne ki 1 sec horhi hoti h flow promiseTwo par chla jata h and so on..
*/



// #4. you can pass parameters through resolve() to .then().  // ye 1 sec nahi le rha to sabse upar print hoga
let promiseFour = new Promise(function(res,rej){
    // do get api call to get data.
    // got data in string convert into JSON.parse(stringdata)=> to object.
    // now pass this data if proimise resolved to .then().
    let data = {username:"prateek",pass:"1234"};
    res(data);  // kuch bhi pass kar sakte h .
});
// yahi h callback hell ko improve karna using promises.
promiseFour
.then((data)=>{
    console.log(data);
    //let i want to pass only username of user not entire data that i got from api.
    return data.username;
})
.then( (username)=>{
    console.log(username);
})
.catch( ()=>{
    console.log("error!!")
})




