let displayValue = document.querySelector('#display');
const numButtons = document.querySelectorAll('.btn-operand');
const operateButtons = document.querySelectorAll('.btn-operate');
const clearButton = document.querySelector('#clear');
const equalButton = document.querySelector('#equal');
const pointButton = document.querySelector('#dot');
const deleteButton = document.querySelector('#delete');


let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let screenReset = false;

numButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operateButtons.forEach((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
);

equalButton.addEventListener('click', () => equal());

clearButton.addEventListener('click', () => clear());

pointButton.addEventListener('click', () => decimal());

deleteButton.addEventListener('click', () => deleteNum());

function add(a, b) {
    return Number(a) + Number(b);
};

function subtract(a,b ) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(firstOperand, operator, secondOperand) {
    if (operator === '+') {
       return add(firstOperand, secondOperand);
    } else if (operator === '-') {
        return subtract(firstOperand, secondOperand);
    } else if (operator === '*') {
        return multiply(firstOperand, secondOperand);
    } else if (operator === '/') {
        return divide(firstOperand, secondOperand);
    };
};

function appendNumber(number) {
    if (displayValue.textContent === "0" || screenReset) resetScreen();
    displayValue.textContent += number;
  }

  function resetScreen() {
    displayValue.textContent = "";
    screenReset = false;
  }

  function setOperator(operator) {
    if (currentOperator !== null) equal();  {
        firstOperand = displayValue.textContent;
        currentOperator = operator;
        screenReset = true;
    }
  };

  function equal() {
    if (!firstOperand) {
        displayValue.textContent = 'ERROR';
    };
    secondOperand = displayValue.textContent;
    displayValue.textContent = roundNum(operate(firstOperand, currentOperator, secondOperand));
    screenReset = true;
  };

  function clear() {
    displayValue.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
    
  };
  function decimal() {
    if (displayValue.textContent.includes('.')) return;
    displayValue.textContent += '.';
    };

    function roundNum(number) {
       return Math.round(number * 100) / 100;
    }

    function deleteNum() {
        displayValue.textContent = displayValue.textContent.slice(0, -1);
    };