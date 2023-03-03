const array = [3, 57, 9, 45, '293', 12, 6, NaN, 54, 5];

let sum = 0;
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number' || isNaN(array[i])) {
        continue;
    } else {
        sum = sum + array[i];
    }
    
}
console.log(sum);

let maxNumber = array[0];
let minNumber = array[0];
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number' || isNaN(array[i])) {
        continue;
    } else if (array[i] > maxNumber) {
        maxNumber = array[i];
    } else if (array[i] < minNumber) {
        minNumber = array[i];
    }
}
console.log(minNumber, maxNumber);


let str = '#';
for (let i = 0; i < 5; i++) {
    console.log(str.repeat(i));
}