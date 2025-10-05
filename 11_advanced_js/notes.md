PROMISE object represents eventual completion or failure of an Asynchronous operation
 and its resulting Values.
eg file access directly nahi hoti kernel ko request bejni hoti h then kernel apko file lake deta h.

har line code ki brabar time nahi leti; to jyda time taking code se flow break na ho isliye async await ya promises ka use hota h 
Promises lets asynchronous methods return values like
 synchronous methods: instead of immediately returning
  the final value, the asynchronous method returns a promise
   to supply the value at some point in the future.

# A Promise is in one of these states:
   - pending: initial state, neither fulfilled nor rejected.
   - fulfilled: meaning that the operation was completed successfully.
   - rejected: meaning that the operation failed.

mostly you will see yourself consuming promises.

promise ekk object h to iska instance bhi new keyword se banega right...

jab promises nahi the to Q and bluebird use library use hoti thi 
inme boht sari functionalities hoti thi jese ki async , await, call , fetch , .then() , .catch();
now nodejs directly provided the support for promises

promise takes a callback function inside it and also helps reduce callback hell.

Async means starting a task (like fetching data) without waiting for it to finish
   so your code can keep running. When the task completes, its result is handled
   later via callbacks, Promises, or async/await.
   This prevents blocking the main thread.
   ham kisi bhi function ko async bana sakte h.
