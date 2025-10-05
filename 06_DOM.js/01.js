/**         html collection vs array
 * 1. Origin
    HTMLCollection: Returned by DOM methods like
            document.getElementsByTagName("div")
            document.getElementsByClassName("myClass")
    NodeList: Returned by methods like
            document.querySelectorAll("p")
            childNodes
 -> htmlCollection can be converted in array but it is not a array byDefault.
 */

/**
* DOM Selectors
1. Single Element Selectors

        document.getElementById("id")
        → Selects element by its id. Returns Element or null.

        document.querySelector("selector")
        → Selects the first matching element using CSS selector (id, class, tag, attribute, etc.). Returns Element or null.

2. Multiple Element Selectors  

        document.getElementsByClassName("className")
        → Returns a live HTMLCollection of all elements with that class.

        document.getElementsByTagName("tagName")
        → Returns a live HTMLCollection of all elements with that tag.

        document.querySelectorAll("selector")
        → Returns a static NodeList of all matching elements.

*/

/**
| Feature         | **NodeList**                                                                        | **HTMLCollection**                                                       |
| --------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Returned By     | `querySelectorAll`, `childNodes`                                                    | `getElementsByClassName`, `getElementsByTagName`, `document.forms`, etc. |
| Live or Static  | **Static** (doesn’t auto-update when DOM changes) except `childNodes` which is live | **Live** (updates automatically when DOM changes)                        |
| Content         | Can contain **any node** (elements, text nodes, comments)                           | Contains **only element nodes**                                          |
| Index Access    | Yes (`list[0]`, `list[1]`)                                                          | Yes (`collection[0]`, `collection[1]`)                                   |
| Iteration       | Works with `forEach()` (modern browsers)                                            | Needs conversion (`Array.from()`) to use `forEach()`                     |
| Length Property | Yes (`list.length`)                                                                 | Yes (`collection.length`)                                                |
 */

//Converting NodeList / HTMLCollection to Array
let nodes = document.querySelector('#id1'); // NodeList
let arr1 = Array.from(nodes);

let elems = document.getElementsByClassName("test"); // HTMLCollection
let arr2 = [...elems]; // Spread operator
// both ways are correct 

// YOU CAN DIRECTLY ITERATE OVER NODELIST USING FOREACH( ()=> ()) LOOP BUT NOT ON HTML_COLLECTION Array.from(html_coll).

// Multiple selectors
let paras1 = document.getElementsByClassName("para"); // HTMLCollection
let paras2 = document.querySelectorAll(".para");      // NodeList

// Iterating
paras2.forEach(p => console.log(p.textContent)); // works

Array.from(paras1).forEach(p => console.log(p.textContent)); // convert for iteration

// getElementByClassName()    s
// getElementsByClassName()   m

// getElementByid()           s

// getElementByTagName()      s
// getElementsByTagName()     m

// querySelector()            s
// querySelectorAll()         m

