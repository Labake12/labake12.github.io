var operator = prompt('enter operator (either +, -, * or /):');
const firstNumber = prompt('enter first number:');
const secondNumber = prompt('enter second number');
let result;

if (operator === '+') {
    result = firstNumber + secondNumber;
}
else if (operator === '-') {
    result = firstNumber - secondNumber;
}
else if (operator === '*') {
    result = firstNumber * secondNumber;
}
else if (operator === '/'){
    result = firstNumber / secondNumber;
}
else {
    alert('invalid input')
}
console.log('Result is ' + result);
