function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}


function operate(operator, x, y) {
    if(operator === 'add'){
        return add(x, y);
    }
    else if (operator == 'subtract') {
        return subtract(x, y);
    }
    else if (operator == 'multiply') {
        return multiply(x, y);
    }
    else if (operator == 'divide') {
        return divide(x, y);
    }
}

const output = document.querySelector('.output');
const inputLog = document.querySelector('.input-log');

let firstNumber = '';
let secondNumber = null;
let operator = null;
let result = null;

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
// console.log(operators);
// console.log(numbers);

// when a number is clicked, if an operand has not been selected yet and if firstNum is null, meaning it is a new fresh calculation, start building up
// the first num (store num as a string and keep appending until a operator is hit)
// once an operator is hit, if result


numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        if(firstNumber.length === 0 || operator === null) {            
            firstNumber += event.target.getAttribute('id');
            console.log(firstNumber);
        }
    })
})


function populateOutput(num) {
    output.textContent = num;
}

function populateInputLog(input) {
    if(inputLog.textContent.length === 0) {
        inputLog.textContent += `${input}`;
    }
    else {
        inputLog.textContent += ` ${input}`;

    }
    
}


