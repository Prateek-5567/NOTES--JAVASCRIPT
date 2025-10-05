// console.log('Hello!')
const button = document.querySelectorAll('.canvas .button'); // it return NodeList and we can use forEach() on it.
const body = document.querySelector('body');

button.forEach((btn) => {
  btn.addEventListener('click', function (evnt) {
    // evnt : many details of event that are carried along .
    // console.log(evnt);   // what is event
    console.log(evnt.target); // kispar event lag raha h

    const id = evnt.target.id;
    body.style.backgroundColor = id;
  });
});
