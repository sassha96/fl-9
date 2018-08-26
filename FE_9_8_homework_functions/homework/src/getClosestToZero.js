const getClosestToZero = (...numbers) => {
    let closestInt = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (Math.abs(numbers[i]) < Math.abs(closestInt)) {
            closestInt = numbers[i];
        }
    }
    return closestInt;
}

//Check, eslint error otherwise
const FIVE = 5, THREE = 3, EIGHT = 8, sFOUR = -4, sTWO = -2;
getClosestToZero(FIVE, THREE, EIGHT, sFOUR, sTWO);