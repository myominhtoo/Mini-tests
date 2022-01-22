
//boxfor courses
document.querySelector('.courses').addEventListener('click',
    () => {
        document.querySelector('.courses-collapse').classList.toggle("active");
    }
);
//box for books
document.querySelector('.books').addEventListener('click',() => {
    document.querySelector('.books-collapse').classList.toggle("active");
});

document.body.onclick = () =>  {
    document.querySelector('.books-collapse').classList.remove("active");
    document.querySelector('.courses-collapse').classList.remove("active");
}

