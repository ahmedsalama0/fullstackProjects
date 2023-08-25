const defaultResult = 0;
let currentResult = defaultResult;
//let logEntries;
//initializing an empty array
let logEntries = [];

// function add(num1, num2) {
//   const result = num1 + num2;
//   alert(`The result is ${result}`);
// }

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  //Type casting using parseInt function
  // currentResult = currentResult + parseInt(userInput.value);
  // Another way of casting (Converting string ino a number) a value is to put + operator right before the value
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  //console.log(logEntry.operation);
  logEntries.push(logEntry);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}
//
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

//.toString() converts into a string

// currentResult = add(5, 61);
// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

//("event", action /*Function name without paranthesis*/ */)
//addEventListener();
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
