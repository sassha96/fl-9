const reverseNumber = (num) => {
    let numStr = num.toString();
    let reversedNum = [];
    let zeroCheck = false;
    for (let i = numStr.length - 1; i >= 0; i--) {
        if (numStr[i] === '-') {
            reversedNum.unshift('-');
            continue;
        }
        if (zeroCheck === false && numStr[i] === '0') {
            continue;
        }
        zeroCheck = true;
        reversedNum.push(numStr[i]);
    }
    return parseInt(reversedNum.join(''));
}

//Check, eslint error otherwise
const check = -100100;
reverseNumber(check);