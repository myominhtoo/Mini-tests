const btn = document.getElementById("btn")

btn.addEventListener("click",() => {
    let noti = document.createElement("div");
    noti.classList.add("toast");
    noti.innerText  = "Hi,How are you?";

    document.getElementById("container").appendChild(noti);

    setTimeout(
        () => {
            noti.remove();
        },3000);
});