const getMin = (...args) => Math.min(...args);

//Check, eslint error otherwise
let a = 4;
let b = -5;
getMin(a, b, 0);