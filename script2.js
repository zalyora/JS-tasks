function checkEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

const user = {
    name: 'Леся Українка',
    age: 152,
    sayHello() {
        const ageCount = ['рік', 'роки', 'років'];
        let message = '';
        if (this.age.toString().slice(-1) == 1) {
            message = ageCount[0];
        } else if (this.age.toString().slice(-1) == 2 || this.age.toString().slice(-1) == 3 || this.age.toString().slice(-1) == 4) {
            message = ageCount[1];
        } else {
            message = ageCount[2];
        }
        return `Привіт, я ${this.name}, мені ${this.age} ${message}`;
    }
};

const calculator = {
    firstNumber: 0,
    secondNumber: 0,
    ask() {
        this.firstNumber = Number(prompt('Enter the first number'));
        this.secondNumber = Number(prompt('Enter the second number'));
    },
    sum() {
        return this.firstNumber + this.secondNumber;
    },
    mul() {
        return this.firstNumber * this.secondNumber;
    },
};