//Create a new note that appears on click of grey box with pencil icon
let createBox = document.getElementsByClassName('createBox')[0];
let notes = document.getElementsByClassName('notes')[0];
let input = document.getElementById('userInput');
let i = 0;

//create new note when enter key is pressed
createBox.addEventListener('keydown', content);

document.getElementById("create").addEventListener("click", function(){
    createBox.style.display = "block";
})

function content(e){
    if(e.keyCode == '13'){
        divStyle(input.value);
        input.value="";
        createBox.style.display = "none";
    }
}

//create array of colors for notes
function color(){
    let randomColors = ["#cc6699","#66ffff","#9999ff","#ff9999","#99ff99","#ffcc99","#6699ff","#ffccff","#ffff99","#4682B4","#00cc99","#ff9966","#33ccff", "#FFDEAD", "#008B8B", "#CD5C5C", "#DDA0DD"];
    if(i > randomColors.length - 1){
        i = 0;
    }
    return randomColors[i++];
}

function divStyle(noteText){
    let div = document.createElement("div");
    div.className = 'note';

    //attatch text to notes
    div.innerHTML = '<div class="details">'+'<h3>'+noteText+'</h3>'+'</div>';

    //Remove note on double click
    div.addEventListener("dblclick", function(){
        div.remove();
    })
    //set random note colors
    div.setAttribute('style', 'background:'+color()+'');

    //Add note
    notes.appendChild(div);
}