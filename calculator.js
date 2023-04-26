var display = document.querySelector("#expression");
var result = document.querySelector("p");

function calculatorOne () {

    var button = document.querySelector("button");
    button.addEventListener("click", calculate());
    
    function calculate() {
    
        let expression = display.value;
    
        //If no expression provided show 0
        if (!expression) {
            result.textContent = 0;
        }
    
        //If no operations provided show last number
        if (!expression.match(/[+ && - && * && /]/)) {
            result.textContent = expression.slice(-1);
        }
    
        //Creates new function that executes the input expression
        let content = new Function("return " + expression)();
        result.textContent = content;
    }
}

var operand1 = '';
var operand2 = '';
var operator = '';
let expression = [];
result = null;

function appendDigit(digit) {
  if (operator === '') {
    operand1 += digit;
    expression.push(operand1);
    display.value = expression.toString();
  } else {
    operand2 += digit;
    expression.push(operand2);
    display.value = expression.toString();
  }
}

function compute(op) {
  if (operand2 !== '') {
    var num1 = parseFloat(operand1);
    var num2 = parseFloat(operand2);
    switch (operator) {
      case '+':
        result = num1 + num2;
        expression.push(operator);
        display.value = expression.toString();
        break;
      case '-':
        result = num1 - num2;
        expression.push(operator);
        display.value = expression.toString();
        break;
      case '*':
        result = num1 * num2;
        expression.push(operator);
        display.value = expression.toString();
        break;
      case '/':
        result = num1 / num2;
        expression.push(operator);
        display.value = expression.toString();
        break;
    }
    operand1 = result.toString();
    operand2 = '';
    operator = '';
    result.textContent = operand1;
  }
  if (op !== '=') {
    operator = op;
  }
}

function clearDisplay() {
  operand1 = '';
  operand2 = '';
  operator = '';
  result = null;
  expression = [];
  display.value = '';
}

function deleteDigit() {
  if (operator === '') {
    operand1 = operand1.slice(0, -1);
    display.value = operand1;
  } else {
    operand2 = operand2.slice(0, -1);
    display.value = operand2;
  }
}