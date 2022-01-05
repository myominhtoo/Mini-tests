//making nav bae to be stick
var navbar = document.querySelector("header");
var navTop = navbar.offsetTop;

let stick = () => {
    if(window.scrollY >= navTop){
        navbar.classList.add("fixed");
    }
    else{
        navbar.classList.remove("fixed");
    }
}

window.addEventListener("scroll",stick);