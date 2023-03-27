function calculate(fn) {

    //If no expression provided show 0
    if (!expression) {
        return 0;
    }

    //If no operations provided show last number
    if (!expression.match(/[+ && - && * && /]/)) {
        return expression.slice(-1);
    }

    //Creates new function that executes the input expression
    return new Function("return " + fn)();
}
  
let expression = "5/5*7+1.5*2";

console.log(calculate(expression)); // Output: 10