//write functions for testing
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

function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            continue;
        } else {
            sum = sum + arr[i];
        }
    }
    return sum;
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

function min(arr) {
    let checkedArray = numbersArray(arr);
    let minNumber = checkedArray[0];
    for (let i = 0; i < checkedArray.length; i++) {
        if (checkedArray[i] < minNumber) {
            minNumber = checkedArray[i];
        }
    }
    return minNumber;
}
function max(arr) {
    let checkedArray = numbersArray(arr);
    let maxNumber = checkedArray[0];
    for (let i = 0; i < checkedArray.length; i++) {
        if (checkedArray[i] > maxNumber) {
            maxNumber = checkedArray[i];
        }
    }
    return maxNumber;
}

function checkEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

function Accumulator(number) {
    this.value = number;
    this.increment = function() {
        return ++this.value;
    } 
    this.decrement = function() {
        return --this.value;
    } 
}

function CancelableAccumulator(number) {
    Accumulator.call(this, number);
    this.clear = function() {
        this.value = number;
    return this.value;
    }
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

function changeColorHue(num) {
    let max = 255;
    num = Math.abs(num);
    if (num > 273) {
        return 255;
    } else if (num < 100) {
        return 80;
    } else {
        for (let i = 273; i > 0; i--) {
            max = max - 1;
            if (num === i) {
                return max;
            }
        }
    }
}

function getColor(num) {
    let colorNum = 0;
    
    if (num > 0) {
        colorNum = changeColorHue(num);
        return `rgb(0, ${colorNum}, 0)`;
    } else if(num < 0) {
        colorNum = changeColorHue(num);
        return `rgb(${colorNum}, 0, 0)`;
    } else {
        return 'black';
    }
}