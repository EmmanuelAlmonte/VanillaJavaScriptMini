// import all modules needed.
import resources from "../modules/dom-functions.mjs";


// In order to add more and random colors I will use the changeColor function.
const changeColor = resources.changeColor


// access the document node for button using ID "btn"
const btn = document.getElementById("btn");

// Use Dom API to access the body property using the query selector.
const body = document.querySelector("body");
let spanColorText = document.querySelector("span")

// Added and event listener that changes the Color each time the button is clicked.
btn.addEventListener("click", () => { 
  let nameOfColor = changeColor(body);
  spanColorText.innerText = `${nameOfColor}`
}) 

// The array below was in the original starter for this project but I wanted more colors.
// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
