// Array.prototype.reduce();
/**
 * The reduce() method of Array instances executes a user-supplied "reducer" callback
 *  function on each element of the array, in order, passing in the return value from
 *  the calculation on the preceding element. The final result of running the reducer across
 *  all elements of the array is a single value.
 * The first time that the callback is run there is no "return value of the previous calculation".
 *  If supplied, an initial value may be used in its place. 
 *  Otherwise the array element at index 0 is used as the initial value and iteration
 *  starts from the next element (index 1 instead of index 0).
 * 
 * phele accumulator me initial value jayegi then 
 * in 1st iteration : accumulator + currentValue ;  currentValue will iterate over array.
 * then in every iteration accumulator will update and keep on updating and at the end the acc value in put in LHS variable.
 */
// reduce means array ke elements par koi reduce cond. laga kar ek single reduceds element nikalna

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 5;
const sumWithInitial = array.reduce( function(accumulator, currentValue){
    return accumulator + currentValue},initialValue
);

console.log(sumWithInitial);
// Expected output: 5 + 10

const sum1= array.reduce((acc,curr)=> (acc+curr),0 );
console.log(sum1);