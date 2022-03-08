//taking numbers from document

var container = document.querySelector(".card-body");
var numbers = container.querySelectorAll(".num");
var signs = container.querySelectorAll(".sign");
// console.log(signs);

var preview = document.querySelector(".preview");
var result = document.querySelector(".result");
// console.log(preview);
// console.log(result);
// console.log(numbers);

let numArray = new Array();
let signArray = new Array();
let answer =  0;

signs.forEach(sign => {
    sign.addEventListener("click" , () => {
        let operator = sign.getAttribute("data-target");
        if(operator != "equal") preview.textContent += sign.textContent;
        let number = parseInt(preview.textContent);
        console.log(number);
        // console.log(operator);
        switch(operator){
            case "cl":preview.textContent = "";result.textContent= "";break;
            case "equal":console.log("done");break;
            case "add":answer+=number;result.textContent = answer;break;
        }
       
    });
});

numbers.forEach(number => {
    number.addEventListener("click", () => {
        var num = parseInt(number.getAttribute("data-target"));
        numArray.push(num);
        // console.log(numArray);
        answer = num;
        preview.textContent += num;
        // num = parseInt(preview.textContent);
        // console.log(typeof num);
        // console.log(num);
    });
});


//functions for operations

let add = () => {

}

let sub = () => {

}

let mul = () => {

}

let div = () => {

}

let mod = () => {

}