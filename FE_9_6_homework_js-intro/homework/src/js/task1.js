let moneyAmount = parseFloat(prompt('Enter amount of money:', 0));
if (moneyAmount > 0) {
    let discount = parseFloat(prompt('Enter the discount:'), 0);
    if (discount > 0) {
        let savedMoney = moneyAmount * (discount / 100);
        let discountedPrice = moneyAmount - savedMoney;
        console.log(`Price without discount: ${moneyAmount}`);
        console.log(`Discount: ${discount}%`);

        if (Number.isInteger(discountedPrice) !== true) {
            discountedPrice = discountedPrice.toFixed(2);
            console.log(`Price with discount: ${discountedPrice}`);
        } else {
            console.log(`Price with discount: ${discountedPrice}`);
        }
        if (Number.isInteger(savedMoney) !== true) {
            savedMoney = savedMoney.toFixed(2);
            console.log(`Saved: ${savedMoney}`);
        } else {
            console.log(`Saved: ${savedMoney}`);
        }
    } else {
        console.log('Invalid data');
    }
} else {
    console.log('Invalid data');
}