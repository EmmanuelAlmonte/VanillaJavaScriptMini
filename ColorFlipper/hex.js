// import resources from dom-functions.js
import resources from "../modules/dom-functions.mjs";
const changeHexColor = resources.changeHexColor;

const mainBtn = document.getElementById("btn");
const body = document.querySelector("body");
// this is the text color displayed above the button
let hexValue = document.querySelector("span")

// If button is clicked the body background color changes and
// the Hex value of the background will be added to the span
mainBtn.addEventListener('click', () => {
  let randomHexColor = changeHexColor(body);
  hexValue.innerText = `${randomHexColor}` 
})



