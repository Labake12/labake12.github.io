var operator = prompt('enter operator (either +, -, * or /):');
const firstNumber = prompt('enter first number:');
const secondNumber = prompt('enter second number');

if (operator === '+') {
    result = firstNumber + secondNumber;
}
else if (operator === '-') {
    result = firstNumber - secondNumber;
}
else if (operator === '*') {
    result = firstNumber * secondNumber;
}
else {
    result = firstNumber / secondNumber;
}
console.log('Result is ' + result);