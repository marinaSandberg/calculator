var display = document.querySelector("#expression");
var output = document.querySelector("p");

function calculatorOne () {

    var button = document.querySelector("button");
    button.addEventListener("click", calculate());
    
    function calculate() {
    
        let expression = display.value;
    
        //If no expression provided show 0
        if (!expression) {
            output.textContent = 0;
        }
    
        //If no operations provided show last number
        if (!expression.match(/[+ && - && * && /]/)) {
            output.textContent = expression.slice(-1);
        }
    
        //Creates new function that executes the input expression
        let content = new Function("return " + expression)();
        output.textContent = content;
    }
}

var operand1 = '';
var operand2 = '';
var operator = '';
result = null;

// Function when clicking on numbers
function appendDigit(digit) {
  if (operator === '') {
    operand1 += digit;
    display.value = operand1;
  } else {
    operand2 += digit;
    display.value = operand1 + operator + operand2;
  }
}

// Function when clicking on operators
function compute(operation) {
  if (operand2 !== '') {
    var num1 = parseFloat(operand1);
    var num2 = parseFloat(operand2);
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
  }
  if (operation !== '=') {
    operator = operation;
    display.value = operand1 + operator;
  }
  if (operation === '=') {
    output.textContent = result;
  }
}

function clearDisplay() {
  operand1 = '';
  operand2 = '';
  operator = '';
  result = null;
  output.textContent = '-';
  display.value = '';
}

function deleteDigit() {
  if (operator === '') {
    operand1 = operand1.slice(0, -1);
    display.value = operand1;
  } else if (operand2 === '') {
    operator = '';
    display.value = operand1 + operator;
  }
  else {
    operand2 = operand2.slice(0, -1);
    display.value = operand1 + operator + operand2;
  }
}