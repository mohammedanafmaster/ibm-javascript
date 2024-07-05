let number1, number2, addition, subtraction, multiplication, division, showResult;

function performOperation() {
    number1 = parseInt(document.getElementById("input1").value);
    number2 = parseInt(document.getElementById("input2").value);

    if (!isNaN(number1) && !isNaN(number2)) {
        multiplication = multiply(number1, number2);

        // Practice task
        addition = add(number1, number2);
        subtraction = subtract(number1, number2);
        division = divide(number1, number2);

        displayResult(result);
    } else {
        displayResult("Please enter valid numbers.")
    }
}

function multiply(a, b) {
    debugger;

    return a * b;
}

// Practice task
function add(a, b) {
    debugger;

    return a + b;
}

function subtract(a, b) {
    debugger;

    return a - b;
}

function divide(a, b) {
    debugger;

    return a / b;
}

function displayResult(result) {
    showResult = document.getElementById("result");
    showResult.innerHTML = `<h2>The results are:</h2>
    <p>Addition: ${addition}</p>
    <p>Subtraction: ${subtraction}</p>
    <p>Multiplication: ${multiplication}</p>
    <p>Division: ${division}</p>`;
}