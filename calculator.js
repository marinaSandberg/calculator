function calculate() {

    let expression = document.querySelector("#expression").value;
    let result = document.querySelector("p");

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