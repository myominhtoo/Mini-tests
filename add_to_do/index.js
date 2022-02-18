var btnAdd = document.getElementById("btn-add");
var inputBox = document.getElementById("input");

var container = document.querySelector("[data-container]");
var item = document.querySelector("[data-item]");

const notes = new Array();

//taking value 
btnAdd.addEventListener("click", () => {
    let value = inputBox.value;

    let clone = item.content.cloneNode(true);
    let note = clone.querySelector(".note");
    let icon = clone.querySelector(".btn-delete");
    // console.log(item);
    // console.log(value);
    // console.log(note,icon);

    if(value){
        if(notes.includes(value)){
            //confirmming yes or no
            let confirm = window.confirm("Hey!you want to add same task again!");
            if(confirm){
                //array to check next time
                notes.push(value);
                //clone item
                note.textContent = `${value}`;
                note.setAttribute(`data-item`,`${notes.lastIndexOf(value)}`);
                // console.log(note);
                clone.append(note);
                icon.setAttribute(`data-target`,`${notes.lastIndexOf(value)}`);
                // console.log(icon);
                clone.append(icon);
                container.append(clone);
                inputBox.value = "";
                //to focus again
                inputBox.focus();
            }else{
               inputBox.value = "";
               inputBox.focus();
            }
        }
        else{
            //array to check next time
            notes.push(value);
            //clone item
            note.textContent = `${value}`;
            note.setAttribute(`data-item`,`${notes.lastIndexOf(value)}`);
            // console.log(note);
            clone.append(note);
            clone.append(icon);
            //adding attribute to delete
            icon.setAttribute(`data-target`,`${notes.lastIndexOf(value)}`);
            // console.log(icon);
            container.append(clone);
            inputBox.value = "";
            //to focus again
             inputBox.focus();
        }
    }else{
        alert("Please input something!");
        inputBox.focus();
    }

    var btnsDelete = container.querySelectorAll(".btn-delete");
    var items = container.querySelectorAll(".note");
    btnsDelete.forEach(btn => {
        btn.addEventListener("click", e => {
            // console.log(e);
            let target = btn.getAttribute("data-target");
           items.forEach(item => {
               let itemValue = item.getAttribute("data-item");
               if(target == itemValue){
                   //clearing item from arrays that deleted getting with its index
                   notes.splice(notes.indexOf(item.content),1);
                   item.style.display = "none";
                   btn.classList = "";
               }
           });
        });
    });
});
