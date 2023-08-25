const defaultResult = 0;
let currentResult = defaultResult;

// function add(num1, num2) {
//   const result = num1 + num2;
//   alert(`The result is ${result}`);
// }
function add() {
  //Type casting using parseInt function
  // currentResult = currentResult + parseInt(userInput.value);
  // Another way of casting (Converting string ino a number) a value is to put + operator right before the value
  currentResult = currentResult + +userInput.value;
  outputResult(currentResult, '');
}

//.toString() converts into a string

// currentResult = add(5, 61);
// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

//("event", action /*Function name without paranthesis*/ */)
//addEventListener();
addBtn.addEventListener('click', add);

alert(+5.0123);
