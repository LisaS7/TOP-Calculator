const outputDisplay = document.getElementsByTagName('output').display;
const previousDisplay = document.getElementsByTagName('output').previous;
const numberButtons = document.querySelectorAll('[data-type="number"]');
const operatorButtons = document.querySelectorAll('[data-type="operator"]');
let firstNumber = null;
let secondNumber = null;
let result = null;
let operation = null;


// BUTTON EVENTS
document.getElementById('clear').addEventListener('click', clearAll);
document.getElementById('delete').addEventListener('click', deleteOne);
document.getElementById('equals').addEventListener('click', equals);
document.querySelector('[data-type="decimal"]').addEventListener('click', decimal);

numberButtons.forEach(item => {
    item.addEventListener('click', () => setDisplay(item.value));
});

operatorButtons.forEach(item => {
    item.addEventListener('click', () => setOperation(item.value));
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
    secondNumber = getDisplay();
    if (firstNumber && secondNumber) {
        previousDisplay.textContent = `${firstNumber} ${operation} ${secondNumber} =`;
        firstNumber = operate(operation, firstNumber, secondNumber);
        outputDisplay.textContent = firstNumber;
    }
    secondNumber = null;
}

function setOperation(operator) {
    if (operation) {
        secondNumber = getDisplay();
        result = operate(operation, firstNumber, secondNumber);
        outputDisplay.textContent = result;
        firstNumber = result;
    } else {
        firstNumber = getDisplay();  
    }
    
    operation = operator;
    previousDisplay.textContent = `${firstNumber} ${operation}`;
    outputDisplay.textContent = '';
}

function decimal(item) {
    if (!getDisplay().toString().includes('.')) {
        setDisplay('.');
    }
}


// CONTROL DISPLAY
function getDisplay() {
    return Number(outputDisplay.textContent);
}

function setDisplay(value) {
    outputDisplay.textContent += value;
}

function clearAll() {
    outputDisplay.textContent = '';
    previousDisplay.textContent = '';
    firstNumber = null;
    secondNumber = null;
    result = null;
    operation = null;
}

function deleteOne() {
    outputDisplay.textContent = outputDisplay.textContent.slice(0, -1);
}