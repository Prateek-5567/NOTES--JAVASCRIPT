// comparing diffrent data types.:-
// typescript do not allow you to comapare two diffrent datatypes but js 
// allows and there are some set of rules that are defined for that.

console.log(null==0); // false;
console.log(null>0); //false;
console.log(null>=0); // true;

// reason: equality == and comparision operators > < >= <=  works diffrently 
// comparision op. converts null to 0 and then compare but == does not.

/*
✅ Rule: == (loose equality) special cases
JavaScript has special handling for null and undefined:
null == undefined → true
null == anything else → false
(unless you use <, >, etc., where null can be coerced to 0)
*/

// ==,=== inka alag syntax hai working ka and > >= < <= inka alag algo hai working ka



