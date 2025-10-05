const insert = document.getElementById("insert");

window.addEventListener('keydown', function(e) {
  // Check if the pressed key is the spacebar (keyCode 32)
  // And ensure it's not being pressed within an input field or textarea
  if (e.code === "space" && e.target === document.body) {
    e.preventDefault(); // Prevent the default scrolling behavior
  }
});

function generate_random(){
    let x = Math.floor(Math.random()*100);
    return x;
}

window.addEventListener('keypress',(e)=>{
    insert.innerHTML = `
    <div class="alignment" style="top:${generate_random()}%; left:${generate_random()}%">
        <table>
        <thead>
            <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>${e.key === " "? "space" : e.key} </td>
            <td>${e.keyCode} </td>
            <td>${e.code} </td>
            </tr>
        </tbody>
        </table>
    </div>
    `;
})

