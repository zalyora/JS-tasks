const FIRST_NUMBER = prompt('Enter a number:');
const SECOND_NUMBER = prompt('Enter a number:');
const message = 'I need numbers to calculate';
const message2 = 'Error: impossible to divide!';
const sumMessage = 'The sum is ';
const substrMessage = 'The substraction result is ';
const multMessage = 'The multiplication result is ';
const divisMessage = 'The division is ';

if (!FIRST_NUMBER || !SECOND_NUMBER) {
    alert(message);
} else if (SECOND_NUMBER == 0 && FIRST_NUMBER > SECOND_NUMBER) {
    alert(`${sumMessage}${sum(FIRST_NUMBER, SECOND_NUMBER)}`);
    alert(`${substrMessage}${substract(FIRST_NUMBER, SECOND_NUMBER)}`);
    alert(`${multMessage}${multiply(FIRST_NUMBER, SECOND_NUMBER)}`);
    alert(message2);
} else if (SECOND_NUMBER == 0 && FIRST_NUMBER < SECOND_NUMBER) {
    let CONFIRMATION = confirm('Are you sure you want to continue?');
    if (!CONFIRMATION) {
        alert(`${sumMessage}${sum(FIRST_NUMBER, SECOND_NUMBER)}`);
        alert(`${multMessage}${multiply(FIRST_NUMBER, SECOND_NUMBER)}`);
        alert(message2);
    } else {
        alert(`${sumMessage}${sum(FIRST_NUMBER, SECOND_NUMBER)}`);
        alert(`${substrMessage}${substract(FIRST_NUMBER, SECOND_NUMBER)}`);
        alert(`${multMessage}${multiply(FIRST_NUMBER, SECOND_NUMBER)}`);
        alert(message2);
    }
} else if (FIRST_NUMBER < SECOND_NUMBER) {
    let CONFIRMATION = confirm('Are you sure you want to continue?');
    if (!CONFIRMATION) {
        alert(`${sumMessage}${sum(FIRST_NUMBER, SECOND_NUMBER)}`);
        alert(`${multMessage}${multiply(FIRST_NUMBER, SECOND_NUMBER)}`);
        alert(`${divisMessage}${divide(FIRST_NUMBER, SECOND_NUMBER)}`);
    } else {
        alert(`${sumMessage}${sum(FIRST_NUMBER, SECOND_NUMBER)}`);
        alert(`${substrMessage}${substract(FIRST_NUMBER, SECOND_NUMBER)}`);
        alert(`${multMessage}${multiply(FIRST_NUMBER, SECOND_NUMBER)}`);
        alert(`${divisMessage}${divide(FIRST_NUMBER, SECOND_NUMBER)}`);
    }
} else {
    alert(`${sumMessage}${sum(FIRST_NUMBER, SECOND_NUMBER)}`);
    alert(`${substrMessage}${substract(FIRST_NUMBER, SECOND_NUMBER)}`);
    alert(`${multMessage}${multiply(FIRST_NUMBER, SECOND_NUMBER)}`);
    alert(`${divisMessage}${divide(FIRST_NUMBER, SECOND_NUMBER)}`);
}

function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return Number(a) + Number(b);
    }
}

function substract(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        return Number(a) - Number(b);
    }
}

function multiply(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    } else {
        return Number(a) * Number(b);
    }
}

function divide(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {return a / b;
    } else {
        return Number(a) / Number(b);
    }
}