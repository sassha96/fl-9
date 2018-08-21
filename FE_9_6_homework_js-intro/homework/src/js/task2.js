const firstSide = parseFloat(prompt('Enter length of first side:', 0));
const secondSide = parseFloat(prompt('Enter length of second side:', 0));
const angle = parseFloat(prompt('Enter angle:', 0));

let thirdSide = function (firstSide, secondSide, angle) {
    return Math.SQRT2(firstSide ** 2 + secondSide ** 2 - 2 * firstSide * secondSide * Math.cos(angle));
}

console.log(thirdSide(firstSide, secondSide, angle));