const text = "Hi,My name is Myo Min Htoo!!";
let  p = document.getElementById("container");

var index = 0;

function textWriter() {
    p.innerText = text.slice(0,index);
    index++;
    if(index > text.length-1) index = 0; 
}

setInterval(textWriter,100);