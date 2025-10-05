/** ################## NOTES AND CODE : ####################
Event propagation in the DOM involves three phases: the capturing phase, the target phase, and the bubbling phase.
1. Capturing Phase:
The capturing phase is the first phase of event propagation. During this phase, the event travels from the window object down through the DOM tree to the target element where the event originated. Event listeners configured for the capturing phase will be triggered as the event descends. To register an event listener for the capturing phase, the addEventListener method's third argument must be set to true. 
2. Target Phase:
This phase occurs when the event reaches its intended target element. Any event listeners directly attached to the target element will be executed during this phase.  (e.view or e.target or e.preventDefault() etc.)
3. Bubbling Phase:
The bubbling phase is the final phase of event propagation and is the reverse of the capturing phase. After the event reaches the target element, it then "bubbles up" through the DOM tree, starting from the target element and moving upwards towards the window object. Event listeners configured for the bubbling phase will be triggered as the event ascends. By default, addEventListener registers listeners for the bubbling phase if the third argument is omitted or set to false
 */

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
/*
// Capturing phase listener
grandparent.addEventListener(
  'click',
  () => {
    console.log('Grandparent (Capturing)');
  },
  true
);

parent.addEventListener(
  'click',
  () => {
    console.log('Parent (Capturing)');
  },
  true
);

child.addEventListener(
  'click',
  () => {
    console.log('Child (Capturing)');
  },
  true
); */
// when you will click child first the interpreter will go to highest level element in dom tree and then slowing it will come down
// as i have specified that please execute the events in capturing phase so whenEver you click child
// first the grandParent got clicked as per DOM propagation (highest parent)
// then the parent got clicked
// then the child got clicked
// so op:
/**
 * GrandParent
 * Parent
 * Child
 */
// the output is when you execute events in capturing phase i. while travelling down the dom tree.

// bubbling phase ka code :
// Bubbling phase listener (default) : third parameter false.
grandparent.addEventListener('click', () => {
  console.log('Grandparent (Bubbling)');
});

parent.addEventListener('click', () => {
  console.log('Parent (Bubbling)');
});

child.addEventListener('click', () => {
  console.log('Child (Bubbling)');
});

/** when you click on child and you have set event execution in bubbling phase then op:
 * Child
 * Parent
 * GrandParent
 */
// bottom up fashion me execution hua events ka .. phele child par jo event lagaya hua h vo chlega then Parent vala event chlega so on,.
// the output is when you execute events in capturing phase i. while travelling down the dom tree.

// moreover you can stop propagation : but this is only possible in bubbling phase cuz jab child par pohoch jaoge tabhi to propagation stop kar paoge capturing phase me to parents pohochne se phele hi execute ho chuke hote h.
// for example you just want to execute the event for the div which is clicked i.e you dont want its parents to execute their events also
// this is possible : child par click kia to sirf child par lgaye hue events execute honge parent and grandparent ke nahi
child.addEventListener('click', function (e) {
  e.stopPropagation(); // method
  console.log('child clicked and Propagation to parents blocked.');
});
