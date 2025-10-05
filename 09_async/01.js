// javascript notes 
// single threaded language : JavaScript executes code in a single thread, meaning one command runs at a time in a specific order.
// Call Stack: All function calls are managed by the call stack. Only one function executes at a time; others wait their turn.
// Synchronus code : By default, JavaScript runs code line by line, waiting for each line to finish before moving to the next.
// Asynchronous code : JavaScript can handle tasks that take time (like fetching data) without blocking the main thread, using mechanisms like callbacks, promises, and async/await.
// Concurrency via Event Loop: JavaScript uses the event loop, callbacks, and APIs like setTimeout, Promises, and async/await to handle asynchronous tasks without creating new threads.
// Web APIs: Browser APIs (like DOM events, timers, AJAX) run outside the main thread and notify JavaScript when they're done.
// No True Parallelism: JavaScript itself doesn’t run multiple pieces of code at the same time (except with Web Workers, which are separate threads but have limited communication).
// Web APIs: Browser APIs (like DOM events, timers, AJAX) run outside the main thread and notify JavaScript when they're done.
// Blocking operations : Long-running tasks (like loops or heavy calculations) block the call stack, preventing other code from running until they finish.
// A js engine is nothing just two things : MEMORY_HEAP AND CALL_STACK ;
// CALL STACK IS NOTHING JUST at bottom : global execution context and then above it all functional execution contexts.
console.log("Start");

setTimeout(function() {
  console.log("Inside setTimeout with 0ms");
}, 0); // still it will execute later go into event loop i.e to webApi then to task queue and then back to call stack if the stack is empty

console.log("End");

// note : cd 09_async is used to change current working directory
// node 01.js is used to run the file
// control + option + N can also run files.