"use strict";
console.log("hello, world!");
let name = "John";
let surname = "appleseed";
console.log(name);
console.log(surname);

const pi = 3.14;

console.log(pi);
console.log((3 + 2) - 76 * (1 + 1));
console.log((4 + 6 + 9) / 77);
let a = 10;
console.log(a);
a = 5;
console.log(a);
console.log(5 % 2);
alert('3' + 4);


function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
  const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}