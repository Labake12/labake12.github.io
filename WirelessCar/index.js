// function declaration

function checkDriverAge () {
    var age = prompt('What is your age?')
    if (Number(age) < 18) {
        console.log ('Sorry, you are too young to drive this car. Powering off');
    }
    else if (Number(age) > 18) {
        console.log ('Powering On. Enjoy the ride!');
    }
    else if (Number(age) === 18) {
        console.log('Congratulations on your first year of driving. Enjoy your ride!');
    }
}
checkDriverAge()
//  function expression
var checkDriverAge = function(){
    var age = prompt('What is your age?')
    if (Number(age) < 18) {
        console.log ('Sorry, you are too young to drive this car. Powering off');
    }
    else if (Number(age) > 18) {
        console.log ('Powering On. Enjoy the ride!');
    }
    else if (Number(age) === 18) {
        console.log('Congratulations on your first year of driving. Enjoy your ride!');
    }
}
checkDriverAge()