
const button = document.querySelector("#enter");
const input = document.querySelector("#userinput");
const ul = document.querySelector("ul");
const dlt = document.querySelector("#kaldir");

const inputLength = () => input.value.length;
const createListElement = () => {let li = document.createElement("li"); li.appendChild(document.createTextNode(input.value)); ul.appendChild(li); input.value = ``;}
const addListAfterClick = () => input.value.length > 0 ? createListElement():``;
const addListAfterKeypress = () => input.value.length > 0 && event.code === "Enter" ? createListElement() : ``;
const deleteListElement = () => ul.removeChild(ul.lastChild) ;

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
dlt.addEventListener("click",deleteListElement);










