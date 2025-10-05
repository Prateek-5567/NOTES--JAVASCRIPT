// make a api call to placeholder/data : and console that data using two ways:
// fetch api is a library

// see this concept

new Promise( ()=>{
    setTimeout( ()=>{
        console.log("this line will also be printed at end");  // why?
    },1000)
})  // but why? phele to esa nahi ho rha tha besak timeout lagaya ho queue me to phele upar vale functions jate hai then niche value functions
// task queue is FIFO so. phele upar vala async code execute hona chahiye tha??
// the reason is 01.png concept of event Loop : it uses a seperate queue (MicroTaskQueue/PriorityQueue) for fetch(). see diagram.
// so depending on time taken by fetch api its time of execution by call stack may vary.

// 1# using async await :-
async function getPlaceholderData(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // fetch hone me time lagta h to await lga dia taki phle fetch ho jaye tab agage badhe
        // abb ye response string form me h json me convert karna hoga
        // main point ye h ki string -> json convert hone me b time lagega to uske sath bhi await use krna h
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getPlaceholderData();

// 2.# using .then() and .catch() directlty with fetch
fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    (response)=>{
        return response.json();  
    }
).then(  // yaha flow jabhi ayega jab response.json() evaluate ho chuka hoga.
    (data)=> console.log(data)     // ab pure json data hai 
).catch( (e)=>console.log(e) );

// response ko json me convert karna to must h but no need to use await cuz iss vale
// .then() se interpreter bahar jabhi jayega jab kaam pura hoga ..  .then() is blocking code ..