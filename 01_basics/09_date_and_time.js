// date : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const myDate = new Date();
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.getDate())
console.log(myDate.getTime)
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getTimezoneOffset())
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)

// Creating date;

const myCreatedDate = new Date(2025,7,9,18,24);   // YYYY/MM/DD/HH/MM  : MM must be month index
console.log(myCreatedDate.toLocaleDateString());  // DD/MM/YYYY  ..  sirf date ayegi.
console.log(myCreatedDate.toLocaleString());  // DD/MM/YYYY  .. time bhi ayega but dot seperated
console.log(myCreatedDate.toLocaleString('en-IN'));  // DD/MM/YYYY  .. time ayega in indian format  , : seperated and 12-hour-based

const strDate = new Date("2025-08-09");  // as a string date / month is not index here
console.log(strDate.toDateString());

// =============== TIME ===================

const mytime=  Date.now();
console.log(mytime) // in milliseconds
// mytime is in milli seconds how to convert it into seconds
console.log(Math.floor(mytime/1000));  // convert into floor to avoid dec
console.log(mytime.toLocaleString('en-IN'));

// to match time we can compare seconds using these methods .
