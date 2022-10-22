// use strict is used to execute code in strict mode, for example you cannnot declare variable like x = 10,
// instead we use let x = 10
"use strict";

// get id of button and save into vairable
const btnColorChanger = document.getElementById("btn");

// add click event on button variable
btnColorChanger.addEventListener("click", backgroundColorChanger);

// main function that has logic
function backgroundColorChanger() {
  let color = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Orange",
    "White",
    "Black",
    "Brown",
    "Pink",
  ];

  // store random colors value
  let randomColor = color[Math.floor(Math.random() * color.length)];
  document.body.style.backgroundColor = randomColor;
  document.getElementById("colorName").innerHTML = randomColor;
}
