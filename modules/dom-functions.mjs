const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Changes the Background Color of any domElement given.
const changeColor = (domElement) => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  
  let randomColor = `rgb(${r}, ${g}, ${b})`

  domElement.style.background = `${randomColor}`
  return randomColor
}

// Changes Background Color Using hexidecimal numbers.
const changeHexColor = (domElement) => {
  // This is how I was doing getting the hex colors, but I refactored the code to use a for loop below.
  // const hexNum1 = hex[Math.floor(Math.random() * 16)]
  // const hexNum2 = hex[Math.floor(Math.random() * 16)]
  // const hexNum3 = hex[Math.floor(Math.random() * 16)]
  
  // Stores the random hex value
  let randomColor =`#`;

  for(let x = 0; x < 6; x++){
  const hexNum = hex[Math.floor(Math.random() * 16)]
  randomColor+= `${hexNum}`
  }
  domElement.style.background = `${randomColor}`
  return randomColor
}


const resources = {
  changeColor,
  changeHexColor
}

export default resources;