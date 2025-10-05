const start = document.getElementById("start");
const stopp = document.getElementById("stop");

let idInterval=null;

start.addEventListener('click',function(){
    changeColors();
});

stopp.addEventListener('click',function(){
    clearInterval(idInterval);
    idInterval = null;  // overwrite na karna pade islie null set kardia,
})

const changeColors = function(){
    if(!idInterval)      // i.e agar null hai sirf tabhi taki overwrite na hoe
        idInterval = setInterval(repeatMe,1000);

    function repeatMe(){
        window.document.body.style.backgroundColor = generateColor();
    }
}

function generateColor(){
    let hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
