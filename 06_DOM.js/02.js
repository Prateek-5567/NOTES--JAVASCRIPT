/**
 * diffrence b/w innerText and textContent
 * innerText shows the text inside the selected element and hides the part on which display:none is applied
 * textContent shows all inner text also the hidden part. 
    <h1> hi my name is <span style=" display:none;"> Prateek </span> . I am 21 years young </h1> 
    innerText = hi my name is . I am 21 years young.
    textContent = hi my name is Prateek . I am 21 years young.


   #### ####    innerText   #### ####
-> Returns the visible text of a node (what the user actually sees on the page).
-> Takes CSS into account (like display: none, visibility: hidden).
-> Forces reflow/repaint because it has to calculate what is visible.
-> Slower compared to textContent.


*/
