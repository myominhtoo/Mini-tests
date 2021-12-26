const img = document.querySelector("#container");
const imgs = document.querySelectorAll("#container img");

let index = 0;

let run = () => {
    index++;

    if(index > imgs.length-1) index = 0;

    img.style.transform = `translateX(${-index * 500}px)`;
    console.log("Hello");
}

setInterval(run,2000);