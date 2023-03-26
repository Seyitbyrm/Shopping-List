
var button = document.querySelector("#enter");
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul");
var dlt = document.querySelector("#kaldir");

let inputLength = () => input.value.length;
let createListElement = () => {var li = document.createElement("li"); li.appendChild(document.createTextNode(input.value)); ul.appendChild(li); input.value = ``;}
let addListAfterClick = () => input.value.length > 0 ? createListElement():``;
let addListAfterKeypress = () => input.value.length > 0 && event.code === "Enter" ? createListElement() : ``;
let deleteListElement = () => ul.removeChild(ul.lastChild) ;

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
dlt.addEventListener("click",deleteListElement);










