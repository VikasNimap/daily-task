// let str: number | string = 'hello world';
// str = 4
// console.log(str);

class Account {
    id: number;
    owner: string;
    balance: number
    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Invalid amount.')
        } else {
            this.balance += amount
        }
    }
}

let account = new Account(67313170674, 'Vikas Maurya', 45);
account.deposit(23);
// console.log(account);
console.log(account instanceof Account);
