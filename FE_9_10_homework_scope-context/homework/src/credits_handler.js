function userCard(index) {
    const ZERO = 0;
    const transferFee = 0.005;
    const options = {
        key: index,
        balance: 100,
        transactionLimit: 100,
        historyLogs: []
    }

    const methodsObject = {
        getCardOptions: function () {
            return options;
        },

        putCredits: function (amount) {
            if (amount > ZERO) {
                options.balance = options.balance + amount;
                options.historyLogs.push({
                    operationType: `Recieved credits`,
                    credits: amount,
                    operationTime: new Date().toLocaleString('en-GB')
                })
            } else {
                console.log(`You can't put on your balance amount less than zero.`);
            }
        },

        takeCredits: function (amount) {
            if (amount < options.balance && amount < options.transactionLimit) {
                options.balance = options.balance - amount;
                options.historyLogs.push({
                    operationType: `Withdrawal or credit`,
                    credits: amount,
                    operationTime: new Date().toLocaleString('en-GB')
                })
            } else if (amount > options.balance) {
                console.log(`You don't have enougth credits on your balance(`);
            } else {
                console.log(`Your transaction limit doesn't allow you to do this operation.`)
            }
        },

        setTransactionLimit: function (amount) {
            options.transactionLimit = amount;
            options.historyLogs.push({
                operationType: `Transaction limit change`,
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')
            })
        },

        transferCredits: function (amount, reciever) {
            if (amount < options.balance && amount < options.transactionLimit) {
                let amountWithFees = amount + amount * transferFee;
                options.balance = options.balance - amountWithFees;
                reciever.putCredits(amount);
                options.historyLogs.push({
                    operationType: `Withdrawal or credit`,
                    credits: amount,
                    operationTime: new Date().toLocaleString('en-GB')
                })
            } else if (amount > options.balance) {
                console.log(`You don't have enougth credits on your balance(`);
            } else {
                console.log(`Your transaction limit doesn't allow you to do this operation.`)
            }
        }
    }
    return methodsObject;
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.maxCardsAmount = 3;
    }

    addCard() {
        if (this.cards.length < this.maxCardsAmount) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log(`You already have maximum amount of cards.`)
        }
    }

    getCardByKey(key) {
        if (this.cards[key - 1]) {
            return this.cards[key - 1];
        } else {
            return console.log(`No such card key, add a new card or try in range from 1 to ${this.maxCardsAmount}`);
        }
    }
}