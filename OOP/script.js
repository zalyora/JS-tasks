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

async function defer(func, s) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(func), s)
    });
    let result = await promise;
    RESULT.innerText = result;
}