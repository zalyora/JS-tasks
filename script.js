const FIRST_NUMBER = prompt('Enter a number:');
const SECOND_NUMBER = prompt('Enter a number:');
const sum = parseInt(FIRST_NUMBER) + parseInt(SECOND_NUMBER);
const substract = parseInt(FIRST_NUMBER) - parseInt(SECOND_NUMBER);
const multiply = parseInt(FIRST_NUMBER) * parseInt(SECOND_NUMBER);
const divide = parseInt(FIRST_NUMBER) / parseInt(SECOND_NUMBER);

if (!FIRST_NUMBER || !SECOND_NUMBER) {
    alert('Error: you need to enter both numbers')
} else if (SECOND_NUMBER == 0 && FIRST_NUMBER > SECOND_NUMBER) {
    alert(`The sum is ${sum}`);
    alert(`The substraction result is ${substract}`);
    alert(`The multiplication result is ${multiply}`);
    alert('Error: impossible to divide!');
} else if (SECOND_NUMBER == 0 && FIRST_NUMBER < SECOND_NUMBER) {
    let CONFIRMATION = confirm('Are you sure you want to continue?');
    if (!CONFIRMATION) {
        alert(`The sum is ${sum}`);
        alert(`The multiplication result is ${multiply}`);
        alert('Error: impossible to divide!');
    } else {
        alert(`The sum is ${sum}`);
        alert(`The substraction result is ${substract}`);
        alert(`The multiplication result is ${multiply}`);
        alert('Error: impossible to divide!');
    }
} else if (FIRST_NUMBER < SECOND_NUMBER) {
    let CONFIRMATION = confirm('Are you sure you want to continue?');
    if (!CONFIRMATION) {
        alert(`The sum is ${sum}`);
        alert(`The multiplication result is ${multiply}`);
        alert(`The division is ${divide}`);
    } else {
        alert(`The sum is ${sum}`);
        alert(`The substraction result is ${substract}`);
        alert(`The multiplication result is ${multiply}`);
        alert(`The division is ${divide}`);
    }
} else {
    alert(`The sum is ${sum}`);
    alert(`The substraction result is ${substract}`);
    alert(`The multiplication result is ${multiply}`);
    alert(`The division is ${divide}`);
}