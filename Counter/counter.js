// Create Bindings for all the values that need to be accessed

let counterVisual = document.querySelector("#value");


let decreaseBtn = document.getElementsByClassName("decrease")[0];
let resetBtn = document.getElementsByClassName("reset")[0];
let increaseBtn = document.getElementsByClassName("increase")[0];

// Holds the counter value
let counterValue = 0;

decreaseBtn.addEventListener('click', () => {
  counterValue -= 1
  counterVisual.innerText = `${counterValue}`
  if (counterValue < 0) {counterVisual.style.color = "red"}
})

resetBtn.addEventListener('click', () => {
  counterValue = 0
  counterVisual.innerText = `${counterValue}`
  counterVisual.style.color = "#102A42"
})

increaseBtn.addEventListener('click', () => {
  counterValue += 1
  counterVisual.innerText = `${counterValue}`
  if (counterValue >= 0) {counterVisual.style.color = "green"}
})