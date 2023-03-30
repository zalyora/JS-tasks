const FIRST_NUMBER = document.getElementById('first_number');
const SECOND_NUMBER = document.getElementById('second_number');
const CALCULATE = document.querySelector('.calc');
const NUM_RESULT = document.querySelector('.num_result');
const message = 'I need numbers to calculate';
const message2 = 'Error: impossible to divide!';
const confirmMessage = 'Are you sure you want to continue?';
const sumMessage = 'The sum is ';
const substrMessage = 'The substraction result is ';
const multMessage = 'The multiplication result is ';
const divisMessage = 'The division result is ';

CALCULATE.addEventListener('click', () => {
    NUM_RESULT.innerHTML = '';
    initCalc();
    clearInputs();
});

function clearInputs() {
    FIRST_NUMBER.value = '';
    SECOND_NUMBER.value = '';
}

function initCalc() {
    let first = FIRST_NUMBER.value;
    let second = SECOND_NUMBER.value;
    let sumResult = `<span>${sumMessage}</span><span class="num">${sum(first, second)}.</span>`;
    let substrResult = `<span>${substrMessage}</span><span class="num">${substract(first, second)}.</span>`;
    let multResult = `<span>${multMessage}</span><span class="num">${multiply(first, second)}.</span>`;
    let divisResult = `<span>${divisMessage}</span><span class="num">${divide(first, second)}.</span>`;
    let listItems = [];
    if (!first || !second) {
        alert(message);
    } else if ((second == 0 && first > second) || (second == 0 && first == second)) {
        listItems.push(sumResult, substrResult, multResult, message2);
    } else if (second == 0 && first < second) {
        let CONFIRMATION = confirm(confirmMessage);
        if (!CONFIRMATION) {
            listItems.push(sumResult, multResult, message2);
        } else {
            listItems.push(sumResult, substrResult, multResult, message2);
        }
    } else if (first < second) {
        let CONFIRMATION = confirm(confirmMessage);
        if (!CONFIRMATION) {
            listItems.push(sumResult, multResult, message2);
        } else {
            listItems.push(sumResult, substrResult, multResult, divisResult);
        }
    } else {
        listItems.push(sumResult, substrResult, multResult, divisResult);
    }
    createListItems();
    
    function createListItems() {
        for (let i = 0; i < listItems.length; i++) {
            const li = document.createElement('li');
            li.style.listStyle = 'none';
            li.style.fontSize ='36px';
            li.style.fontWeight = 'bold';
            if (listItems[i] == message2) {
                li.innerHTML = `<span>${listItems[i]}</span><span></span>`;
            } else {
                li.innerHTML = listItems[i];
            }
            let elem = li.children[1];
            let color = parseFloat(elem.innerHTML);
            if (color > 0) {
                li.style.color = 'green';
            } else {
                li.style.color = 'red';
            }
            NUM_RESULT.appendChild(li);
        }
    }
}


function isNumber(x) {
    if (typeof x !== 'number') {
        return Number(x);
    }
    return x;
}

function sum(a, b) {
    a = isNumber(a);
    b = isNumber(b);
    return a + b;
}

function substract(a, b) {
    a = isNumber(a);
    b = isNumber(b);
    return a - b;
}

function multiply(a, b) {
    a = isNumber(a);
    b = isNumber(b);
    return a * b;
}

function divide(a, b) {
    a = isNumber(a);
    b = isNumber(b);
    return a / b;
}