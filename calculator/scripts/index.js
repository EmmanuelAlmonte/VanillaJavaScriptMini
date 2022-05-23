// DOM Objects

let calcDisplay = document.querySelector('.calc-display')
let calculatorButtons = document.querySelector('.calc-buttons')

// Previous input or total
let runningTotal = 0
// Current number shown on display
let buffer = '0'

// Start of Calculator Class

class Calculator {
  constructor (runningTotal, buffer, calcDisplay, operation = '') {
    this.runningTotal = runningTotal
    this.buffer = buffer
    this.calcDisplay = calcDisplay
    this.operation = operation
    this.clear()
  }
  static operation

  clear () {
    this.runningTotal = ''
    this.buffer = ''
    this.operation = ''
    this.calcDisplay.innerText = buffer
  }

  delete () {
    this.buffer = this.buffer.slice(0, -1)
    console.log(this.buffer)
    this.updateDisplay()
  }

  appendNumber (number) {
    this.buffer = this.buffer.toString() + number.toString()
    let intBuffer = parseInt(this.buffer)
    this.updateDisplay()
  }

  chooseOperation (operationSign) {
    if (this.buffer === '') return
    if (this.runningTotal !== '') {
      this.compute()
    }
    this.operation = operationSign
    this.runningTotal = parseInt(this.buffer)
    this.buffer = ''
    this.updateDisplay()
  }

  compute () {
    let computation
    // running total is the previous operand
    let prev = parseInt(this.runningTotal)
    // Current Operand or the buffer
    let current = parseInt(this.buffer)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '/':
        computation = prev / current
        break
      default:
        return
    }
    this.buffer = computation.toString()
    this.operation = ''
    this.runningTotal = ''
    this.updateDisplay()
  }

  updateDisplay () {
    this.calcDisplay.innerText = this.buffer ? this.buffer : '0'
    console.log(
      `Buffer: ${this.buffer}\n Total: ${this.runningTotal}\n Operation ${this.operation}`
    )
  }
}

// End of Calculator Class

// Instance of Calculator Class

const calculator = new Calculator(runningTotal, buffer, calcDisplay)

// End of calculator instance

calculatorButtons.addEventListener('click', function ({ target }) {
  // This is only the number from the calculator, anything else will be a NaN
  let num = parseInt(target.value)
  // I'm using this to represent the operands and other functions a calculator has
  let calcInput = target.value

  // If an operand or other input do the following
  switch (calcInput) {
    case 'clear':
      calculator.clear()
      break
    case 'delete':
      calculator.delete()
      break
    case '/':
      calculator.chooseOperation(calcInput)
      break
    case '*':
      calculator.chooseOperation(calcInput)
      break
    case '-':
      calculator.chooseOperation(calcInput)
      break
    case '+':
      calculator.chooseOperation(calcInput)
      break
    case 'equals':
      calculator.compute()
      break
    default:
      calculator.appendNumber(num)
      console.log('default')
      break
  }
})
