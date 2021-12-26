const toggle = document.getElementById("toggle");

toggle.addEventListener("change",
(e) => {
    document.querySelector(".container").classList.toggle("move");
    document.body.classList.toggle("dark",
    e.target.checked);
    document.querySelector("label").classList.toggle("active");
    document.querySelector("#light").classList.toggle("active");
    document.querySelector("#dark").classList.toggle("active");
});