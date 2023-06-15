// let str: number | string = 'hello world';
// str = 4
// console.log(str);
var Account = /** @class */ (function () {
    function Account(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount.');
        }
        else {
            this.balance += amount;
        }
    };
    return Account;
}());
var account = new Account(67313170674, 'Vikas Maurya', 45);
account.deposit(23);
// console.log(account);
console.log(account instanceof Account);
