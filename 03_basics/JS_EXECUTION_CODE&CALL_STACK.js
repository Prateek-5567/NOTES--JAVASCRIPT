/* one of most important topic:
HOW DOES JAVASCRIPT EXECUTE CODE + CALL STACK 

    -------------- JAVASCRIPT EXECUTION CONTEXT -------------
1. # Execution Context:
 -> It is the environment in which JS code is evaluated and executed.
 -> Two main types:
    Global Execution Context (GEC) → created by default when JS starts.
    Function Execution Context (FEC) → created whenever a function is invoked.
  # Each execution context has:
    ->Variable Environment (variables, functions)
    ->Scope Chain
    ->this keyword binding

my js notebook notes are also very imp.
// JS is single threaded type ques etc..

2. Call Stack
A stack data structure used to keep track of execution contexts.
LIFO (Last In, First Out) principle.
Steps:
Global Execution Context is pushed first.
When a function is called → new execution context is pushed.
When function finishes → execution context is popped.

*/


let val1=10;
let val2=5;
function addnum(num1,num2){
  let total=num1+num2;
  return total;
}
let result1=addnum(val1,val2);
let result2=addnum(10,2);


/* steps for execution of this code:-

step1 : Global Execution Context is allocated very first in "this" keyword.
step2 : Memory Creation Phase (MCP) : keep undefined in all variables
        val1 -> undefined.
        val2 -> undefined.
        addnum -> func defn.
        result1 -> undef
        result2 -> undef
step3 : Execution phase       : put values
        val1 <- 10
        val2 <- 5
        addnum  ---> creates it own execution context ( FEC ) which includes:
              1-> new variable environment.
              2-> Execution Thread.
                  -> under this FEC STEP 2 and STEP 3 reExecutes every time this addnum function is called.
                  for eg it is called for this first time : here addnum(val1,val2) :-
                      1. memory creation phase:
                          val1 -> undefined 
                          val2 -> undefined
                          total -> undefined
                      2. Execution Context:
                          num1 <- 10
                          num2 <- 5
                          total <- 15
                          return (total) to Parent Excutional context or GLOBAL EXECUTIONAL CONTEXT i.e TO THE STEP 1 LEVEL.
                  NOW AFTER THIS FUNCTION's WORK IS OVER : THIS "FEC" FOR THIS FUNCTION CALL GETS DELETED.

                  FEC recreated for : addnum(10,2);
                      1. memory creation phase: ...
                      2. Execution Phase : ... very similiar.
                
*/
