# fetch() ek function hai jo server se data,file,API-Respose lane ke lie HTTP request bejta h.

Kaise kaam karta hai:
    Tum fetch(url, options) call karte ho.
    Ye ek Promise return karta hai.
    Jab server se response aata hai, promise resolve hota hai ek Response object ke sath.

Tum us response object se .json(), .text(), .blob() jaisi methods se actual data nikalte ho.

Default:
GET request bhejta hai.
Agar POST, PUT, DELETE bhejna ho to options me method, headers, body specify karte ho.

// GET request
const response = await fetch("https://api.example.com/data");
const data = await response.json();
console.log(data);

// POST request
await fetch("https://api.example.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Prateek", age: 21 })
});

//  INTERVIEW QUESTION 
FOR EXAMPLE YOU DID A API REQUEST USING FETCH AND PROMISE
IS STATUS OS REQUEST IS 404 (ERROR) WILL THAT GO INSIDE response() OR reject() ??
see : reject() will execute if you are unable to make a api call 
that status404 is actually a response received from the server 
// agar mere code ke end pe kuch error hota h to vo reject me jata hai. 

#### see 02.png 
fetch() when called is divided into two parts : 
1. WebBrowser ki network request handle karna. (response or reject)
2. variables and memory me data / space reserve karna.

(1.) se response aya to (2.) ke onFulfilled() me chala jayega ek fn() function and 
rejection aya to onRejection(fn()) me chla jayega
ye data and fn() are responsible to fill your response data in global memory.