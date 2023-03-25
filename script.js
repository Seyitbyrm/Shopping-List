
var button = document.querySelector("#enter");
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul");
var dlt = document.querySelector("#kaldir");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if(input.value.length > 0) {
        createListElement();
    } 
}

function addListAfterKeypress() {
    if(input.value.length > 0 && event.code === "Enter") {
        createListElement();
    }
}

function deleteListElement(){
    ul.removeChild(ul.lastChild);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

dlt.addEventListener("click",deleteListElement);










