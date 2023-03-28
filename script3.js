function Accumulator(number) {
    this.value = number;
    this.increment = function() {
        return ++this.value;
    } 
    this.decrement = function() {
        return --this.value;
    } 
}

// Accumulator.prototype.increment = function(number) {
//     return ++number;
// };

// Accumulator.prototype.decrement = function(number) {
//     return --number;
// };

function CancelableAccumulator(number) {
    Accumulator.call(this, number);
    this.clear = function() {
        this.value = number;
    return this.value;
    };
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

// CancelableAccumulator.prototype.clear = function(number) {
//     this.value = number;
//     return this.value;
// };

const increased = new Accumulator(-10);
const acc = new CancelableAccumulator(25)
console.log(increased.increment());
console.log(increased.increment());
console.log(increased.decrement());
console.log(increased.increment());
console.log(increased.increment());
console.log(acc.increment());
console.log(acc.increment());
console.log(acc.increment());
console.log(acc.decrement());
console.log(acc.increment());
console.log(acc.increment());
console.log(acc.clear());
console.log(acc.increment());