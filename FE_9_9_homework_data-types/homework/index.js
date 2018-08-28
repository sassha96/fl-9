const findType = someVariable => typeof someVariable;

const forEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
};

const map = (arr, func) => {
    let newArr = [];
    forEach(arr, el => newArr.push(func(el)));
    return newArr;
}

const filter = (arr, func) => {
    let newArr = [];
    forEach(arr, el => {
        if (func(el)) {
            newArr.push(el);
        }
    })
    return newArr;
}

const getAdultAppleLovers = data => {
    return map(filter(data, el => el.age > 18 && el.favoriteFruit === 'apple'), el => el.name);
}

const keys = obj => {
    let newArr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArr.push(key);
        }
    }
    return newArr;
};

const values = obj => {
    let newArr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArr.push(obj[key]);
        }
    }
    return newArr;
};

const showFormattedDate = date => {
    return `It is ${date.getDate()} of ${date.toLocaleString('en-US',
        { month: 'short' })}, ${date.getFullYear()}`;
}