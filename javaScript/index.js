var operator = prompt ('enter operator (either +, -, *, or /)');
const firstNumber = prompt('enter first number');
const secondNumber = prompt('enter second number');

function calc(firstNumber, secondNumber){
    if (operator === '+'){
        return firstNumber + secondNumber;
    }
    else if (operator === '-'){
        return firstNumber - secondNumber;
    } 
    else if (operator === '*'){
        return firstNumber * secondNumber;
    } 
    else if (operator === '/'){
        return firstNumber / secondNumber;
    } 
    else {
        alert('inavlid input')
    } 
}
console.log(calc(6, 10));