// destructuring object  (highly used in prop drilling in react)
const course = {
    courseName:"JS complete",
    coursePrice:969,
    courseInstructor:"Hitesh Ch."
}
console.log(course.courseInstructor);  
// lets say you need to access this multiple times.
// for that you will destructure your object in most websites;

const {courseInstructor} = course;  // learn this it is fixed syntax for object deconstruction.
const {courseName:Name} = course;   // Rename   // you can also assign any other name to it . this way
console.log(courseInstructor)
console.log(Name); 

// API calling 
// api : https://api.github.com/users/hiteshchoudhary
// fetch method  :-
// output i.e fetched data from api can be json or array of objects.

// we fetch api in async await and try and catch blocks for api handling