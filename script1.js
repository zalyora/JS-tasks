const array = ['banana', 1, 100, 3, 57, '293', 12, 6, NaN, 54];

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
    } else if (typeof minNumber !== 'number' || isNaN(minNumber) || array[i] < minNumber) {
        minNumber = array[i];
    } else if (typeof maxNumber !== 'number' || isNaN(maxNumber) || array[i] > maxNumber) {
        maxNumber = array[i];
    }
}
console.log(minNumber, maxNumber);


let str = '#';
for (let i = 0; i < 6; i++) {
    console.log(str.repeat(i));
}