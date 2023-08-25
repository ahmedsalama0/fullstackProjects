//alert('This works!');

const defaultResult = 0;

let currentResult = defaultResult;

//NOTE: You can span expressions that use operators across multiple lines.

currentResult = ((currentResult + 10) * 3) / 2 - 1;

//it is also supported to add a special characters in the template literal
//let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
let calculationDescription = `(${defaultResult} + 10) \n


* 3 / 2 - 1`;

//Span '' or "" strings across multiple lines
// add a whitespaces  after the concatenation operator (+) but prettier will adjust that
let errorMessage = 'An error \n' + 'occured!';
//We can write multiline strings with back tics ``
outputResult(currentResult, errorMessage);

//To preserve the white spaces add this declaration to the element
/*
white-space: pre; 
*/
//or wrap it between pre tag
