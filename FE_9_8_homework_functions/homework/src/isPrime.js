const isPrime = number => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

//Check, eslint error otherwise
let num = 97;
isPrime(num);