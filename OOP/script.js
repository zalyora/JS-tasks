const BODY = document.querySelector('body');
const RESULT = document.createElement('p');
BODY.appendChild(RESULT);

Array.prototype.power = function (n) {
    function exponantiation(m) {
        return m ** n;
    }
    let powedArray = this.map(exponantiation);
    return powedArray;
};

const arr = [3, 56, 4, 7, 8, 34, -1, 2];

async function defer(n, s) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(arr.power(n)), s)
    });
    let result = await promise;
    RESULT.innerText = result;
}
defer(2, 5000);
defer(3, 1000);