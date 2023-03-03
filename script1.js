const array = [3, 57, 9, 45, '293', 12, 6, NaN, 54, 5];
const str = '#';

function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            continue;
        } else {
            sum = sum + arr[i];
        }
    }
    console.log(sum);
}

function minMax(array) {
    let checkedArray = numbersArray(array);
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
console.log(minNumber, maxNumber);
}

function draw(number) {
    for (let i = 0; i < number; i++) {
        console.log(str.repeat(i));
    }
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