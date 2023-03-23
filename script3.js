function Accumulator(number) {
    this.number = number;
    this.increment = () => ++number;
    this.decrement = () => --number;
}
function CancelableAccumulator(number, increment, decrement) {
    Accumulator.call(this, number, increment, decrement);
    this.clear = function() {
        return this.number;
    };
}
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