const defaultArray = [3, 57, 9, 45, '293', 12, 6, NaN, 54, 5, -1];
const BRANCHES_NUMBER = document.querySelector('#branches_number');
const DRAW = document.querySelector('.draw-btn');
const FIR_TREE = document.querySelector('.fir_tree');
const ARRAY = document.querySelector('#array');
const ARR_CALC = document.querySelector('.arr_calc');
const ARR_RESULT = document.querySelector('.arr_result');

function ToArray() {
    this.inputArray = [];
}

ToArray.prototype.addItem = function (item) {
    this.inputArray.push(item);
}

ToArray.prototype.printItems = function () {
    ARR_RESULT.innerHTML = '';
    const li = document.createElement('li');
    li.style.listStyle = 'none';
    for (let i = 0; i < this.inputArray.length; i++) {
        createSpan(li, this.inputArray[i], 0);
        ARR_RESULT.appendChild(li);
    }
}

const toArray = new ToArray();
ARR_CALC.addEventListener('click', () => {
    ARR_RESULT.innerHTML = '';
    let inputArray = Object.values(toArray);
    if (inputArray[0].length !== 0) {
        arraySum(...inputArray);
        minMax(...inputArray);
        printArray(...inputArray, true);
        clearInput(ARRAY);
    } else {
        arraySum(defaultArray);
        minMax(defaultArray);
        printArray(defaultArray, false);
        clearInput(ARRAY);
    }
});

ARRAY.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        let item;
        if (isNaN(Number(ARRAY.value))) {
            item = ARRAY.value;
        } else {
            item = Number(ARRAY.value);
        }
        toArray.addItem(item);
        toArray.printItems();
        clearInput(ARRAY);
    }
});

function arraySum(arr) {
    ARR_RESULT.innerHTML = '';
    let sum = 0;
    const message = 'The sum of numbers in the array is ';
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            continue;
        } else {
            sum = sum + arr[i];
        }
    }
    const li = document.createElement('li');
    li.innerText = `${message}${sum}.`;
    styleListItem(li);
    ARR_RESULT.appendChild(li);
}

function minMax(arr) {
    let checkedArray = numbersArray(arr);
    let minMessage = 'The min number is ';
    let maxMessage = 'The max number is ';
    let maxNumber = checkedArray[0];
    let minNumber = checkedArray[0];
    for (let i = 0; i < checkedArray.length; i++) {
        if (checkedArray[i] < minNumber) {
            minNumber = checkedArray[i];
        }
    }
    for (let i = 0; i < checkedArray.length; i++) {
        if (checkedArray[i] > maxNumber) {
            maxNumber = checkedArray[i];
        }
    }
    const li = document.createElement('li');
    createSpan(li, `${minMessage}${minNumber}.`, minNumber);
    createSpan(li, ` ${maxMessage}${maxNumber}.`, maxNumber);
    styleListItem(li);
    ARR_RESULT.appendChild(li);
}

function getColor(num) {
    if (num > 0) {
        return 'green';
    } else if(num < 0) {
        return 'red';
    } else {
        return 'black';
    }
}

function styleListItem(elem) {
    elem.style.listStyle = 'none';
    elem.style.fontSize ='36px';
    elem.style.fontWeight = 'bold';
}

function createSpan(elem, text, number) {
    const span = document.createElement('span');
    span.textContent = text;
    span.style.display = 'inline-block';
    span.style.marginRight = '10px';
    span.style.color = getColor(number);
    span.style.opacity = setOpacity(number);
    elem.appendChild(span);
}

function printArray(arr, bool) {
    const li = document.createElement('li');
    li.style.listStyle = 'none';
    if (bool) {
        li.innerText = 'Your array: ';
    } else {
        li.innerText = 'Default array: ';
    }
    for (let i = 0; i < arr.length; i++) {
        createSpan(li, arr[i], 0);
    }
    ARR_RESULT.insertAdjacentElement("afterbegin", li);
}

DRAW.addEventListener('click', () => {
    draw();
    clearInput(BRANCHES_NUMBER);
});

function draw() {
    const str = '#';
    FIR_TREE.innerHTML = '';
    let number = BRANCHES_NUMBER.value;
    for (let i = 0; i < number; i++) {
        let string = str.repeat(i + 1);
        const li = document.createElement('li');
        li.innerText = string;
        styleListItem(li);
        li.style.color = 'green';
        li.style.textAlign = 'center';
        FIR_TREE.appendChild(li);
    }
}

function setOpacity(num) {
    num = Math.abs(num);
    switch (true) {
        case num > 80 && num <= 100:
            num = 0.9;
            break;
        case num > 60 && num <= 80:
            num = 0.8;
            break;
        case num > 40 && num <= 60:
            num = 0.7;
            break;
        case num > 20 && num <= 40:
            num = 0.6;
            break;
        case num > 0 && num <= 20:
            num = 0.5;
            break;
        default:
            num = 1;
            break;
    }
    return num;
}

function numbersArray(array) {
    let checkedArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number' || isNaN(array[i])) {
            continue;
        } else {
            checkedArray.push(array[i]);
        }
    }
    return checkedArray;
}

function clearInput(input) {
    input.value = '';
}