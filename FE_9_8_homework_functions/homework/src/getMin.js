const getMin = (...args) => {
    let numbers = [...args];
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    } return min;
}

//Check, eslint error otherwise
let a = 4, b = -4, c = 2;
getMin(a, b, c);

// Other soluion in 1 stoke:
// const getMin = (...args) => Math.min(...args);