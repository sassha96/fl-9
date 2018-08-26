const isSmaller = (a, b) => a < b; //eslint error in case reusing isBigger function --> const isSmaller = (a, b) => isBigger(a, b);

//Check, eslint error otherwise
let a = 5, b = 4;
isSmaller(a, b);