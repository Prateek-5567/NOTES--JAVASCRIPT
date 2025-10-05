// write your html in js :-

let div = document.createElement('div');
div.className = "heroSectionLeft";
div.id = Math.round(Math.random()*10) + 1;  // random id in [1,10]
console.log(div); 
div.setAttribute('title','Learning JS');

// class , id , style (very important); : - these are called attributes , : for them there are methods seperately
// more attributes are like : title etc. are added using setAttribute();
div.style = "background-color:aqua; color:red; text-decoration:underline; ";
div.innerText = " HI this div is CREATED USING JS";

document.body.appendChild(div); // append this element in document.body to render it on screen


// setAttribute()  is optimised cuz : 
// div.id or div.class : what they do they first fetch the element by selecting it from DOM tree them update and save.
// div.setAttribute() : directly updates the changes in DOM tree reducing reflow and repaint.

//so div.innerText is not optimised so how can you optimise it:

let addText = document.createTextNode(" Hi i am learning JS");
div.appendChild(addText);

document.body.appendChild(div); // append this element in document.body to render it on screen

