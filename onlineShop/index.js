// making nav bae to be stick
var navbar = document.querySelector("header");
var navTop = navbar.offsetTop;

let stick = () => {
    if(window.scrollY > navTop){
        navbar.classList.add("fixed");
    }
    else{
        navbar.classList.remove("fixed");
    }
}

window.addEventListener("scroll",stick);

//typing eff to homepage
var homepageText = document.querySelector(".homepage-text");
var productText = document.querySelector(".product-text");
var text1 = "ကျွန်တော်တို့၀ဘ်ဆိုဒ်လေးကတော့ အွန်လိုင်းကနေ စားစရာများ၊ဟင်းချက်စရာများကို အလွယ်တကူ၊အချိန်ကုန်သက်သာစွာ မှာယူရှိနိုင်မှာပဲဖြစ်ပါတယ်။";
var text2 = "မြန်မာပြည်တွင်း၀န်ဆောင်မှု ဖြစ်သည်ံ့အတွက် တခြားသောထပ်တိုး၀န်ဆောင်မှုများကိုပါ တိုးချဲ့ဆောင်ရွက်သွားမှာပဲဖြစ်ပါတယ်။";
var text3 = "အားလုံးကိုကျေးဇူးအထူးတင်ရှိပါသည်။";
var text4 = "အောက်ပါထုတ်ကုန်များကို စျေးနှုန်းချိုသာစွာဖြင့်မှာယူရရှိနိုင်ပါသည်။";
var textNum = 1;
var index = 0;
var idx = 0;
let type1,type2;

var typing = () => {
    if(textNum == 1){
        type1 = text1.slice(0,index);
        if(index == text1.length-1){
            ++textNum;
            index = 0;
        }
        homepageText.innerHTML = `${type1}`;
        ++index;
    }
    else if(textNum == 2){
        type1 = text2.slice(0,index);

        if(index == text2.length-1){
            ++textNum;
            index = 0;
        }
        homepageText.innerHTML = `${type1}`;
        ++index;
    }
    else if(textNum == 3){
        type1 = text3.slice(0,index);

        if(index == text3.length-1){
            ++textNum;
            index = 0;
        }
        homepageText.innerHTML = `${type1}`;
        ++index;
    }
    else{
        textNum = 1;
    }

    //ever running text
    idx++;
    type2 = text4.slice(0,idx);
    if(idx == text4.length - 1) idx = 0;
    productText.innerHTML = `${type2}`;//end
}

setInterval(typing,80);

//getting input 
let inputHelp = document.querySelector(".input-help");
let btnSend = document.querySelector(".btn-send");
let msgCont = document.querySelector(".user");
//clicking action to send help

btnSend.addEventListener("click",
    () => {
        let valueHelp = inputHelp.value;
        let group = document.createElement("div");
        group.classList.add("msg-group");
        let p = document.createElement("p");
        let img = document.createElement("img");
        p.innerText = `${valueHelp}`;
        img.src = "img/user.png";
        group.appendChild(p);
        group.appendChild(img);
        msgCont.appendChild(group);
    }
);