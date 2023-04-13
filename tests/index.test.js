//describe the tests - one for each function
describe("Turn string into number", () => {
    const desc = "<p>Turn string into number</p>";

    describe(desc, () => {
        it("Turn string into number", () => {
            const number = 50;
            const notNumber = '1';
            const result1 = isNumber(number);
            const result2 = isNumber(notNumber);
            expect(result1).toBe(50);
            expect(result2).toBe(1);
        });
    });
});

describe("Add numbers", () => {
    const desc = "<p>Add numbers</p>";

    describe(desc, () => {
        it("Add numbers", () => {
            const firstNumber = 2;
            const secondNumber = 3;
            const result = sum(firstNumber, secondNumber);
            expect(result).toBe(5);
        });
    });
});

describe("Substract numbers", () => {
    const desc = "<p>Substract numbers</p>";

    describe(desc, () => {
        it("Substract numbers", () => {
            const firstNumber = 2;
            const secondNumber = 3;
            const result = substract(firstNumber, secondNumber);
            expect(result).toBe(-1);
        });
    });
});

describe("Multiply numbers", () => {
    const desc = "<p>Multiply numbers</p>";

    describe(desc, () => {
        it("Multiply numbers", () => {
            const firstNumber = 2;
            const secondNumber = 3;
            const result = multiply(firstNumber, secondNumber);
            expect(result).toBe(6);
        });
    });
});

describe("Divide numbers", () => {
    const desc = "<p>Divide numbers</p>";

    describe(desc, () => {
        it("Divide numbers", () => {
            const firstNumber = 8;
            const secondNumber = -2;
            const result = divide(firstNumber, secondNumber);
            expect(result).toBe(-4);
        });
    });
});

describe("Calculate sum of numbers in the array", () => {
    const desc = "<p>Calculate sum of numbers in the array</p>";

    describe(desc, () => {
        it("Calculate sum of numbers in the array", () => {
            const defaultArray = [3, 57, 9, 45, 12, 6, NaN, 54, 5, -1];
            const result = arraySum(defaultArray);
            expect(result).toBe(190);
        });
    });
});

describe("Return numbers array", () => {
    const desc = "<p>Return numbers array</p>";

    describe(desc, () => {
        it("Return numbers array", () => {
            const array = [1, 'string', NaN, 5, -1];
            const result = numbersArray(array);
            expect(result).toEqual([1, 5, -1]);
        });
    });
});

describe("Find min number in the array", () => {
    const desc = "<p>Find min number in the array</p>";

    describe(desc, () => {
        it("Find min number in the array", () => {
            const defaultArray = [3, 57, 9, 45, 12, 6, NaN, 54, 5, -1];
            const result = min(defaultArray);
            expect(result).toBe(-1);
        });
    });
});

describe("Find max number in the array", () => {
    const desc = "<p>Find max number in the array</p>";

    describe(desc, () => {
        it("Find max number in the array", () => {
            const defaultArray = [3, 57, 9, 45, 12, 6, NaN, 54, 5, -1];
            const result = max(defaultArray);
            expect(result).toBe(57);
        });
    });
});

describe("Check if object is empty", () => {
    const desc = "<p>Check if object is empty</p>";

    describe(desc, () => {
        it("Check if object is empty", () => {
            const obj = {};
            const obj1 = {a:1};
            const result = checkEmptyObject(obj);
            const result1 = checkEmptyObject(obj1);
            expect(result).toBe(true);
            expect(result1).toBe(false);
        });
    });
});

describe("Increase or decrease number", () => {
    const desc = "<p>Increase or decrease number</p>";

    describe(desc, () => {
        it("Increase or decrease number", () => {
            const increased = new Accumulator(-10);
            const decreased = new Accumulator(4);
            const result = increased.increment();
            const result1 = decreased.decrement();
            expect(result).toBe(-9);
            expect(result1).toBe(3);
        });
    });
});

describe("Increase or decrease number with going back to initial value", () => {
    const desc = "<p>Increase or decrease number with going back to initial value</p>";

    describe(desc, () => {
        it("Increase or decrease number with going back to initial value", () => {
            const increased = new CancelableAccumulator(5);
            const decreased = new CancelableAccumulator(10);
            const result = increased.increment();
            const result1 = decreased.decrement();
            increased.increment();
            expect(result).toBe(6);
            decreased.decrement();
            expect(result1).toBe(9);
            const cleared = increased.clear();
            expect(cleared).toBe(5);
            const cleared1 = decreased.clear();
            expect(cleared1).toBe(10);
        });
    });
});

describe("Return number from 80 to 255", () => {
    const desc = "<p>Return number from 80 to 255</p>";

    describe(desc, () => {
        it("Return number from 80 to 255", () => {
            const first = 274;
            const second = 99;
            const third = 245;
            const fourth = -155;
            const result1 = changeColorHue(first);
            const result2 = changeColorHue(second);
            const result3 = changeColorHue(third);
            const result4 = changeColorHue(fourth);
            expect(result1).toBe(255);
            expect(result2).toBe(80);
            expect(result3).toBe(226);
            expect(result4).toBe(136);
        });
    });
});

describe("Return rgb color", () => {
    const desc = "<p>Return rgb color</p>";

    describe(desc, () => {
        it("Return rgb color", () => {
            const first = 500;
            const second = -100;
            const third = 0;
            const fourth = -204;
            const result1 = getColor(first);
            const result2 = getColor(second);
            const result3 = getColor(third);
            const result4 = getColor(fourth);
            expect(result1).toBe('rgb(0, 255, 0)');
            expect(result2).toBe('rgb(81, 0, 0)');
            expect(result3).toBe('black');
            expect(result4).toBe('rgb(185, 0, 0)');
        });
    });
});