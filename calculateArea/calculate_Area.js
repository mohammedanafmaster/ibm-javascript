let length, width, area;

function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    area = length * width;

    document.getElementById("result").innerText = `The area of rectangle is ${area}`;
}

// Practice task
let grocery1, grocery2, grocery3, total;

const groceryTracker = () => {
    grocery1 = parseFloat(document.getElementById("grocery1").value);
    grocery2 = parseFloat(document.getElementById("grocery2").value);
    grocery3 = parseFloat(document.getElementById("grocery3").value);

    total = grocery1 + grocery2 + grocery3;

    document.getElementById("output").innerText = `The total amount is: \$${total}`
};