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
let secondNumber = '';
let operator = null;
let result = null;
let runningResult = null;

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

operators.forEach((op) => {
    op.addEventListener('click', (event) => {
        operator = event.target.getAttribute('id');
        console.log(operator);
        populateInputLog(event.target.textContent);
    })
})
// console.log(operators);
// console.log(numbers);

// when a number is clicked, if an operand has not been selected yet and if firstNum is null, meaning it is a new fresh calculation, start building up
// the first num (store num as a string and keep appending until a operator is hit)
// once an operator is hit, if result


numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        if(operator === null) {  // if operator has not yet been selected, meaning still acquiring first number          
            firstNumber += event.target.getAttribute('id');
        }
        else{
            secondNumber += event.target.getAttribute('id');
        }

        // if(secondNumber !== '' && operator !== null) {
        //     runningResult = operate(operator, parseInt(firstNumber), parseInt(secondNumber));
        // }

        console.log(`first num - ${firstNumber}`);
        console.log(`second num - ${secondNumber}`);
        populateInputLog(event.target.getAttribute('id'));
    })
})

const equalsButton = document.querySelector('#equals');

equalsButton.addEventListener('click', (event) => {
    let result = operate(operator, parseInt(firstNumber), parseInt(secondNumber));
    firstNumber = result;
    secondNumber = '';
    populateOutput(result);
    populateInputLog(event.target.textContent + " " + result);
})


function populateOutput(num) {
    output.textContent = num;
}

function populateInputLog(input) {
    if (input === 'x' || input === '+' || input === '-' || input === '÷'){
        inputLog.textContent += ` ${input} `;
    }
    else {
        inputLog.textContent += `${input}`;

    }
    
}

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = null;
    result = null;

    inputLog.textContent = '';
    output.textContent = '';
})


