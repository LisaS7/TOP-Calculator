const outputDisplay = document.getElementsByTagName('output').display;
const previousDisplay = document.getElementsByTagName('output').previous;
let result = null;
let operation = null;


// BUTTON EVENTS
document.getElementById('clear').addEventListener('click', clearAll);

document.querySelectorAll('[data-type="number"]').forEach(item => {
    item.addEventListener('click', () => {setDisplay(item.value)});
});

document.querySelectorAll('[data-type="operator"]').forEach(item => {
    item.addEventListener('click', () => {
        setOperation(item.value);
        displayPrevious(result, operation);
    });
});

document.getElementById('equals').addEventListener('click', () => {
    equals();
    displayPrevious(result);
});


// MATHS FUNCTIONS
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '/':
            return divide(a, b);
        case '*':
            return multiply(a, b);
    }     
}

function equals() {
    result = operate(operation, result, getDisplay())
}

function setOperation(operator) {
    if (result) {
        equals();
    } else {
        result = getDisplay();
    }
    operation = operator;
}


// CONTROL DISPLAY
function getDisplay() {
    return Number(outputDisplay.textContent);
}

function setDisplay(value) {
    outputDisplay.textContent += value;
}

function displayPrevious(number, operation='') {
    previousDisplay.textContent = `${number} ${operation}`;
    outputDisplay.textContent = '';
}

function clearAll() {
    outputDisplay.textContent = '';
    previousDisplay.textContent = '';
    result = null;
    operation = null;
}